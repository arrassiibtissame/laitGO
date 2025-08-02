export default class Mission {
  constructor({ id, agentId, conductorId, routeId, date, status }) {
    this.id = id;
    this.agentId = agentId;
    this.conductorId = conductorId;
    this.routeId = routeId;
    this.date = date;
    this.status = status;
  }
} 