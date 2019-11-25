// utils
let log = (...args) => console.log(...args)

// once a collection has been processed, log it

let trace = fn => (val, idx, col) =>
  idx + 1 < col.length ? fn(val) : (log("processed:", col), fn(val))

/* CLOSURES
A closure is the combination of a function 
bundled together (enclosed) with references 
to its surrounding state (the lexical environment).
*/

let thunk = (x = 0) => (y = 0) => ++x + y

let escaped = [thunk()(), thunk()(), thunk()()]
log("thunk returned = scope escaped ->", escaped)

let glob = thunk()
log("global (glob) variable w/stateful closure ->", [glob(), glob(), glob()])

let arr1 = [2, 4, 6]
log("Array method storing closure (local) ->", arr1.map(thunk()))

let thunks = (t = thunk(3)) => [t(), t(), t()]
log("stateful thunk ->", thunks())

/* INTERMEDIATE COLLECTIONS
Array methods in JS return intermediate collections upon every use
*/

let coll = [0, 1, 2, 3]
let inc = x => x + 1
let even = x => x % 2 === 0
let string = x => x.toString()

let arr2 = coll
  .map(trace(inc))
  .filter(trace(even))
  .map(trace(string))

log("result of array method chain ->", arr2)

/* TRANSDUCERS

 */
