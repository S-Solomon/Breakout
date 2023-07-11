// Import sprites and canvas
import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import { Collision } from "./Collision";
import { createBricks } from "./helpers";
import PADDLE_IMAGE from "./images/paddle.png";
import BALL_IMAGE from "./images/ball.png";

// levels and colours
import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_STARTX,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTX,
  BALL_STARTY,
} from "./setup";


class Breakout {
  private view: CanvasView;
  private bricks: Brick[];
  private paddle: Paddle;
  private ball: Ball;
  private collision: Collision;
  private gameOver: boolean;
  private score: number;

  constructor() {
    this.view = new CanvasView("#playField");
    this.bricks = [];
    this.paddle = new Paddle(
      PADDLE_SPEED,
      PADDLE_WIDTH,
      PADDLE_HEIGHT,
      {
        x: PADDLE_STARTX,
        y: this.view.canvas.height - PADDLE_HEIGHT - 5,
      },
      PADDLE_IMAGE,
      this.view.canvas.width
    );
    this.ball = new Ball(
      BALL_SPEED,
      BALL_SIZE,
      {
        x: BALL_STARTX,
        y: BALL_STARTY,
      },
      BALL_IMAGE
    );
    this.collision = new Collision();
    this.gameOver = false;
    this.score = 0;
  }

  private setGameOver(): void {
    this.view.drawInfo("Game Over!");
    this.gameOver = true;
  }

  private setGameWin(): void {
    this.view.drawInfo("Game Won");
    this.gameOver = true;
  }

  private gameLoop(): void {
    this.view.clear(); // clear the canvas
    this.view.drawBricks(this.bricks); // draw bricks
    this.view.drawSprite(this.paddle); // draw paddle
    this.view.drawSprite(this.ball);
    this.ball.moveBall();
    this.paddle.movePaddle();

    this.collision.checkBallCollision(this.ball, this.paddle, this.view);
    const collidingBrick = this.collision.isCollidingBricks(
      this.ball,
      this.bricks
    );

    if (collidingBrick) {
      this.score += 1;
      this.view.drawScore(this.score);
    }

    // Game Over when ball leaves playField
    if (this.ball.getPosition().y > this.view.canvas.height)
      this.gameOver = true;
    // If game won, set gameOver and display win
    if (this.bricks.length === 0) return this.setGameWin();
    // Return if game over and don't run the requestAnimationFrame
    if (this.gameOver) return this.setGameOver();

    requestAnimationFrame(() => this.gameLoop());
  }

  public startGame(): void {
    this.score = 0;
    this.view.drawInfo("");
    this.view.drawScore(0);
    this.gameOver = false;

    this.bricks = createBricks();

    this.gameLoop();
  }

  public initStartButton(): void {
    this.view.initStartButton(() => this.startGame());
  }
}


const game = new Breakout();
game.initStartButton();