import RED_BRICK from "./images/brick-red.png";
import BLUE_BRICK from "./images/brick-blue.png";
import GREEN_BRICK from "./images/brick-green.png";
import PURPLE_BRICK from "./images/brick-purple.png";
import YELLOW_BRICK from "./images/brick-yellow.png";

const canvas: HTMLCanvasElement | null = document.querySelector("#playField");

export const STAGE_PADDING = 10; // The padding around the game stage.
export const STAGE_ROWS = 20; // The number of rows in the game stage.
export const STAGE_COLS = 10; // The number of columns in the game stage.
export const BRICK_PADDING = 5; // The padding between bricks.
export const BRICK_WIDTH = canvas
  ? Math.floor((canvas.width - STAGE_PADDING * 2) / STAGE_COLS) - BRICK_PADDING
  : 100; // The width of each brick, calculated based on the canvas width and the stage configuration.
export const BRICK_HEIGHT = canvas
  ? Math.floor((canvas.height - STAGE_PADDING * 2) / STAGE_ROWS) - BRICK_PADDING
  : 30; // The height of each brick, calculated based on the canvas height and the stage configuration.
export const PADDLE_WIDTH = 150; // The width of the paddle.
export const PADDLE_HEIGHT = 25; // The height of the paddle.
export const PADDLE_STARTX = 450; // The starting x-coordinate of the paddle.
export const PADDLE_SPEED = 10; // The speed of the paddle.
export const BALL_SPEED = 5; // The speed of the ball.
export const BALL_SIZE = 20; // The size of the ball.
export const BALL_STARTX = 500; // The starting x-coordinate of the ball.
export const BALL_STARTY = 400; // The starting y-coordinate of the ball.

// lookup object, maps numbers (brick types) to their respective image file paths.
export const BRICK_IMAGES: { [key: number]: string } = {
  1: RED_BRICK,
  2: GREEN_BRICK,
  3: YELLOW_BRICK,
  4: BLUE_BRICK,
  5: PURPLE_BRICK,
};

// maps numbers (brick types) to their energy levels.
// Energy levels represent the number of hits required to destroy a brick.
export const BRICK_ENERGY: { [key: number]: number } = {
  1: 1, // Red brick
  2: 1, // Green brick
  3: 2, // Yellow brick
  4: 2, // Blue brick
  5: 3, // Purple brick
};

// array represents the layout of the bricks in the game stage.
// Each number corresponds to a brick type, and zeros represent empty spaces.
export const LEVEL = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2,
  2, 2, 2, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0,
  5, 5, 0, 0, 5, 5, 0, 0,
];
