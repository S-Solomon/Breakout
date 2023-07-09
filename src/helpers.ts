import { Brick } from "./sprites/Brick";
import {
  BRICK_IMAGES,
  LEVEL,
  STAGE_COLS,
  STAGE_PADDING,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BRICK_PADDING,
  BRICK_ENERGY,
} from "./setup";

export function createBricks(): Brick[] {
  // iterate over each element in array
  return LEVEL.reduce((accumulator, element, iterator) => {
    const row = Math.floor((iterator + 1) / STAGE_COLS);
    const col = iterator % STAGE_COLS;

    // calculate x and y pos, depending on row and column along with other constants
    const x = STAGE_PADDING + col * (BRICK_WIDTH + BRICK_PADDING);
    const y = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING);

    // if the element is 0 then there should be no bricks at that current pos
    // so we just return the accumulator as it is
    if (element === 0) return accumulator;

    return [
      ...accumulator,
      new Brick(
        BRICK_WIDTH,
        BRICK_HEIGHT,
        { x, y },
        BRICK_ENERGY[element],
        BRICK_IMAGES[element]
      ),
    ];
  }, [] as Brick[]);
}
