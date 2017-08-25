<template>
  <div class="wrap">
    <icon name="angle-double-down" class="icon" />
  </div>
</template>

<script>
import 'vue-awesome/icons/angle-double-down'
export default {
  methods: {
    handleClick() {
    }
  }
}
</script>

<style lang="stylus" scoped>
offset = 30%
@keyframes scroll-hint
  0%
    transform: translate(0, offset * -1)
    opacity: 0
  50%
    opacity: 1
  70%
    opacity: 1
  90%
    transform: translate(0, offset)
    opacity: 0
  100%
    transform: translate(0, offset)
    opacity: 0

.wrap
  position: fixed
  height: 5%
  width: 5%
  bottom: 5%
  left: 50%
  transform: translate(-50%, 0) scale(1.5, 1.2)
  transform-origin: center center
  color: #000
  opacity: .4

.icon
  width: 100%
  height: 100%
  animation-name: scroll-hint
  animation-duration: 2s
  animation-direction: normal
  animation-timing-function: ease-in-out
  animation-iteration-count: infinite
</style>