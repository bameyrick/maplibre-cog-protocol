import { Bbox, LatLonZoom, TileIndex, TilePixel, XYBounds } from '../types';
export declare const tileIndexToMercatorBbox: ({ x, y, z }: TileIndex) => Bbox;
export declare const imageBboxToTileBounds: (bbox: Bbox, zoom: number) => XYBounds;
export declare const xyBoundsToGeographicBbox: ({ minX, minY, maxX, maxY }: XYBounds, zoom: number) => Bbox;
export declare const mercatorBboxToGeographicBbox: ([xMin, yMin, xMax, yMax]: Bbox) => Bbox;
export declare const zoomFromResolution: (res: number) => number;
export declare const tilePixelFromLatLonZoom: ({ latitude, longitude, zoom }: LatLonZoom) => TilePixel;
