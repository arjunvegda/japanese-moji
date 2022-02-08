import { makeString } from './make-string';

export function invariant(
  condition: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  message: string,
): asserts condition {
  if (condition) {
    return;
  }
  const value: string = makeString('[japanese-moji]: ', message);
  throw new Error(value);
}
