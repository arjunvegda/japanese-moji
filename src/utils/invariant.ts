// const defaultMessage = 'Invariant failed, an error occurred in " library';

// Throw an error if the condition fails
// Strip out error messages for production
// > Not providing an inline default argument for message as the result is smaller

import { makeString } from './make-string';

export function invariant(
  condition: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  // Can provide a string, or a function that returns a string for cases where
  // the message takes a fair amount of effort to compute
  message: string,
): asserts condition {
  if (condition) {
    return;
  }
  const value: string = makeString('[japanese-moji]: ', message);
  throw new Error(value);
}
