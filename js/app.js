/*
  Пользователь хочет преобрести игру в магазине 
  Он может это сделать только если:
  - Его баланс больше 100 (balance)
  или число бонусов больше 100 (bonusBalance)
  - Он не забанен (isBanned)
  - Игра не куплена (isExist)
  - Игра в продаже (isSelling)
  Напишите условие для покупки и выведите в консоль результат
*/

const balance = 100
const bonusBalance = 900
const isBanned = false
const isExist = false
const isSelling = true

const canBuy =
  (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling
console.log(`Могу купить игру: ${canBuy ? 'да' : 'нет'}`)
