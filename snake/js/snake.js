class Snake {
  constructor() {
    const DIRECTIONS = ["N", "E", "S", "W"];
    Object.freeze(DIRECTIONS);
    this.direction = "N";
    this.segments = [];
  }

  move() {
    this.takeMove(this.calculateMove());
  }

  turn(newDirection) {
    this.direction = newDirection;
  }

  calculateMove() {
    const nextPos = this.segments[0];
    switch (this.direction) {
      case "N":
        nextPos[1] = nextPos[1] - 1;
        return nextPos;
      case "E":
        nextPos[0] = nextPos[0] + 1;
        return nextPos;
      case "S":
        nextPos[1] = nextPos[1] + 1;
        return nextPos;
      case "W":
        nextPos[0] = nextPos[0] - 1;
        return nextPos;
      default:
        return nextPos;
    }
  }

  takeMove(newPos) {
    this.segments.unshift(newPos);
    this.segments.pop();
  }

}

module.exports = Snake;
