import { TypedArray } from 'geotiff';
import { TileIndex } from '../types';
export declare function getRawTile(url: string, { z, x, y }: TileIndex, tileSize?: number): Promise<TypedArray[]>;
