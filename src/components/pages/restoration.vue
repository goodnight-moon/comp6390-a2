<template>
  <Timeline end time="2005" location="Canberra, ACT" :progress="progress">

    <p>
       The National Museum acquired the telescope in 2005 and has returned it to working condition, as it would have appeared in the late-19th century.
    </p>

    <p>
      Fill in more content!
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
  background-image: url('http://www.nma.gov.au/__data/assets/image/0017/3851/P1030291_W200.jpg')
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