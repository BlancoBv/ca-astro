import {
  Model as ModelI,
  type Attributes,
  type Includeable,
  type ModelStatic,
  type Order,
  type WhereOptions,
  Op,
  type BindOrReplacements,
} from "sequelize";

interface Builder {
  setWhereFilters(filters: WhereOptions<Attributes<any>> | undefined): this;
  setIncludedModels(models: Includeable | Includeable[] | undefined): this;
  setOrderFilters(filters: Order | undefined): this;
  setModel(model: ModelStatic<any>): this;
  setReplacements(replacements: BindOrReplacements): this;
}

export class ControllerBuilder<T extends ModelI<T>> implements Builder {
  private model: Model<T>;

  //private model: ModelStatic<T>;

  public get Op() {
    return Op;
  }

  constructor() {
    //this.model = model;
    this.model = new Model();
  }
  reset(): void {
    this.model = new Model();
  }

  setModel(model: ModelStatic<T>): this {
    this.model.model = model;
    return this;
  }
  setWhereFilters(filters: WhereOptions<Attributes<any>> | undefined): this {
    this.model.whereFilters = filters;
    return this;
  }
  setIncludedModels(models: Includeable | Includeable[] | undefined): this {
    this.model.includedModels = models;
    return this;
  }
  setOrderFilters(filters: Order | undefined): this {
    this.model.orderFilters = filters;
    return this;
  }

  setReplacements(replacements: BindOrReplacements): this {
    this.model.replacements = replacements;
    return this;
  }

  getResult(): Model<T> {
    const result = this.model;
    this.reset();
    return result;
  }
}

class Model<T extends ModelI> {
  private _model!: ModelStatic<T>;
  private _replacements: BindOrReplacements | undefined;
  public whereFilters: WhereOptions<Attributes<T>> | undefined = undefined;
  public includedModels: Includeable[] | undefined | Includeable = undefined;
  public orderFilters: Order | undefined = undefined;

  /*   constructor(model: ModelStatic<T>) {
    this.model = model;
  } */

  public set model(model: ModelStatic<T>) {
    this._model = model;
  }

  public set replacements(replacements: BindOrReplacements) {
    this._replacements = replacements;
  }

  public async getOne(): Promise<T | null> {
    return await this._model.findOne({
      where: this.whereFilters,
      include: this.includedModels,
      replacements: this._replacements,
    });
  }

  public async getAll(): Promise<T[]> {
    console.log(this.whereFilters);

    return await this._model.findAll({
      include: this.includedModels,
      order: this.orderFilters,
      where: this.whereFilters,
      replacements: this._replacements,
    });
  }
}
