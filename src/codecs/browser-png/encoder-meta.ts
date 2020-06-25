export interface EncodeOptions {}
export interface EncoderState { type: typeof type; options: EncodeOptions; }

export const type = 'browser-png';
export const label = '浏览器 png';
export const mimeType = 'image/png';
export const extension = 'png';
export const defaultOptions: EncodeOptions = {};
