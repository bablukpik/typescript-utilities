/**
 * * The "Pick" utility allows you to create a new type from an existing one by selecting only certain properties. This can be useful for creating smaller, more specific types.
 */

interface User {
  name: string;
  age: number;
  email: string;
}

/**
 * * Example 1
 */

type UserWithNameAndEmail = Pick<User, 'name' | 'email'>;

const obj: UserWithNameAndEmail = {
  name: 'Bablu Ahmed',
  email: 'example@example.com',
};

/**
 * * Example 2
 */

type UserData = Pick<User, 'name' | 'email'> & { role: string; roleId: number };

const obj2: UserData = {
  name: 'Bablu Ahmed',
  role: 'Super Admin',
  roleId: 1,
  email: 'example@example.com',
};

export { };
