const role = 'manager'

if (role === 'manager') {
  console.log('Менеджер')
} else if (role === 'admin') {
  console.log('Админ')
} else if (role === 'ceo') {
  console.log('CEO')
} else {
  console.log('Мы тебя не знаем!')
}

//----------------------------------------------------
switch (role) {
  case 'manager': // role === 'manager'
    console.log('Менеджер')
    break
  case 'admin': // role === 'admin'
    console.log('Админ')
    break
  case 'ceo': //role === 'ceo'
    console.log('CEO')
    break
  default:
    console.log('Мы тебя не знаем!')
}
