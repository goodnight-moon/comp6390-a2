<template>
  <Timeline time="1921" location="Sydney, NSW" :progress="progress">

    <p>
       The telescope had been dismantled and placed in storage, where it remained for most of the next 85 years.
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
  background-image: url('http://www.dustandgrooves.com//wp-content/uploads/2012/11/Dust_and_Grooves_1506.jpg')
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