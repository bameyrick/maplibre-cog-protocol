import { TypedArray } from 'geotiff';
import { PixelValue, RGBAValue } from '../types';
export declare function fromWhiteIsZero([px]: PixelValue, color: RGBAValue, max: number, transparentValue: number): void;
export declare function fromBlackIsZero([px]: PixelValue, color: RGBAValue, max: number, transparentValue: number): void;
export declare function fromRGB(data: TypedArray[], pixelIndex: number, color: RGBAValue, transparentValue: number): void;
export declare function fromPalette([mapIndex]: PixelValue, color: RGBAValue, colorMap: Array<number>, transparentValue: number): void;
export declare function fromCMYK(data: TypedArray[], pixelIndex: number, color: RGBAValue, transparentValue: number): void;
export declare function fromYCbCr(data: TypedArray[], pixelIndex: number, color: RGBAValue, transparentValue: number): void;
export declare function fromCIELab(data: TypedArray[], pixelIndex: number, color: RGBAValue, transparentValue: number): void;
