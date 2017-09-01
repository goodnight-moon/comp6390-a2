<template>
  <div :class="{page: true, start: start, end: end}" :style="pageStyle" ref="page">
    
    <div class="container" ref="container" :style="containerStyle">
      <div class="timepoint">
        <p class="time">{{time}}</p>
        <p class="location">{{location}}</p>
      </div>

      <div class="timeline">
        <div class="dot"></div>
        <div class="line"></div>
      </div>

      <div class="description">
        <slot></slot>
        <button v-if="$slots.detail" @click="toggleShowMore" class="btn">
          Show More ...
        </button>
      </div>
    </div>

    <div class="background" :style="backgroundStyle" ref="background">
      <slot name="background"></slot>
    </div>

    <transition name="fade">
      <div ref="detail" class="more" v-if="showMore" @click="toggleShowMore">
        <div class="modal"></div>
        <div class="content">
          <slot name="detail"></slot>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
const FADE_RANGE = 0.2
import withinRange from '../../lib/within-range'
export default {
  props: {
    progress: {
      type: Number,
      default: 0
    },
    start: {
      type: Boolean,
      default: false
    },
    end: {
      type: Boolean,
      default: false
    },
    time: {
      type: String
    },
    location: {
      type: String
    }
  },
  data() {
    return {
      showMore: false
    }
  },
  computed: {
    pageStyle() {
      if (this.progress === 0 || this.progress === 1) {
        return { display: 'none' }
      }
    },
    backgroundStyle() {
      if (this.progress < FADE_RANGE || this.progress > 1 - FADE_RANGE) {
        const fadePercentage = Math.round(100 *  Math.min(this.progress, 1 - this.progress) / FADE_RANGE)
        return {
          filter: `opacity(${fadePercentage}%)`
        }
      }
    },
    containerStyle() {
      if (this.progress < FADE_RANGE || this.progress > 1 - FADE_RANGE) {
        const percentage = 100 - Math.round(100 *  Math.min(this.progress, 1 - this.progress) / FADE_RANGE)
        const translatePercentage = this.progress < FADE_RANGE ? percentage : -percentage
        return {
          transform: `translate3d(0, ${translatePercentage}%, 0)`
        }
      }
    }
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore
      if (this.$refs.page)
        this.$refs.page.classList[this.showMore ? 'add' : 'remove']('more-blur')
      document.body.classList[this.showMore ? 'add' : 'remove']('no-scroll')
      this.$nextTick(() => {
        if (this.$refs.detail) {
          document.body.appendChild(this.$refs.detail)
        }
      })
    }
  },
  mounted() {
    document.body.appendChild(this.$refs.background)
  }
}    
</script>

<style lang="stylus" scoped>
start-offset = 35%
timepoint-size = 18pt
timeline-left = 35%
margin-horz = 5
.background
  background-size: cover
  background-attachment: scroll
  background-position: center
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: -1
.page
  color: #fff
  filter: blur(0)
  transition: all .5s
  &.more-blur
    filter: blur(2px)
  .container
    height: 100%
  .timeline
    position: absolute
    left: timeline-left
    transform: translate(-50%, 0)
    height: 100%
    .dot, .line
      position: absolute
      left: 50%
    .dot
      width: 12pt
      height: 12pt
      background-color: #efefef
      z-index: 2
      border-radius: 50%
      top: start-offset
      transform: translate(-50%, -50%)
    .line
      height: 100%
      width: 4pt
      background-color: #999
      z-index: 1
      transform: translate(-50%, 0)

  .description
    position: absolute
    width: 100 - timeline-left - margin-horz * 2
    top: start-offset
    max-width: 50ch
    left: timeline-left + margin-horz
    transform: translate(0, timepoint-size * -2.5)
  .timepoint
    position: absolute
    text-align: right
    width: timeline-left - margin-horz
    right: 100 - timeline-left + margin-horz
    top: start-offset
    font-size: timepoint-size
    transform: translate(0, -50%)
  &.start
    .timeline
      .line
        top: start-offset
        height: 100 - start-offset
  &.end
    .timeline
      .line
        top: 0
        height: start-offset
</style>

<style lang="stylus" scoped>
.btn
  cursor: pointer
  border: none
  margin-top: 3em
  padding: .75em 4ch
  background: rgba(255,255,255,0.7)
  color: #000
.more
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 99
  .modal
    background-color: rgba(0,0,0,0.6)
    top: 0
    left: 0
    width: 100%
    height: 100%
  .content
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    color: #fff
</style>

<style lang="stylus">
.fade-enter-active, .fade-leave-active
  transition: all .5s ease
.fade-enter, .fade-leave-to
  opacity: 0
</style>