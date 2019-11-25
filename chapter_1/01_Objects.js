import { log } from "../utils"

//
//   ___  ___
//  / /    \ \
//  \ \    / /
//  < <    > >
//  / /    \ \
//  \_\_  _/_/
//

// working with objects

// basic construction (literals)
let literal = { a: "b", c: "d", fn: () => "yay!" }

let a = "b",
  c = "d",
  e = "f",
  fn = () => "yeah"
let shorthand = { a, c, e, fn }

let computed_keys = { [a]: c, ["x" + "y"]: "z" }

let object_access_bracket = shorthand["a"]
let object_access_dot = computed_keys.xy //?

let obj = { a: "😘", b: "🤠", c: "😋", d: "🤔" }

// destructuring & aliases
// destructuring is using array or object literal syntax on the LHS (left-hand side) of a variable assignment. I.e., anywhere you would normally assign a single variable `name`, you can also "reach into" the data structure of the array or object to "pull out" to their entries by index/position - in the case of arrays - or by key - in the case of objects. This applies  for general var/let/const assignments as well as function parameter assignments (which are - under the hood - actually [scoped] variable assignments as well).
let { b: alias, d } = obj
log("alias ->", alias, "| d ->", d)

let unique_keys = { a: "b", a: "c" }
log("unique_keys ->", unique_keys)

/*
Conventionally, working with an object as a collection
entails converting some or all of the object into an 
array and then using built-in array methods
*/

// return obj keys as array
let keys = Object.keys(obj)
// return obj values as array
let vals = Object.values(obj)
// return obj entries as array of arrays
let entries = Object.entries(obj)

// destructure each element 📦
let smush = ([k, v]) => v + k
let stringy = entries.map(smush)

/*
You may also use for..in loop iteration
*/

let smashed = []
for (let prop in obj) {
  smashed.push(obj[prop] + prop)
}
log("smashed ->", smashed)

/*
Object methods are best suited for working with the object
as a singular (heterogeneous) element, rather than a collection 
of elements (it's primary purpose) 
*/

let merge = (obj1, obj2) => Object.assign(obj1, obj2)

let merged = merge(obj, { e: "😮" })
log("merged ->", merged)

let clone = { ...merged }
log("clone ->", clone)

let alt_assign = { ...merged, f: "🎧" }
log("alt_assign ->", alt_assign)

// the spread syntax comes to us courtesy of iterables (TBC)...
