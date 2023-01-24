/**
 * * The "Required" utility allows you to make all properties of an object required. This is the opposite of Partial.
 *
 */

/**
 * * Example
 */

interface Person {
  name: string;
  email: string;
  age?: number;
  address?: string;
}

const person: Person = {
  name: 'John',
  email: 'example@example.com',
  age: 35,
};

const person2: Required<Person> = {
  name: 'John',
  email: 'example@example.com',
  age: 35,
};

// Error: Property 'address' is missing in type '{ name: string; email: string; age: number; }' but required in type 'Required<Person>'.

export { };
