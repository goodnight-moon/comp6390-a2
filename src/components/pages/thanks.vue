<template>
  <div class="container" :style="pageStyle">
    <h4 :style="titleStyle" class="title">Thank you</h4>
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
      return this.progress === 0
        ? { display: 'none' }
        : {}
    },
    titleStyle() {
      const percentage = withinRange(0, 1)(this.progress / 0.2)
      const opacity = Math.floor(100 - 100 * percentage)
      return {
        filter: `opacity(${100 - opacity}%)`
      }
    },
    backgroundStyle() {
      const percentage = withinRange(0, 1)(this.progress / 0.2)
      const opacity = Math.floor(100 - 100 * percentage)
      return {
        filter: `opacity(${100 - opacity}%)`
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
</style>