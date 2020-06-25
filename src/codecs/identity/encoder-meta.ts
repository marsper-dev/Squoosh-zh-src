export interface EncodeOptions {}
export interface EncoderState { type: typeof type; options: EncodeOptions; }

export const type = 'identity';
export const label = '原图';
export const defaultOptions: EncodeOptions = {};
