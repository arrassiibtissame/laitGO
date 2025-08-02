export default class Route {
  constructor({ id, name, points, description }) {
    this.id = id;
    this.name = name;
    this.points = points || [];
    this.description = description;
  }
} 