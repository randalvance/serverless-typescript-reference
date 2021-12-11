import type { AWS } from '@serverless/typescript';

type ValueOf<T>  = T[keyof T];

export type Function = ValueOf<AWS['functions']>;