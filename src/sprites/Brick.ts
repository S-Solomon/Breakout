import { Vector } from "../types";
import { Sprite } from "../types";

export class Brick extends Sprite {
  private brickEnergy: number;

  constructor(
    brickWidth: number,
    brickHeight: number,
    position: Vector,
    brickEnergy: number,
    image: string
  ) {
    super(brickWidth, brickHeight, image, position);
    this.brickEnergy = brickEnergy;
  }

  update(): void {
    // Additional logic specific to bricks
  }

  get energy(): number {
    return this.brickEnergy;
  }

  set energy(energy: number) {
    this.brickEnergy = energy;
  }
}
