/* Array - Big-O Time Complexity

 a) Insert/Remove from end - O(1)
 b) Insert/remove from beginning - O(n)
 c) Access - O(1)
 d) Search - O(n)
 e) Push/Pop - O(1)
 f) Shift/unshift/concat/slice/splice - O(n)
 */
const arr = [1, 2, 3, "Vishwas"];

arr.push(4);
arr.unshift(5);

arr.pop();
arr.shift();
for (const item of arr) {
  //console.log(item);
}

/*          Object
1) An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type where as the value can be of any data type
2) To retrieve a value, you can use the corresponding key. This can be achieved using the dot notation or bracket notation.
3) An object is not an iterable. You can not use it with a for of loop.
Object- Big-O time complexity

 a) Insert - O(1)
 b) Remove - O(1)
 c) Access - O(1)
 d) Search - O(1)
 e) Object.keys() - O(n)
 f) Object.values() - O(n)
 g) Object.entries() - O(n)
*/

const obj = {
  name: 'Bruce',
  age: 25,
  "key-three": true,
  sayMyName: function () {
    console.log(this.name);
  }
}
obj.hobby = "football";
delete obj.hobby;
console.log(obj.name);
console.log(obj['name']);
console.log(obj['age']);
console.log(obj['key-three']);
console.log(obj);
console.log(obj.sayMyName())

const objKeys = Object.keys(obj);
console.log('objKeys', objKeys);

const objValues = Object.values(obj);
console.log('objValues', objValues);

const objEntries = Object.entries(obj);
console.log('objEntries', objEntries);

/*           Set 

1) A set is a data structure that can hold a collection of values. The values however must be unique
2) Set can contain a mix of diffrent data types. You can store strings, booleans, numbers or even objects all in the same set
3) Sets are dynamically sized. You don't have to declare the size of a set before creating it
4) Sets do not maintain an insertion order
5) Sets are iterables. They can be used with a for of loop

     Set Vs Array
1) Arrays can contain duplicate values whereas Sets cannot
2) Insertion order is maintained in arrays but it is not the case with sets
3) Searching and deleting en element in the set is faster compared to arrays

*/
const set = new Set([1, 2, 3]);
set.add(4);
set.add(4); // It will not be added

/* 
for(const item of set) {
  console.log(item);
}
set.forEach(function(item) {
  console.log(item);
}) */

console.log(set.has(4)); // To check the values exist in the set

set.delete(4);
console.log(set.size);
//set.clear();

for (const item of set) {
  console.log(item);
}


/*     Map
1) A map is an unordered collection of key-value pairs. Both keys and values can be of any data type.
2) To retrieve a value, you can use the corresponding key
3) Maps are iterables. They can be used with a for of loop

    Object Vs Map
1) Objects are unordered whereas maps are ordered
2) Keys in objects can only be string or symbol type whereas in maps, they can be of any type
3) An object has a prototype and may contain a few default keys which may collide with your own keys if you're not careful. A map on the other hand does not contain any keys by default
4) Objects are not iterables where as maps are iterables
5) The number of items in an object must be determined manually where as it is readily available with the size of property in a map
6) Apart from storing data, you an attach funtionallity to an object whereas maps are restricted to just storing data.

*/
const map = new Map([["a", 1], ['b', 2]]);

map.set('c', 2); // To add the key value in the map.

map.delete('c'); // To delete the key

console.log(map.has('a')); // To check the key exist or not.
console.log(map.size); // To get the number of item in map.
map.clear(); // To clear all the items

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}



