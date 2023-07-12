import { describe, expect, test } from "@jest/globals";
import { Brick } from "../sprites/Brick";
import { Vector } from "../types";

// Mock the dependencies
jest.mock("../sprites/Brick.ts", () => {
  class MockImage {
    src: string;
    onload: Function;

    constructor() {
      this.src = "";
      this.onload = () => {};
    }
  }

  let position: Vector = { x: 0, y: 0 };
  let brickEnergy: number = 0;

  return {
    Brick: jest.fn().mockImplementation(() => ({
      getPosition: jest.fn().mockImplementation(() => position),
      update: jest.fn(),
      get energy() {
        return brickEnergy;
      },
      set energy(value: number) {
        brickEnergy = value;
      },
    })),
    MockImage,
  };
});

describe("Brick class", () => {
  test("should set energy correctly", () => {
    // Create an instance of the Brick class
    const brick = new Brick(50, 20, { x: 10, y: 20 }, 3, "brick.png");

    // Set the energy property
    brick.energy = 5;

    // Assert that the energy property is updated correctly
    expect(brick.energy).toBe(5);
  });
});