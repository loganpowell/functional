import * as xf from "@thi.ng/transducers"

// we covered loop constructs in chapter_1 -> 04_trade_offs
// we've actually already used some higher order functions as well
// in chapter_1 -> 02_Arrays

let map = ["rip", "slop", "mop"].map(x => x + "e")
map //?

let forEach = (y = []) => ([1, 5, 7].forEach(x => y.push(x + 1)), y)
forEach() //?

let cartridge = {
  ammo: [1, 4, 5, 3, 1],
  arms: (amo, pow) => (amo * pow).toString()
}

let fire = ({ ammo, arms }) => {
  return arms(ammo.pop(), 10)
}

fire(cartridge) //?
fire(cartridge) //?
