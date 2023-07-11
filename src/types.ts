export type Vector = {
  x: number;
  y: number;
};

export abstract class Sprite {
  protected position: Vector;
  protected spriteImage: HTMLImageElement | any = new Image();

  constructor(
    protected width: number,
    protected height: number,
    protected image: string,
    position: Vector
  ) {
    this.width = width;
    this.height = height;
    this.position = position;
    this.spriteImage.src = image;
  }

  abstract update(): void;

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getPosition(): Vector {
    return this.position;
  }

  getImage(): HTMLImageElement {
    return this.spriteImage;
  }
}