/**
 * * The "Extract" utility type lets us check a union type for a specific members, and returns a new type based on what is left over. It's the opposite type of the "Exclude" type.
 *
 * * Syntax: Extract<Type, ExtractedMembers>
 */

/**
 * * Example 1
 */

type SomeUnionType = 'abc' | 'bcd' | 'cde' | 'def';
type SomeExtractedUnionType = Extract<SomeUnionType, 'abc' | 'def'>;

/**
 * * Example 2
 */

enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

type ExtractedUnionType = Extract<Direction, Direction.Up | Direction.Down>;

interface Animation {
  animationDirection: ExtractedUnionType;
  animationDuration: number;
}

const testObj: Animation = {
  animationDirection: Direction.Down,
  animationDuration: 0.7,
};

/**
 * * Example 3
 */

interface User {
  name: string;
  age: number;
  email: string;
}

type UserDataKeys = Extract<keyof User, 'name' | 'age'>;
type UserDataValues = string | number;

const user: Record<UserDataKeys, UserDataValues> = {
  name: 'Bablu Ahmed',
  age: 30,
};

export { };
