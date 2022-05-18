export function randomNumber(array) {
  return array.sort(() => Math.random() - 0.5)
}