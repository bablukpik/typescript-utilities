/**
 * * The "Partial" utility allows you to make all properties of an object optional. This can be useful for creating partial objects or for handling missing data.
 */

/**
 * * Example
 */

interface Person {
  name: string;
  email: string;
  age: number;
  address: string;
}

type PartialPerson = Partial<Person>;

const updatePerson = (
  person: Person,
  fieldsToUpdate: PartialPerson,
): Person => ({
  ...person, ...fieldsToUpdate,
});

const originalPerson = {
  name: 'John',
  email: 'example@example.com',
  age: 35,
  address: '123 Main Street',
};

// let's now update the original person

const updatedPerson = updatePerson(originalPerson, { name: 'Bablu Ahmed' });
