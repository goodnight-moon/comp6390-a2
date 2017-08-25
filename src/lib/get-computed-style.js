export default function getComputedStyleOf(el, attr = null) {
  const style = el ? window.getComputedStyle(el) : {}
  if (attr instanceof Array)
    return attr.map(attr => style[attr])
  if (attr instanceof String || typeof attr === 'string')
    return style[attr]
  return null
}
