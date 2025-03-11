import { FeatureCollection, MultiPolygon, Polygon } from 'geojson';
import { CogMetadata, MaskRows } from '../types';
export declare function setMask(mask: FeatureCollection<Polygon | MultiPolygon> | undefined): void;
export declare function clearMask(): void;
export declare function getMaskRows(zoom: number, { zoomLevelMetadata }: CogMetadata): MaskRows | undefined;
