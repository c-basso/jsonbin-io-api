export declare type Result<DataType> = [
	Error | undefined,
	DataType | undefined
];

/**
 * @example const [err, data] = await to(promise);
 */
export const to = <DataType = Record<string, string>>(promise: Promise<DataType>): Promise<Result<DataType>> => promise
	.then((data) => ([undefined, data] as Result<DataType>))
	.catch((err) => ([err, undefined]));


export const isBoolean = (value: boolean): boolean => typeof (value) === typeof (true);
