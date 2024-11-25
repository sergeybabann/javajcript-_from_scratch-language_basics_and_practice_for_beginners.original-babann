const secretNumber = 7

if (secretNumber === 7) {
  console.log('Угадал строго')
}

if (secretNumber == 7) {
  console.log('Угадал не строго')
}

// -------------------------------------------
const secretNumber2 = '7'

if (Number(secretNumber2) === 7) {
  // явное привидение типа строки к числу.
  console.log('Угадал строго2')
}

if (secretNumber2 == 7) {
  console.log('Угадал не строго2')
}

//----------------------------------------------

const q = prompt('Введите число')
if (q == 7) {
  console.log('Угадал не строго3')
}

const q2 = prompt('Введите число')
if (q2 === 7) {
  console.log('Что такое?')
}

const q3 = Number(prompt('Введите число')) // явное привидение строки в число
if (q3 === 7) {
  console.log('Угадал строго3')
}
