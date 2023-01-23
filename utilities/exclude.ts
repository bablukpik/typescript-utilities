/**
 * * The Exclude utility type lets us exclude certain members from an already defined union type. That means we can take an existing type, and remove items from it for specific situations.
 *
 * * Syntax: Exclude<UnionType, ExcludedMembers>
 */

/**
 * * Example 1
 */

type SomeType = 'abc' | 'bcd' | 'cde' | 'def';
type SomeTypeWithoutDef = Exclude<SomeType, 'def'>

/**
 * * Example 2
 */

enum Animal {
  Dog,
  Cat,
  Fish
}

type WithoutFish = Exclude<Animal, Animal.Fish>;

export { };
