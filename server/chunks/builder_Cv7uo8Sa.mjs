import { Op } from 'sequelize';

class ControllerBuilder {
  model;
  //private model: ModelStatic<T>;
  get Op() {
    return Op;
  }
  constructor() {
    this.model = new Model();
  }
  reset() {
    this.model = new Model();
  }
  setModel(model) {
    this.model.model = model;
    return this;
  }
  setWhereFilters(filters) {
    this.model.whereFilters = filters;
    return this;
  }
  setIncludedModels(models) {
    this.model.includedModels = models;
    return this;
  }
  setOrderFilters(filters) {
    this.model.orderFilters = filters;
    return this;
  }
  setReplacements(replacements) {
    this.model.replacements = replacements;
    return this;
  }
  setBody(body) {
    this.model.body = body;
    return this;
  }
  setTransaction(t) {
    this.model.transaction = t;
    return this;
  }
  setAttributes(att) {
    this.model.attributes = att;
    return this;
  }
  getResult() {
    const result = this.model;
    this.reset();
    return result;
  }
}
class Model {
  _transaction = null;
  _attributes = void 0;
  _model;
  _replacements;
  whereFilters = void 0;
  includedModels = void 0;
  orderFilters = void 0;
  _body = void 0;
  /*   constructor(model: ModelStatic<T>) {
    this.model = model;
  } */
  set model(model) {
    this._model = model;
  }
  set attributes(att) {
    this._attributes = att;
  }
  set replacements(replacements) {
    this._replacements = replacements;
  }
  set body(body) {
    this._body = body;
  }
  set transaction(transaction) {
    this._transaction = transaction;
  }
  async getOne() {
    return await this._model.findOne({
      where: this.whereFilters,
      include: this.includedModels,
      replacements: this._replacements,
      attributes: this._attributes
    });
  }
  async getAll() {
    return await this._model.findAll({
      include: this.includedModels,
      order: this.orderFilters,
      where: this.whereFilters,
      replacements: this._replacements,
      attributes: this._attributes
    });
  }
  async update() {
    return await this._model.update(this._body ?? {}, {
      where: this.whereFilters ?? {},
      transaction: this._transaction ?? void 0
    });
  }
  async create() {
    return await this._model.create(this._body ?? {}, {
      transaction: this._transaction ?? void 0
    });
  }
  async bulkCreate(callback) {
    return await this._model.bulkCreate(callback, {
      transaction: this._transaction ?? void 0
    });
  }
  async delete() {
    return await this._model.destroy({
      where: this.whereFilters ?? {},
      transaction: this._transaction ?? void 0
    });
  }
}

export { ControllerBuilder as C };
