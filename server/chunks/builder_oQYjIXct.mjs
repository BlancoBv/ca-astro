import 'sequelize';

class ControllerBuilder {
  modelL;
  model;
  constructor(model) {
    this.model = model;
    this.modelL = new Model(this.model);
  }
  reset() {
    this.modelL = new Model(this.model);
  }
  setWhereFilters(filters) {
    this.modelL.whereFilters = filters;
  }
  setIncludedModels(models) {
    this.modelL.includedModels = models;
  }
  setOrderFilters(filters) {
    this.modelL.orderFilters = filters;
  }
  getResult() {
    const result = this.modelL;
    this.reset();
    return result;
  }
}
class Model {
  model;
  whereFilters = void 0;
  includedModels = void 0;
  orderFilters = void 0;
  constructor(model) {
    this.model = model;
  }
  async getOne() {
    console.log(this.whereFilters, "filtros");
    return await this.model.findOne({
      where: this.whereFilters,
      include: this.includedModels
    });
  }
  async getAll() {
    return await this.model.findAll({
      include: this.includedModels,
      order: this.orderFilters,
      where: this.whereFilters
    });
  }
}

export { ControllerBuilder as C };
