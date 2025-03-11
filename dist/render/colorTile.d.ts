import { TypedArray } from 'geotiff';
import { ColorFunction, RendererMetadata, RGBAValue } from '../types';
/**
 * Colors all pixels in a tile using a provided color function.
 */
export declare function colorTile(data: TypedArray[], metadata: RendererMetadata, colorPixel: ColorFunction, rgba?: RGBAValue): Uint8ClampedArray;
