/**
 * * The Exclude utility type lets us exclude certain members from an already defined union type. That means we can take an existing type, and remove items from it for specific situations.
 *
 * * Syntax: Exclude<UnionType or EnumType, ExcludedMembers>
 */

/**
 * * Example 1
 */

type SomeType = 'abc' | 'bcd' | 'cde' | 'def';
type SomeTypeWithoutDef = Exclude<SomeType, 'def'>

/**
 * * Example 2
 */

enum MimeTypes {
  Jpg = 'JPG',
  Jpeg = 'JPEG',
  Png = 'PNG',
  Pdf = 'PDF'
}

type ExcludedUnionType = Exclude<MimeTypes, MimeTypes.Jpg | MimeTypes.Png>;

/**
 * * Example 3
 */

interface User {
  name: string;
  age: number;
  email: string;
}

type UserDataKeys = Exclude<keyof User, 'email'>;
type UserDataValues = string | number;

const user: Record<UserDataKeys, UserDataValues> = {
  name: 'Bablu Ahmed',
  age: 30,
};

export { };
