export default function getScrollPx(ev, lineSize = 12, pageSize = 300) {
  const {deltaMode, deltaX, deltaY} = ev
  switch (deltaMode) {
    case WheelEvent.DOM_DELTA_PIXEL: return {x: deltaX, y: deltaY}
    case WheelEvent.DOM_DELTA_LINE: return {x: deltaX * lineSize, y: deltaY * lineSize}
    case WheelEvent.DOM_DELTA_PAGE: return {x: deltaX * pageSize, y: deltaY * pageSize}
    default: return {x: deltaX, y: deltaY}
  }
}