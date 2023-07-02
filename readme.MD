# Breakout game clone

  This is an implementation of the classic arcade game Breakout.

## Pre Design Step
- The goal of this game project is to destroy all the bricks on the screen by bouncing
a ball off a paddle.


Essential features the game should have are:
  - Paddle control
  - Ball movement
  - Brick destruction
  - Scoring system
  - Levels
  - Game over conditions
  - Multiple levels with increasing difficulty
  - Different types of bricks with varying properties
  - Power ups
  - Sound effect
  

- Pertaining the user journey and cognitive load, there should be intuitive controls with responsive
paddle movement and clear instructions. We should gradually introduce game mechanics, avoid overwhelming the player with too many elements, 
and guide the player through the game's progression.


## Design Step

Here's a high-level description of the logic and flow of the game:

1. Initialization:
Initialize the game window and graphics.
Create and position the paddle at the bottom of the playfield.
Generate a formation of blocks on the playfield.
Set the ball in motion, initially bouncing off the paddle.

2. Game Loop:
Continuously update the game state and render graphics until the game ends.
Check for user input to control the paddle movement.
Update the position and behavior of the ball.
Detect collisions between the ball, paddle, and blocks.
Handle the effects of power-ups and block destruction.
Update the score, lives, and other relevant game information.
Check for game over conditions (e.g., ball falling below the paddle, running out of lives).

3. Collision Detection:
Check if the ball collides with the paddle.
Determine the angle of ball deflection based on the collision point.
Adjust the ball's trajectory and speed accordingly.
Check if the ball collides with any blocks.
Destroy the blocks upon collision and update the score.
Apply power-up effects if a block contains one.
Handle special blocks (indestructible or requiring multiple hits).


4. Power-ups:
Randomly generate power-ups within certain blocks.
Activate power-ups upon collision with the ball.
Implement various power-up effects (e.g., paddle enlargement, extra balls, cannons).

5. Game Over:
Check if the player has cleared all the blocks.
If all blocks are cleared, display a victory message and calculate the final score.
If the ball falls below the paddle and lives are remaining, decrease the number of lives and reset the ball and paddle positions.
If the player runs out of lives, display a game over message and final score.

  ### First Iteration
  - Get images for bricks / Paddle / ball
  - Could use the javascript canvas API to create these elements in another iteration ?

  ### Second Iteration
  - Refactor code to make bricks via html canvas
  - Add sound to ball, bricks.


  ### Third Iteration
  - Add health to the user. This is represented with hearts in the upper right side on the screen


## Development Step
- Use jest as a testing library
- unit test /integration tests / user tests