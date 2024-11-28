const roles = ['user', 'admin', 'manager', 'superuser', 'ceo']

const res = roles.slice(2)
console.log(roles)
console.log(res)

const res2 = roles.slice(0, 2) // от индекса 0 и до индекса 2 - но 2 не включается
console.log(res2)

const res3 = roles.slice(-1)[0] // эти 2 записи идентичны
const res4 = roles[roles.length - 1] // эти 2 записи идентичны
console.log(res3) // ceo
console.log(res4) // ceo

const res5 = roles.slice(1, -2) // от индекса 1 и до индекса -1, но -1 не включается
console.log(res5)
