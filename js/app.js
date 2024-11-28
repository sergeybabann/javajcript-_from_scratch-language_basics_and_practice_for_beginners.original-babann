const roles = ['user', 'admin', 'manager', 'superuser']

const res = roles.splice(2) // удаляет все элементы из массива начиная с индекса 2
console.log(res) // вывод удаленных элементов из массива 2, 3
console.log(roles) // вывод элементов 0, 1

const res2 = roles.splice(2, 1) // 1-ый аргумент указывает с какого индекса начинть
// 2-ой аргумент указывает длину, которую нужно взять
console.log(res2) // выводит удаленные из массива элементы
console.log(roles) // выводит модифицированный массив

const res3 = roles.splice(-1) // удаляет последний элемент из массива
console.log(res3) //
console.log(roles) //
