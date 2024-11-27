function toPower(num, power) {
  const power2 = power ?? 2
  const res = num ** power2
  return res
}
console.log(toPower(2, 3))
console.log(toPower(2))
