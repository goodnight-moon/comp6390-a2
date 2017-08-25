export default function boundByRange(lower, upper) {
  return function boundByRangeUpperLower(val) {
    if (val < lower) return lower
    if (val > upper) return upper
    return val
  }
}
