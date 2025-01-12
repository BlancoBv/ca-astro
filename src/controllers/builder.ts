import {
  Model as ModelI,
  type Attributes,
  type Includeable,
  type ModelStatic,
  type Order,
  type WhereOptions,
  Op,
  type BindOrReplacements,
  Transaction,
} from "sequelize";
import type { MakeNullishOptional } from "sequelize/lib/utils";

interface Builder {
  setWhereFilters(filters: WhereOptions<Attributes<any>> | undefined): this;
  setIncludedModels(models: Includeable | Includeable[] | undefined): this;
  setOrderFilters(filters: Order | undefined): this;
  setModel(model: ModelStatic<any>): this;
  setReplacements(replacements: BindOrReplacements): this;
  setBody(body: { [key in keyof Attributes<any>]: any }): this;
  setTransaction(t: Transaction): this;
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

  setBody(body: { [key in keyof Attributes<T>]: any }): this {
    this.model.body = body;
    return this;
  }

  setTransaction(t: Transaction): this {
    this.model.transaction = t;
    return this;
  }

  getResult(): Model<T> {
    const result = this.model;
    this.reset();
    return result;
  }
}

class Model<T extends ModelI> {
  private _transaction: Transaction | null = null;
  private _model!: ModelStatic<T>;
  private _replacements: BindOrReplacements | undefined;
  public whereFilters: WhereOptions<Attributes<T>> | undefined = undefined;
  public includedModels: Includeable[] | undefined | Includeable = undefined;
  public orderFilters: Order | undefined = undefined;
  private _body: { [key in keyof Attributes<T>]: any } | any | undefined =
    undefined;

  /*   constructor(model: ModelStatic<T>) {
    this.model = model;
  } */

  public set model(model: ModelStatic<T>) {
    this._model = model;
  }

  public set replacements(replacements: BindOrReplacements) {
    this._replacements = replacements;
  }
  public set body(body: { [key in keyof Attributes<T>]: any }) {
    this._body = body;
  }
  public set transaction(transaction: Transaction) {
    this._transaction = transaction;
  }

  public async getOne(): Promise<T | null> {
    return await this._model.findOne({
      where: this.whereFilters,
      include: this.includedModels,
      replacements: this._replacements,
    });
  }

  public async getAll(): Promise<T[]> {
    return await this._model.findAll({
      include: this.includedModels,
      order: this.orderFilters,
      where: this.whereFilters,
      replacements: this._replacements,
    });
  }

  public async update() {
    return await this._model.update(this._body ?? {}, {
      where: this.whereFilters ?? {},
      transaction: this._transaction ?? undefined,
    });
  }
  public async create() {
    return await this._model.create(this._body ?? {}, {
      transaction: this._transaction ?? undefined,
    });
  }

  public async bulkCreate(callback: MakeNullishOptional<T[any]>[]) {
    return await this._model.bulkCreate(callback, {
      transaction: this._transaction ?? undefined,
    });
  }

  public async delete() {
    return await this._model.destroy({
      where: this.whereFilters ?? {},
      transaction: this._transaction ?? undefined,
    });
  }
}
