export default class Tank {
  constructor({ id, barcode, capacity, status, activationDate, deactivationDate, truckId }) {
    this.id = id;
    this.barcode = barcode;
    this.capacity = capacity;
    this.status = status;
    this.activationDate = activationDate;
    this.deactivationDate = deactivationDate;
    this.truckId = truckId;
  }
} 