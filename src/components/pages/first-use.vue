<template>
  <Timeline time="1886" location="Port Macquarie, NSW" :progress="progress">

    <p>
      Macdonnell imported the telescope to Port Macquarie in New South Wales. There he installed it in a purpose-built observatory behind the Bank of New South Wales, where he worked as manager, and turned it to the heavens.
    </p>

    <p>
      Macdonnell used the telescope in a range of observing programs, focusing on transit events, comets, sunspots, double stars and the features of the planets. 
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
  background-image: url('https://static.wixstatic.com/media/789360_47693d7f1fa548a5b491b0273dd4da64.jpg')
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