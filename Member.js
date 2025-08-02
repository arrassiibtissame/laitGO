export default class Member {
  constructor({ id, name, contact, productionUnits }) {
    this.id = id;
    this.name = name;
    this.contact = contact;
    this.productionUnits = productionUnits || [];
  }
} 