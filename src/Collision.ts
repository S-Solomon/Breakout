import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import { Ball } from "./sprites/Ball";
import { CanvasView } from "./view/CanvasView";

export class Collision {
  // Checks if a single brick is colliding with the ball.
  isCollidingBrick(ball: Ball, brick: Brick): boolean {
    if (
      ball.getPosition().x < brick.getPosition().x + brick.getWidth() &&
      ball.getPosition().x + ball.getWidth() > brick.getPosition().x &&
      ball.getPosition().y < brick.getPosition().y + brick.getHeight() &&
      ball.getPosition().y + ball.getHeight() > brick.getPosition().y
    ) {
      return true;
    }
    return false;
  }

  // Checks if any bricks in an array are colliding with the ball.
  isCollidingBricks(ball: Ball, bricks: Brick[]): boolean {
    let colliding = false;

    bricks.forEach((brick, index) => {
      if (this.isCollidingBrick(ball, brick)) {
        ball.changeYDirection();

        if (brick.energy === 1) {
          bricks.splice(index, 1);
        } else {
          brick.energy -= 1;
        }
        colliding = true;
      }
    });
    return colliding;
  }

  checkBallCollision(ball: Ball, paddle: Paddle, view: CanvasView): void {
    // 1. Check ball collision with paddle
    if (
      ball.getPosition().x + ball.getWidth() > paddle.getPosition().x &&
      ball.getPosition().x < paddle.getPosition().x + paddle.getWidth() &&
      ball.getPosition().y + ball.getWidth() === paddle.getPosition().y
    ) {
      ball.changeYDirection();
    }
    // 2. Check ball collision with walls
    // Ball movement X constraints
    if (
      ball.getPosition().x > view.canvas.width - ball.getWidth() ||
      ball.getPosition().x < 0
    ) {
      ball.changeXDirection();
    }
    // Ball movement Y constraints
    if (ball.getPosition().y < 0) {
      ball.changeYDirection();
    }
  }
}
