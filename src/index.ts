import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 21, 33, 55, -56, 92183091283, -9324984, 1999, 893742, 8273892])
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data)