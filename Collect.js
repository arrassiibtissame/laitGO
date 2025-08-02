export default class Collect {
  constructor({ id, missionId, tankId, uniteId, quantity, quality, test, barcode, dateTime, remarks }) {
    this.id = id;
    this.missionId = missionId;
    this.tankId = tankId;
    this.uniteId = uniteId;
    this.quantity = quantity;
    this.quality = quality;
    this.test = test;
    this.barcode = barcode;
    this.dateTime = dateTime;
    this.remarks = remarks;
  }
} 