/**
 * * The "Omit" utility type creates a new type that has all the properties of the original type except for the specified ones to omit. It's the opposite type of the "Pick" type.
 */

interface User {
  name: string;
  age: number;
  email: string;
}

/**
 * * Example: 1
 */

type UserWithoutEmail = Omit<User, 'email'>;

const obj: UserWithoutEmail = {
  name: 'Bablu Ahmed',
  age: 35,
};

/**
 * * Example: 2
 */

type UserData = Omit<User, 'age'> & { role: string; roleId: number };

const obj2: UserData = {
  name: 'Bablu Ahmed',
  role: 'Super Admin',
  roleId: 1,
  email: 'example@example.com',
};

export { };
