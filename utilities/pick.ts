/**
 * * The "Pick" utility allows you to create a new type from an existing one by selecting only certain properties. This can be useful for creating smaller, more specific types.
 */

interface User {
  name: string;
  age: number;
  email: string;
}

type UserData = Pick<User, 'name' | 'email'> & { role: string; roleId: number };

const obj: UserData = {
  name: 'Bablu Ahmed',
  role: 'Super Admin',
  roleId: 1,
  email: 'example@mail.com',
};

export { };
