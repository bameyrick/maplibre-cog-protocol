import { ImageRenderer, RendererMetadata } from '../../types';
type Renderer = ImageRenderer<RendererMetadata>;
declare const _default: {
    get: (url: string) => Renderer | undefined;
    set: (url: string, renderer: Renderer) => void;
};
export default _default;
