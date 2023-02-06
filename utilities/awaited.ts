/**
 * * The Awaited utility type lets us recursively unwrap any Promises until it hits a non-promise.
 *
 * * For Example:
 *
 * * The Awaited type will create a string type for `string` or a `Promise<string>` or a `Promise<Promise<string>>` or a `Promise<Promise<Promise<string>>>`. That means that it removes any number of Promise wrappers.
*
* * If we write const x = await y, then the generic type of x will be Awaited<typeof y> but if we use ReturnType<typeof y> that will return a type with promises.
*
* * It returns an accurate return type for Promise.all, Promise.race, Promise.allSettled, and Promise.any

*
 * * Syntax: Awaited<Type or Promise<Type> or Promise<Promise<Type>> or Promise<Promise<Promise<Type>>>> and so on.
*/

/**
 * * Example 1
 */

type A1 = Awaited<string>; // type A1 = string
type A2 = Awaited<Promise<string>>; // type A2 = string

/**
 * * Example 2
 */

// Generic Example:

// Before TypeScript version 4.5, there was a unexpected type conversion happening with Promise in a generic function.

// async function computeLogic<T>(arg: Promise<T>): Promise<T[]> {
//   return [await arg];
// }

// const otherFunc = async () => {
//   const r1 = await computeLogic<string>('Hey, there!'); // type 'string' is not assignable to parameter of type 'Promise<string>'
//   const r2 = await computeLogic(Promise.resolve('Hey, there!'));
//   console.log({ r1, r2 });
// };

// Let's fix the above code block

async function computeLogic<T>(arg: Promise<T> | Awaited<Promise<T>>): Promise<T[]> {
  return [await arg];
}

const otherFunc = async () => {
  const r1 = await computeLogic('Hey, there!');
  const r2 = await computeLogic(Promise.resolve('Hey, there!'));
  console.log({ r1, r2 }); // { r1: [ 'Hey, there!' ], r2: [ 'Hey, there!' ] }
};

otherFunc();

export { };
