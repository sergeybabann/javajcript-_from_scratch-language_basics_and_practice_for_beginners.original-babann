// типы данных
const age = 18 // number
const surname = 'Иванов' // string
const isAdmin = true // boolean
let data // undefined
let data2 // null
const admin = Symbol('Admin') // Symbol
const big = BigInt(999999999999999) // BigInt

// number
let a = 5
let b = 5.6
console.log(typeof a) // number

// string
a = 'строка'
console.log(typeof a) // string

// boolean
const isAdmin2 = false //
console.log(typeof isAdmin2) // boolean

let user_1 = a > 10 //
console.log(typeof user_1) // boolean

// undefined
let c
console.log(typeof c) // undefined
c = 5
console.log(typeof c) // number

// null
let d = null
console.log(typeof d) // object
let d2 = null
console.log(d == null) // true
