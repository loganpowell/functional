let todos = 10000

// regular loop
const sumBelow_for_loop = number => {
  let result = 0
  for (let i = 0; i <= number; i++) {
    result += i
  }
  return result
}
console.time("sumBelow_for_loop")
sumBelow_for_loop(todos) //?
console.timeEnd("sumBelow_for_loop")

// trampolined recursion
const trampoline = fn => (...args) => {
  let result = fn(...args)
  while (typeof result === "function") {
    result = result()
  }
  return result
}
// note the non-basecase return is now a thunk
const sumBelow_recur_mod = (number, sum = 0) =>
  number === 0 ? sum : () => sumBelow_recur_mod(number - 1, sum + number)

const sumBelow_trampolined = trampoline(sumBelow_recur_mod)

console.time("sumBelow_trampolined")
sumBelow_trampolined(todos) //?
console.timeEnd("sumBelow_trampolined")

// regular recursion (⚠ callstack accumulation)
const sumBelow_recur = (number, sum = 0) =>
  number === 0 ? sum : sumBelow_recur(number - 1, sum + number)

console.time("sumBelow_recur")
sumBelow_recur(todos) //?
console.timeEnd("sumBelow_recur")

/** RESULTS by platform
 * *-------------------------*------------------*------------------*
 * | Count                   | 5000             | 10000            |
 * *-------------------------*------------------*------------------*
 * | NODE:                   | trial 1          | trial 2          |
 * *-------------------------*------------------*------------------*
 * | sumBelow_for_loop:      | 4.658ms          | 8.119ms          |
 * | sumBelow_trampolined:   | 11.408ms         | 7.734ms          |
 * | sumBelow_recur:         | 2.511ms          | 🔥 stackoverflow |
 * *-------------------------*------------------*------------------*
 * | Chrome:                 | trial 1          | trial 2          |
 * *-------------------------*------------------*------------------*
 * | sumBelow_for_loop:      | 0.1630859375ms   | 0.65380859375ms  |
 * | sumBelow_trampolined:   | 3.914794921875ms | 8.322021484375ms |
 * | sumBelow_recur:         | 2.6669921875ms   | 🔥 stackoverflow |
 * *-------------------------*------------------*------------------*
 * | Firefox:                | trial 1          | trial 2          |
 * *-------------------------*------------------*------------------*
 * | sumBelow_for_loop:      | 5ms              | 3ms              |
 * | sumBelow_trampolined:   | 2ms              | 3ms              |
 * | sumBelow_recur:         | 11ms             | 33ms             |
 * *-------------------------*------------------*------------------*
 *
 * */
