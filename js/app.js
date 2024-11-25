const age = '18' // string
console.log(age + 3) // конкатенация чисел. 18 и 3 складываются в одну строку
console.log(Number(age) + 5) // явная конвертация типа строка в тип число. Выполняется операция сложения чисел
console.log(age - 3) // выполнение операции вычитания чисел. Неявное преобразование типа string в number
console.log(age * 3) // выполнение операции умножения чисел. Неявное преобразование типа string в number
console.log(age / 3) // выполнение операции деления чисел. Неявное преобразование типа string в number

const userName = 'Вася'
console.log(userName + 5) // конкатенация

console.log(Number(userName) + 5) // Nan (не является числом)

console.log(typeof NaN) // number

console.log(String(4) + 7) // явная конвертация числа в строку. Конкатенация чисел, вывод 47 типа строка

console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean(123)) // true
console.log(Boolean(-1)) // true
console.log(Boolean('тип строка')) // true
console.log(Boolean('')) // false
console.log(Boolean('') + 10) // 10
console.log(true + 2) // 3

const a = 2 + '10' // конкатенация чисел. вывож тип строка 210
console.log(a - 10) // неявная конвертация строки в число, операция вычитания чисел, вывод тип число 200
