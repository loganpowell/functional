import { log, table } from "../utils"

// 
//  .____    ____. 
//  |   _|  |_   | 
//  |  |      |  | 
//  |  |      |  | 
//  |  |_    _|  | 
//  |____|  |____| 
// 

/* INTERMEDIATE COLLECTIONS
Array methods in JS return intermediate collections upon every use
*/

let arr = [0, 1, 2]

let coll = [0, 1, 2, 3]

let inc = c => c + 1
let even = c => c % 2 === 0
let string = c => c.toString()

let arr = coll
  // sig: (c, i, d)
  .map(inc)
  // sig: (...d)
  .concat([12, 11, 10])
  // sig: (prev, curr) (⚠ mutation)
  .sort((x, y) => x > y)
  // sig: (c, i, d)
  .filter(even)
  // sig: (a, c, i, d) 🎉
  .reduce((a, c) => a + c)
//the buck stops here (no longer an array = methods no moar)

log("original ->", coll, "| type =", typeof coll)
log("result of processing ->", arr, "| type =", typeof arr)
