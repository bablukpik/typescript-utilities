/**
 * * The Awaited utility type lets us recursively unwrap any promises until it hits a non-promise value. If the value passed to Awaited is not a Promise, it returns the same type. This utility type can be used to infer the return type of a Promise-resolving function.
 *
 * * In detail:
 *
 * * The Awaited type will create a string type for `string` or a `Promise<string>` or a `Promise<Promise<string>>` or a `Promise<Promise<Promise<string>>>`. That means that it removes any number of Promise wrappers.
*
* * If we write const x = await y, then the generic type of x will be Awaited<T>; here, the type T means `typeof y` or simply Awaited<typeof y> but if we use ReturnType<typeof y> that will return a type with promise.
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
type A3 = Awaited<Promise<Promise<string>>>; // type A3 = string

/**
 * * Example 2
 */

async function foo(): Promise<string> {
  return 'hello world';
}

type FooResult1 = ReturnType<typeof foo>; //  Promise<string>
type FooResult2 = Awaited<ReturnType<typeof foo>>; // string

/**
 * * Example 3: Here's an example of a generic function that uses Awaited
 */

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

// OR

async function computeLogic2<T>(arg: Promise<T> | Awaited<Promise<T>>): Promise<T> {
  const result = await arg;
  return result;
}

const otherFunc2 = async () => {
  const r1 = await computeLogic2('Hey, there!');
  const r2 = await computeLogic2(Promise.resolve('Hey, there!'));
  console.log({ r1, r2 }); // { r1: 'Hey, there!', r2: 'Hey, there!' }
};

otherFunc2();

export { };
