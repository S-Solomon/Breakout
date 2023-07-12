import { Vector } from "../types";
import { Sprite } from "../types";

export class Ball extends Sprite {
  private speed: Vector;

  constructor(
    speed: number,
    ballSize: number,
    position: Vector,
    image: string
  ) {
    super(ballSize, ballSize, image, position);
    this.speed = {
      x: speed,
      y: -speed,
    };
  }

  update(): void {}

  // Methods
  changeYDirection(): void {
    this.speed.y = -this.speed.y;
  }

  changeXDirection(): void {
    this.speed.x = -this.speed.x;
  }

  moveBall(): void {
    this.position = {
      x: this.position.x + this.speed.x,
      y: this.position.y + this.speed.y,
    };
  }
}
