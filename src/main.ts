// Import sprites and canvas
import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import { Collision } from "./Collision";

// images
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

// helper function
import { createBricks } from "./helpers";


// Initializing game state variables
let gameOver = false;
let score = 0;

// Game over and game win functions:
function setGameOver(view: CanvasView) {
  view.drawInfo("Game Over!");
  gameOver = false;
}
function setGameWin(view: CanvasView) {
  view.drawInfo("Game Won");
  gameOver = false;
}

// main game loop function that continuously updates the game view
function gameLoop(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball,
  collision: Collision
) {
  console.log('drawing!')
  view.clear(); // clear the canvas
  view.drawBricks(bricks); // draw bricks
  view.drawSprite(paddle); // draw paddle
  view.drawSprite(ball);
  ball.moveBall();
  paddle.movePaddle();

  collision.checkBallCollision(ball, paddle, view);
  const collidingBrick = collision.isCollidingBricks(ball, bricks);

  if (collidingBrick) {
    score += 1;
    view.drawScore(score);
  }

  // Game Over when ball leaves playField
  if (ball.pos.y > view.canvas.height) gameOver = true;
  // If game won, set gameOver and display win
  if (bricks.length === 0) return setGameWin(view);
  // Return if gameover and don't run the requestAnimationFrame
  if (gameOver) return setGameOver(view);



  // schedules the next iteration of the game loop using requestAnimationFrame.
  requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball, collision));
}

// This function is called when the game is started
function startGame(view: CanvasView) {
  // reset displays
  score = 0;
  view.drawInfo("");
  view.drawScore(0);
  // new collision instance
  const collision = new Collision();

  // create all bricks
  const bricks = createBricks();

  // create ball
  const ball = new Ball(
      BALL_SPEED,
      BALL_SIZE,
      {
          x: BALL_STARTX,
          y: BALL_STARTY,
      },
      BALL_IMAGE
  );

  // create paddle instance
  const paddle = new Paddle(
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_STARTX,
      y: view.canvas.height - PADDLE_HEIGHT - 5,
    },
    PADDLE_IMAGE,
    view.canvas.width
  );

  gameLoop(view, bricks, paddle, ball, collision);
}

// create a new instance of canvas view
const view = new CanvasView("#playField");
view.initStartButton(startGame);
