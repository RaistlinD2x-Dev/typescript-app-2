"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, 21, 33, 55, -56, 92183091283, -9324984, 1999, 893742, 8273892]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
