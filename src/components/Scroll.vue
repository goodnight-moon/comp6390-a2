<template>
  <div class="scrollbar" :style="scrollbarStyle">
    <div class="indicator y" ref="y" :style="indicatorYStyle" :active="Boolean(activeTimeout)">
    </div>
  </div>
</template>

<script>
import getComputed from '../lib/get-computed-style'
import getScrollPx from '../lib/get-scroll-px'
import withinRange from '../lib/within-range'

export default {
  props: {
    hash: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#666'
    },
    total: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    },
    factor: {
      type: Number,
      default: 1
    }
  },
  computed: {
    scrollbarStyle() {
      return {
        visibility: this.total > 0 ? 'initial' : 'hidden'
      }
    },
    indicatorYStyle() {
      const H = this.windowHeight
      const h = parseInt(getComputed(this.$refs.y, 'height'), 10)
      const percent = this.total > 0 ? this.value / this.total : 0
      return {
        top: Math.floor((H - h) * percent) + 'px',
        backgroundColor: this.color
      }
    }
  },
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      x: 0,
      y: 0,
      activeTimeout: null
    }
  },
  methods: {
    handleScroll(ev) {
      console.log(ev)
    },
    handleWheel(ev) {
      ev.preventDefault()
      const {y} = getScrollPx(ev)
      const delta = this.factor * y / this.windowHeight
      const progress = withinRange(0, this.total)(this.value + delta)
      this.activate()
      this.$emit('input', progress)
    },
    handleResize(ev) {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    },
    activate() {
      if (this.activeTimeout)
        clearTimeout(this.activeTimeout)
      this.activeTimeout = setTimeout(() => {
        this.activeTimeout = clearTimeout(this.activeTimeout)
      }, 300)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('wheel', this.handleWheel)
    window.addEventListener('resize', this.handleResize)
    this.handleResize(null)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('wheel', this.handleWheel)
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="stylus" scoped>
.scrollbar
  position: fixed
  height: 100%
  width: 1%
  min-width: 7px
  max-width: 12px
  top: 0
  right: 0
.indicator
  position: relative
  opacity: .4
  transition: opacity .2s
  &[active]
    opacity: .9
  &.y
    height: 4%
    min-height: 12px
    width: 100%
</style>