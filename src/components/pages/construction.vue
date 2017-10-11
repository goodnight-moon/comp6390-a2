<template>
  <Timeline start time="1885" location="Dublin, Ireland" :progress="progress">

    <p>
      Amateur astronomer William John Macdonnell purchased this telescope from Thomas Grubb’s Astronomical Instrument Works
    </p>

    <p>
      Macdonnell imported the telescope to Port Macquarie in New South Wales. There he installed it in a purpose-built observatory behind the Bank of New South Wales, where he worked as manager, and turned it to the heavens.
    </p>

    <div class="background" slot="background"></div>

  </Timeline>
</template>

<script>
import Timeline from './timeline-page'
export default {
  components: {
    Timeline
  },
  props: {
    progress: {
      type: Number,
      default: 0
    }
  }
}    
</script>

<style lang="stylus" scoped>
.background
  background-image: url('http://www.nma.gov.au/__data/assets/image/0016/3850/macdonnell_480w.jpg')
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