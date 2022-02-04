function multiplesOf3and5(number) {
  let total = 0
  for (let i = 0; i <= number; i++) {
    let multipleOf3 = i % 3 == 0
    let multipleOf5 = i % 5 == 0
    if (multipleOf3 || multipleOf5) {
      total += i
    }
  }
  return total
}
multiplesOf3and5(10)

