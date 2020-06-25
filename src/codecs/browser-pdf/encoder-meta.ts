import { canvasEncodeTest } from '../generic/util';

export interface EncodeOptions { }
export interface EncoderState { type: typeof type; options: EncodeOptions; }

export const type = 'browser-pdf';
export const label = '浏览器 pdf';
export const mimeType = 'application/pdf';
export const extension = 'pdf';
export const defaultOptions: EncodeOptions = {};
export const featureTest = () => canvasEncodeTest(mimeType);
