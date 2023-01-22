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
