// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GeneralObject<T = any> = Record<string | number | symbol, T>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Callback = (...args: any[]) => Promise<any>;
