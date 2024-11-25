const money = 10
const canBuy = money > 50

if (canBuy) {
  console.log('Может купить наш продукт')
} else {
  console.log('Не хватает баланса')
}

console.log('Итог')

// чаще пишут так
const money2 = 51
if (money2 > 50) {
  console.log('Может купить наш продукт 2')
} else {
  console.log('Не хватает баланса 2')
}

// else if
const money3 = 100
if (money3 > 50) {
  console.log('Может купить наш продукт 3')
} else if (money > 55) {
  console.log('Куплен mini продукт 3')
} else {
  console.log('Не хватает баланса 3')
}

console.log('Итог 3')
