// Import sprites and canvas
import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";

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