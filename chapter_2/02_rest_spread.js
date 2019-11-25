// Rest and spread

// the `...` syntax has two different meanings depending on what "side" of the operation it's used

//
//  888~-_   888   | ,d88~~\
//  888   \  888___| 8888
//  888    | 888   | `Y88b
//  888   /  888   |  `Y88b,
//  888_-~   888   |    8888
//  888 ~-_  888   | \__88P'
//
//

// RHS: right-hand-side of assignment operator (`=`) -> spread syntax (unpack/expand operation)
let array = ["a", "b"]
let copy = [...array] //?
// useful for making non-mutative updates
let array2 = ["c", ...array] //?
// spread can be positioned anywhere in a data literal and will maintain insertion order
let array3 = [...array, "d", ...array2] //?

// objects
let obj = { a: "b", c: "d" }
let copy2 = { ...obj } //?
let obj2 = { e: "f", ...obj } //?
// as long as object keys are of type string or symbol, insertion order is also maintained
let obj3 = { ...obj, g: "h" } //?
// however, if you add a key that already exists in the object, the later one added overwrites the earlier
let obj4 = { a: "b", a: "c" } //?

// sometimes mutation is handy, if you're not sharing data and want the best performance
// bad idea
let vapor = array //?
vapor.push("c")
// we've hidden the reference to the original data and now we've mutated something that might not be in lexical scope
array //?
// however, it's often useful to perform a "transient" mutation when you're making a copy
let transient_copy = (arr, todos) => {
  let clone = [...arr] // copy the original
  //   ⬇ forEach is fast    ⬇ mutate the copy (not shared outside of hyperlocal scope)
  todos.forEach(val => clone.push(val)) // no garbage collection
  return clone
}

transient_copy(array, ["🚚", "🥧"]) //?

//
//  888     888   | ,d88~~\
//  888     888___| 8888
//  888     888   | `Y88b
//  888     888   |  `Y88b,
//  888     888   |    8888
//  888____ 888   | \__88P'
//
//

// LHS: left-hand-side of assignment operator -> rest syntax (pack/collect operation)
// on the LHS, the rest syntax is actually an extension of the destructuring capabilities of ES6+
// basic destructuring
let [first, second] = ["a", "b", "c"]
first //?
second //?

// prettier-ignore
let { just, looks } = { just: "that", for: "only", looks: "great" }
just //?
// you may run into this though...
let get = ({ name }) => ({ for: "only" }.name) //?
get({ for }) //?
// Arrays use order-based semantics (remember, Arrays also use keys under the hood [Objects], but the keys are just the indexed/position number)
let [x, ...xs] = [1, 2, 3]
x //?
xs //?

// Objects use key-based semantics
let { y, ...ys } = { z: 2, y: 1, a: 3 }
y //?
ys //?
