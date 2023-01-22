interface IUser {
  name: string;
  age: number;
  email: string;
}

type TUserData = Pick<IUser, 'name' | 'email'> & { role: string; roleId: number };

const obj: TUserData = { name: '', role: '', roleId: 1, email: '', }
