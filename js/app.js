let username
let username_1 = 'Вася'
let username_2 = null
let username_3 = undefined
let username_4 = ''
let username_5 = ''
let username_6 = 0

console.log(username || 'Default Username')
console.log(username_1 || 'Default Username')
console.log(username_2 || 'Default Username')
console.log(username_3 || 'Default Username')
console.log(username_4 || 'Default Username')
console.log(username_5 ?? 'Default Username')
console.log(username_6 ?? 'Default Username')

let age = 18
console.log(age || 18)
console.log(age ?? 18)

let age_2 = 0
console.log(age || 18)
console.log(age ?? 18)
