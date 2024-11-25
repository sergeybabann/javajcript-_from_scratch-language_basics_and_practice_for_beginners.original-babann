console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean('')) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(Number('lorem'))) // false
console.log(Boolean(NaN)) // false

let a
console.log(Boolean(a)) // false
