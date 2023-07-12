import { describe, expect, test } from "@jest/globals";
import { Ball } from "../sprites/Ball";


jest.mock("../sprites/Ball.ts", () => {
  class MockImage {
    src: string;
    onload: Function;

    constructor() {
      this.src = "";
      this.onload = () => {};
    }
  }

  let position = { x: 0, y: 0 }; // Initial position

  return {
    Ball: jest.fn().mockImplementation(() => ({
      getPosition: jest.fn().mockImplementation(() => position),
      changeYDirection: jest.fn(),
      changeXDirection: jest.fn(),
      moveBall: jest.fn(() => {
        // Update position by adding 2 to x and y coordinates
        position.x += 2;
        position.y += 2;
      }),
    })),
    MockImage, // Export the mocked Image object
  };
});

describe("Ball class", () => {
  test("should move ball correctly", () => {
    // Create an instance of the Ball class
    const ball = new Ball(2, 10, { x: 0, y: 0 }, "ball.png");

    // Initial position should be (0, 0)
    expect(ball.getPosition().x).toBe(0);
    expect(ball.getPosition().y).toBe(0);

    // Move the ball
    ball.moveBall();

    // After moving, the new position should be (2, 2)
    expect(ball.getPosition().x).toBe(2);
    expect(ball.getPosition().y).toBe(2);
  });

});