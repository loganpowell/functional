import { log } from "../utils"
// access / getters
let bracket = { a: "b", c: "d" }["a"]
let arr1 = [0, 1, 2][0]
let arr2 = ["a", "b", "c"]["1"] //?
let dot = { d: "e", f: "g" }.f //?

// setters
let obj = { a: "b", c: "d" }
obj["e"] = "f"
obj //?

// Arrays are just Objects with some additional methods on its prototype (i.e., Arrays inherit from Object)
let arr_keys = ["a", "b"]
// in fact, they are still "associative" ~ allow key, val pairings
// ⚠ this mutates the object
arr_keys["yep"] = "agreed"
// coersion
arr_keys["3"] = "d"
typeof arr_keys.findIndex(x => x === "d") //?

// notice now that we actually have an empty space in our Array
arr_keys //?
arr_keys[2] //?

// however...
arr_keys.length //?
obj.length //?

arr_keys.map(x => x) //?
// obj.map(x => x) //? not a function
let coll = { 5: "😈" }
arr_keys.forEach((val, idx) => (coll = { [idx]: val, ...coll }))
coll //?
// the only way we can actually get the non-numerically indexed value is via a method available to the Object type
arr_keys.yep //?
arr_keys["yep"] //?
Object.entries(arr_keys) //?
Object.entries(obj) //?

// NOTE: this is rarely useful knowlege for application, but useful for understanding what Arrays actually are

// 📌 paths/lenses
