<template>
  <Timeline time="1906" location="Sydney, NSW" :progress="progress">

    <p>
      The Sydney architect EH Beattie used it extensively from 1906, publishing many scientific papers based on his observations.
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
  background-image: url('https://tv4educationdotcom.files.wordpress.com/2017/05/solar-system.jpg')
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