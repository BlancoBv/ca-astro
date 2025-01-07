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
  getResult() {
    const result = this.model;
    this.reset();
    return result;
  }
}
class Model {
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
  set replacements(replacements) {
    this._replacements = replacements;
  }
  set body(body) {
    this._body = body;
  }
  async getOne() {
    return await this._model.findOne({
      where: this.whereFilters,
      include: this.includedModels,
      replacements: this._replacements
    });
  }
  async getAll() {
    return await this._model.findAll({
      include: this.includedModels,
      order: this.orderFilters,
      where: this.whereFilters,
      replacements: this._replacements
    });
  }
  async update() {
    return await this._model.update(this._body ?? {}, {
      where: this.whereFilters ?? {}
    });
  }
}

export { ControllerBuilder as C };
