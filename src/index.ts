import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


// const numbersCollection = new NumbersCollection([10, 3, -5, 324984, 1999, 893742, 8273892])
// numbersCollection.sort();
// console.log(numbersCollection.data);
// // const sorter = new Sorter(numbersCollection);
// // sorter.sort();
// // console.log(numbersCollection.data)

// const charactersCollection = new CharactersCollection('XaAAAayBLonMzZknikASD')
// charactersCollection.sort();
// console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(4);
linkedList.add(-3);
linkedList.sort();
linkedList.print()

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print()