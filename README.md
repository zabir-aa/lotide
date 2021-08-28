# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @zabir.aa/lotide`

**Require it:**

`const _ = require('@zabir.aa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Checks the contents of two arrays and returns true if they are equal. Returns false if not equal.
* `assertEqual(actual, expected)`: Checks the contents of two variables and prints out a banner stating if they are equal or not.
* `assertObjectsEqual(actual, expected)`: Checks the contents of two objects and prints out a banner stating if the contents are equal or not.
* `countLetters(text)`: Checks the contents of a string and stores the number of occurences of each letter in an object.
* `countOnly(allItems, itemsToCount) `: Takes input of an array of items and an object with some of the same items as properties. The object properties have bolean values indicating if that item should be counted or not. The function outputs a new objects with selected items and their occurrence indexes.
* `eqArrays(array1, array2)`: Checks the contents of two arrays and returns 'true' if equal or 'false' if not.
* `eqObjects(object1, object2)`: Checks the contents of two objects and returns 'true' if equal or 'false' if not.
* `findKey(object1, object2)`: Takes input of an object and a callback function; finds the first occurence of a property value from the object which returns true if passed through the given callback function, and returns its key.
* `findKeyByValue(object, value)`: Checks the contents of two objects and returns 'true' if equal or 'false' if not.
* `flatten(array)`: Takes input of a nested array and flattens it by making it a single layer array. 
* `letterPositions(sentence)`: Checks the contents of a string and stores the indexes of occurences of each letter in an object.
* `map(array,callback)`: Passes the array items through the callback function and returns a new array with the results.
* `middle(array)`: Returns the middle item of the input array. If array contains less than at 3 items, returns an empty array. If array contains even number of items, averages the value of the two middle items.
* `head(array)`: Returns the the items of the input array, except the first item.
* `takeUntil(array, callback)`: Returns the items of the input array until the callback function returns true for an item.
* `without(source, itemsToRemove)`: Takes input of two arrays and returns selected first array items, filtering out the common items with the second array.





