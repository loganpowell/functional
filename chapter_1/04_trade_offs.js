import { bench, benchResult } from "@thi.ng/bench"
import { table } from "../utils"
/*
Sometimes you need speed, sometimes you need power
*/

console.time("map")
let map = () => (Array(1000000).map(x => x++), "done")
map()
console.timeEnd("map")

console.time("forEach")
let forEach = () => (Array(1000000).forEach(x => x++), "done")
forEach()
console.timeEnd("forEach")

console.time("for..of")
let for_of = () => {
  for (let x of Array(1000000)) {
    x++
  }
  return "done"
}
for_of()
console.timeEnd("for..of")

console.time("for")
let for_ = () => {
  let length = Array(1000000).length
  let y
  for (let x = 0; x < length; x++) {
    y++
  }
  return "done"
}
for_()
console.timeEnd("for")

console.time("while")
let while_ = () => {
  let length = Array(1000000).length
  let x
  while (x < length) {
    x++
  }
  return "done"
}
while_()
console.timeEnd("while")

let results = [map, forEach, for_of, for_, while_].map(fn => ({
  function: fn.name,
  ms: benchResult(fn, 1)[1]
}))

table(results)

//
//                                   888   d8
//  888-~\  e88~~8e   d88~\ 888  888 888 _d88__  d88~\
//  888    d888  88b C888   888  888 888  888   C888
//  888    8888__888  Y88b  888  888 888  888    Y88b
//  888    Y888    ,   888D 888  888 888  888     888D
//  888     "88___/  \_88P  "88_-888 888  "88_/ \_88P
//
//

/*
=== console.time results ===

map: 55.479ms ​​​​​

forEach: 20.878ms ​​​​​

for..of: 125.030ms ​​​​​

for: 43.576ms ​​​​​

while: 5.598ms ​​​​​
 
=== bench results ===

function  ms  
--------  --- 
map       68  
forEach   14  
for_of    117 
for_      49  
while_    5   
*/

/* KEY TAKEAWAYS
1. for is slower than forEach and very much uglier, don't use it
2. while is the fastest if you need a single-condition loop construct
3. map is the second-slowest, but if you need a fluent-API (dot-chaining), it's the only one that returns an array (that can be re-operated on) natively. I.e., if you don't need an array returned, use forEach instead
4. for..of is the slowest, so we shouldn't ever use it... or should we? We'll get back to this later in Chapter two
*/
