// обычная функция
function powerOfTwo(num) {
  console.log(num)
  return num * num
}

console.log(powerOfTwo(5))

// стрелочная функция
// то что до стрелки - это аргументы, то что после стрелки - это то, что будет возвращать функция
const poft = (num) => {
  console.log(num)
  return num * num
}
console.log(poft(6))
