// Enables the importing of images as modules, making it very convenient

declare module '*.png' {
    const value: string;
    export = value;
}