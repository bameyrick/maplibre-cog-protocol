import { ImageRenderer, RendererMetadata } from '../types';
import { ColorScaleParams } from './colorScale';
type Options = RendererMetadata & {
    colorScale: ColorScaleParams;
};
declare const renderColor: ImageRenderer<Options>;
export default renderColor;
