function canAccessWebsite(age) {
  if (age < 18) {
    return 'нет'
  } else {
    return 'да'
  }
}

console.log(canAccessWebsite(18))

const canAccessWebsite2 = (age) => (age < 18 ? 'нет' : 'да')
console.log(canAccessWebsite2(19))
