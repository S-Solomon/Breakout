import { Vector } from "../types";
import { Sprite } from "../types";

export class Paddle extends Sprite {
  private moveLeft: boolean;
  private moveRight: boolean;
  private speed: number;

  constructor(
    speed: number,
    paddleWidth: number,
    paddleHeight: number,
    position: Vector,
    image: string,
    private canvasWidth: number
  ) {
    super(paddleWidth, paddleHeight, image, position);
    this.moveLeft = false;
    this.moveRight = false;
    this.speed = speed;

    // Keyboard event listeners
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    document.addEventListener("keyup", this.handleKeyUp.bind(this));
  }

  update(): void {}

  movePaddle(): void {
    if (this.moveLeft && this.position.x > 0) {
      this.position.x -= this.speed;
    }
    if (this.moveRight && this.position.x + this.width < this.canvasWidth) {
      this.position.x += this.speed;
    }
  }

  handleKeyUp = (event: KeyboardEvent): void => {
    if (event.code === "ArrowLeft" || event.key === "ArrowLeft")
      this.moveLeft = false;
    if (event.code === "ArrowRight" || event.key === "ArrowRight")
      this.moveRight = false;
  };

  handleKeyDown = (event: KeyboardEvent): void => {
    if (event.code === "ArrowLeft" || event.key === "ArrowLeft")
      this.moveLeft = true;
    if (event.code === "ArrowRight" || event.key === "ArrowRight")
      this.moveRight = true;
  };
}