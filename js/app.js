// порядок исполнения операторов

const isSuited = 190 - 10 > 90 - 5
console.log(isSuited)

// 100 - (12-приоритет) 10 > (10-приоритет) 90 - (12-приоритет) 5

const a = 6 + 10 / 2 // 1) /  2) +
const b = (6 + 10) / 2 // 1) + 2) /
console.log(a)
console.log(b)

let b1
let c1
c1 = b1 = 100 + 50 // 1) +  2) & 3) операторы присваивания по очереди справа налево
console.log(c1)
console.log(b1)
