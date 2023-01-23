/**
 * * By using the "Readonly" utility, you can ensure that an object's properties cannot be modified. This can be useful for preventing unexpected changes and ensuring the integrity of your data.
 */

/**
 * * Example
 */

interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: 'John',
  age: 36,
};

// user.age = 35; // Error: Cannot assign to 'age' because it is a read-only property
