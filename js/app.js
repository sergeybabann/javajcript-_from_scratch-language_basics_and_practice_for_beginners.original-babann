// классический вариант записи if

const bmwX3Price = 100000
const budget = 200000

let message

if (budget > bmwX3Price) {
  message = 'BMW'
} else {
  message = 'Велосипед'
}

// вывод записи if с тернарным оператором
console.log(`Хочу купить ${budget > bmwX3Price ? 'BMW' : 'Велосипед'}`)

// запись if с тернарным оператором
const str = 10 > 0 ? console.log('Больше 0') : console.log('Не больше')
console.log(str)

// использование одного тернарного оператора внутри другого
const iPhonePrice = 120000
const sumsungGalaxyPrice = 100000
const budget2 = 99000

let message2 =
  budget2 > iPhonePrice
    ? 'iPhone'
    : budget2 > sumsungGalaxyPrice
    ? 'Samsung Galaxy'
    : 'Кнопочный телефон'

//
console.log(`Я хочу купить ${message2}`)
