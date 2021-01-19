module.exports = function factorial(number) {
  if (!Number.isInteger(number) || number < 0) {
    throw new Error(
      'В качестве аргумента number принимаются только целые положительные числа.'
    )
  }

  return number > 0 ? factorial(number - 1) * number : 1
}
