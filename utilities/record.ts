/**
 * * The Record utility allows you to create an object with a set of properties. This can be useful for creating object maps or dictionaries.
 *
 * * Syntax: Record<TypeOfKeys, TypeOfValues>
*/

/**
 * * Example 1
 */

// type RecordOfBooleans = { [key: string]: boolean };
type RecordOfBooleans = { [key: string]: boolean };

/**
 * * Example 2
 */

// type ThreeStringProps = { prop1: string, prop2: string, prop3: string }
type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>

const obj: ThreeStringProps = {
  prop1: 'foo',
  prop2: 'bar',
  prop3: 'asdf',
};

/**
* * Example 3
*/

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

/**
 * * Example 4
 */

type Statuses = 'failed' | 'complete';
type IconTypes = 'warning' | 'check';
type IconColors = 'red' | 'green';

interface Status {
  iconType: IconTypes;
  iconColor: IconColors;
}

type IconsType = Record<
  Statuses,
  Status
>;

const icons: IconsType = {
  failed: {
    iconType: 'warning',
    iconColor: 'red',
  },
  complete: {
    iconType: 'check',
    iconColor: 'green',
  },
};

// const Status = (status: Statuses) => <Icon {...icons[status]}/>

export { };
