/*
 * Example 1
 */

// type ThreeStringProps = { prop1: string, prop2: string, prop3: string }
type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>

/*
* Example 2
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
