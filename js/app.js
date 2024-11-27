const roles = ['user', 'admin', 'manager']

const elIndex = roles.indexOf('admin') // поиск элемента массива
console.log(elIndex) // 1

const elIndex2 = roles.indexOf('superuser') // поиск элемента массива. Этого элемента нет в массиве,
// и он поэтому отрицательный
console.log(elIndex2) // -1

if (roles.indexOf('admin') >= 0) {
  console.log('Доступ есть') // Доступ есть
}

if (roles.indexOf('superuser') >= 0) {
  console.log('Доступ есть') // такого элемента в массиве нет, поэтому ничего не выводится
}

console.log(roles.includes('admin')) // true - такой элемента есть в массиве
console.log(roles.includes('superadmin')) // false - такого элемента нет в массиве
