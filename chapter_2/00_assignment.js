// Assignment is the most powerful and dangerous operation... all bundled up in an innocuous `=` sign

//
//
//   ______
//  /_____/
//  /_____/
//
//
//

// ECMAScript has 5 data types that are passed by value
// `Boolean`, `null`, `undefined`, `String`, and `Number`, everything else is passed by reference (Array, Function, Object)
// these five types are known as "Primitives" and are immutable, i.e., you cannot change them (in memory) once they are created
// you may copy them and create derivatives with them, but you will always be allocating a new chunk of memory when you do.

let boolean = true
let number = 12
number++ // effectively number = number + 1 (copy + 1)
number //?
boolean //?
let string = "value" // this allocates memory
let reference = string // this creates a copy to "value" and allocates a new swathe of memory to hold it

reference = "reassigned" // mutation
reference //?

// one way to combat this is to use const
const locked = "assigned"
const ref = locked
ref = "noop"

// ADVANCED DESTRUCTURING

// we can provide an alternative for a simple if..else or switch statement using simple object accessors
let diff_switch = args => ({ a: "bloop", b: "bleep" }[args.case])

diff_switch({ case: "a" })

// wouldn't it be cool if we invoke on a value more complex than a primitive?
let matcher = args =>
  new EquivMap([
    [{ a: args.a }, () => `welcome ${args.a}`],
    [{ c: args.c }, () => `take a break ${args.c}`]
  ]).get(args) || (() => "i got nothin'")

// now we can deploy functions on an object value based on its key
let todo = matcher({ d: "learner" })
todo()

// let's make a pattern matcher with these (awesome) value-based semantics
let pattern_matcher = args => {
  let { a, b, c } = args
  return (
    new EquivMap([
      [{ a, b, c }, `${a} doin' it ${b} the ${c}`],
      [{ a, c }, `I ${c} you ${a} cuz you ${c} me!`],
      [{ c }, `do you ${c} me?`]
    ]).get(args) || "i got nothin'"
  )
}

pattern_matcher({ a: "just", b: "for", c: "likes" }) //?
pattern_matcher({ c: "likes" }) //?
pattern_matcher({ c: "dislike", a: "alot" }) //?

let guarded_matcher = args => {
  let { a, b, c } = args
  return new EquivMap([[{ a, b, [c > 3 && "c"]: c }, "guarded"]]).get(args) || "go away!"
}
guarded_matcher({ a: "a", b: "b", c: 4 }) //?
