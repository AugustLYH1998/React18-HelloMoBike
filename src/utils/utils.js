export const uniqueKey = arr => {
  arr.map(item => (item.key = item.id))
  return arr
}
