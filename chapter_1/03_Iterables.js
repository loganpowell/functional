import { log } from "../utils"
import { ArraySet, EquivMap } from "@thi.ng/associative"

// 📌 TODO: https://www.youtube.com/watch?v=x7Xzvm0iLCI

// an iterable is a very simple state machine with two states: done: false || done: true
let iter = [3, 4, 5][Symbol.iterator]()
iter.next() //?
iter.next()

/*
ES6 added a new method: `Symbol.Iterator` 
along with a number of new data structures which 
- combined with Arrays and Strings -take advantage of 
this "protocol"
*/

let pairs = [
  [1, 2],
  [3, 4],
  [{ a: "b" }, "c"]
]

let items = [{ a: "b" }, { c: "🎉" }, "e"]

let map = new Map(pairs)

let set = new Set(items)

// for..of loops are very versatile (more on this later in Chapter 2)
for (let each of "abc") {
  each
}

for (let each of [1, 2, 3]) {
  each
}

for (let each of map) {
  each
}

for (let each of set) {
  each
}

// for objects

let obj = { a: "😘", b: "🤠", c: "😋" }
// we can iterate over the returned array of an object method
// now we can for..of it
for (let each of Object.entries(obj)) {
  each
}
// or we can just iterate over the values or keys
for (let each of Object.values(obj)) {
  each
}
/*
Map/Set accessors do not work for anything but primitives,
i.e., anything other than primities are looked up via
"reference" semantics
*/
map.get(1) //?
map.forEach((v, k, m) => log(m))
map.set(2, "x")
map.get(2) //?
// objects are saught by reference
map.get({ a: "b" }) //?

// let's introduce a library with more useful ("value") semantics
let better_map = new EquivMap(pairs)
better_map.get({ a: "b" }) //?

for (let each of better_map) {
  each
}

// vanilla JS Set also only checks non-primitives by reference
set.has("e") //?
set.has({ a: "b" }) //?

// let's use a better set as well...
let better_set = new ArraySet(items)
better_set.has({ a: "b" }) //?

for (let each of better_set) {
  each
}
