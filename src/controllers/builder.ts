import {
  Model as ModelI,
  type Attributes,
  type Includeable,
  type ModelStatic,
  type Order,
  type WhereOptions,
} from "sequelize";

interface Builder {
  setWhereFilters(filters: WhereOptions<Attributes<any>> | undefined): void;
  setIncludedModels(models: Includeable | Includeable[] | undefined): void;
  setOrderFilters(filters: Order | undefined): void;
}

export class ControllerBuilder<T extends ModelI<T>> implements Builder {
  private modelL: Model<T>;
  private model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
    this.modelL = new Model(this.model);
  }
  reset(): void {
    this.modelL = new Model(this.model);
  }
  setWhereFilters(filters: WhereOptions<Attributes<T>> | undefined): void {
    this.modelL.whereFilters = filters;
  }
  setIncludedModels(models: Includeable | Includeable[] | undefined): void {
    this.modelL.includedModels = models;
  }
  setOrderFilters(filters: Order | undefined): void {
    this.modelL.orderFilters = filters;
  }

  getResult(): Model<T> {
    const result = this.modelL;
    this.reset();
    return result;
  }
}

class Model<T extends ModelI> {
  private model: ModelStatic<T>;
  public whereFilters: WhereOptions<Attributes<T>> | undefined = undefined;
  public includedModels: Includeable[] | undefined | Includeable = undefined;
  public orderFilters: Order | undefined = undefined;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  public async getOne(): Promise<T | null> {
    console.log(this.whereFilters, "filtros");

    return await this.model.findOne({
      where: this.whereFilters,
      include: this.includedModels,
    });
  }

  public async getAll(): Promise<T[]> {
    return await this.model.findAll({
      include: this.includedModels,
      order: this.orderFilters,
      where: this.whereFilters,
    });
  }
}
