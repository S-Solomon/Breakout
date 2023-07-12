import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import { Ball } from "./sprites/Ball";
import { CanvasView } from "./view/CanvasView";

export class Collision {
  // Checks if a single brick is colliding with the ball.
  isCollidingBrick(ball: Ball, brick: Brick): boolean {
    // Perform circle-rectangle collision detection between the ball and brick

    // Calculate the radius of the ball
    const ballRadius = ball.getWidth() / 2;

    // Calculate the closest point on the brick's rectangle to the ball's center
    const closestX = Math.max(
      brick.getPosition().x,
      Math.min(ball.getPosition().x, brick.getPosition().x + brick.getWidth())
    );
    const closestY = Math.max(
      brick.getPosition().y,
      Math.min(ball.getPosition().y, brick.getPosition().y + brick.getHeight())
    );

    // Calculate the distance between the closest point and the ball's center
    const distanceX = ball.getPosition().x - closestX;
    const distanceY = ball.getPosition().y - closestY;
    const distanceSquared = distanceX * distanceX + distanceY * distanceY;

    // Check if the distance is less than the ball's radius squared
    return distanceSquared < ballRadius * ballRadius;
  }

  // Checks if any bricks in an array are colliding with the ball.
  isCollidingBricks(ball: Ball, bricks: Brick[]): boolean {
    let colliding = false;

    // Iterate over the bricks in reverse order to allow safe removal
    for (let i = bricks.length - 1; i >= 0; i--) {
      const brick = bricks[i];

      if (this.isCollidingBrick(ball, brick)) {
        // Reverse the ball's vertical direction upon collision
        ball.changeYDirection();

        if (brick.energy === 1) {
          // Remove the brick if its energy is depleted
          bricks.splice(i, 1);
        } else {
          // Decrease the brick's energy
          brick.energy -= 1;
        }
        colliding = true;
      }
    }
    return colliding;
  }

  // Checks ball collision with paddle and walls
  checkBallCollision(ball: Ball, paddle: Paddle, view: CanvasView): void {
    // Check ball collision with paddle
    if (
      ball.getPosition().x + ball.getWidth() > paddle.getPosition().x &&
      ball.getPosition().x < paddle.getPosition().x + paddle.getWidth() &&
      ball.getPosition().y + ball.getHeight() === paddle.getPosition().y
    ) {
      // Reverse the ball's vertical direction upon collision with the paddle
      ball.changeYDirection();
    }

    // Check ball collision with walls
    const canvasWidth = view.canvas.width;

    // Ball movement X constraints
    if (
      ball.getPosition().x > canvasWidth - ball.getWidth() ||
      ball.getPosition().x < 0
    ) {
      // Reverse the ball's horizontal direction upon collision with the side walls
      ball.changeXDirection();
    }

    // Ball movement Y constraints
    if (ball.getPosition().y < 0) {
      // Reverse the ball's vertical direction upon collision with the top wall
      ball.changeYDirection();
    }
  }
}