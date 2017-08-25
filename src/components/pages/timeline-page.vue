<template>
  <div :class="{page: true, start: start, end: end}" :style="pageStyle">
    
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
      </div>
    </div>

    <div class="background" :style="backgroundStyle">
      <slot name="background"></slot>
    </div>

  </div>
</template>

<script>
const FADE_RANGE = 0.2
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
  }
}    
</script>

<style lang="stylus" scoped>
start-offset = 35%
timepoint-size = 18pt
timeline-left = 35%
margin-horz = 5
.page
  color: #fff
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