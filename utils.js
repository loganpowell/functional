import * as perf from "@thi.ng/bench"

import "console.table"
export const table = console.table
export const log = console.log
export const trace = fn => (val, idx, col) =>
  idx + 1 < col.length ? fn(val) : (log("processed:", col), fn(val))
