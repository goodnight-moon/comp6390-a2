<template>
  <div class="container" :style="pageStyle">
    <div class="title" :style="titleStyle" ref="title">
      <h1>WJ Macdonnell’s Telescope</h1>
      <h3>from National Museum of Australia</h3>
      <h5>The HCI Prototype Gallery</h5>
    </div>
    <div class="background" :style="backgroundStyle">
    </div>
  </div>
</template>

<script>
import withinRange from '../../lib/within-range'
export default {
  props: {
    progress: {
      type: Number,
      default: 0
    }
  },
  computed: {
    pageStyle() {
      return this.progress === 1
        ? { display: 'none' }
        : {}
    },
    titleStyle() {
      const {
        offsetTop: top = 0,
        clientHeight: height = 0
      } = this.$refs.title || {}
      const percentage = withinRange(0, 1)((this.progress - 0.5) / 0.5)
      const deltaY = Math.floor((top + height) * percentage)
      const opacity = Math.floor(100 - 100 * percentage)
      return {
        transform: `translate3d(0, -${deltaY}px, 0)`,
        filter: `opacity(${opacity}%)`
      }
    },
    backgroundStyle() {
      const percentage = withinRange(0, 1)((this.progress - 0.5) / 0.5)
      const opacity = Math.floor(100 - 100 * percentage)
      return {
        filter: `opacity(${opacity}%)`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
h1, h2, h3, h4, h5
  text-align: center
.container
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
.title
  margin-bottom: 5em
  color: #fff
  font-size: 120%
.background
  background-image: url('../../../static/star-trail-2.jpg')
  background-size: cover
  background-attachment: scroll
  background-position: center
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: -1
  filter: brightness(0.4)
</style>