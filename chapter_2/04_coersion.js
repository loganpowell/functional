import { EquivMap, ArraySet } from "@thi.ng/associative"

// string coersion
let a = "a" + 1

// boolean coersion
let is = !!1
is
let also_is = !!2
also_is
let isnt = !!0
isnt
let also_isnt = !!undefined
also_isnt
let present = x => !!x

//bitwise odds (out of scope, just interesting)
let is_odd = x => !!(x & 1)
is_odd(5)

// string <-> number coersion
let long_string = "hello, I am a long string "
long_string.slice(0, "5.75") //?
parseInt("5.75") //?
parseFloat("5.75") //?
// if a value can be coersed to make an operation work, it will be
let longer = long_string + 12
longer //?
