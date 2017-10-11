<template>
  <Timeline time="1890" location="Port Macquarie, NSW" :progress="progress">

    <p>
      Australian Financial Crisis
    </p>

    <p>
      Macdonnell was forced to sell the instrument.
    </p>

    <p style="margin-top: 2em">You can know more about the event
      <a target="_blank" href="https://en.wikipedia.org/wiki/Australian_banking_crisis_of_1893">here (wikipedia)</a>
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
a:hover, a:visited, a:active
  color: inherit

.background
  background-image: url('http://www.afr.com/content/dam/images/g/l/h/7/6/q/image.related.afrArticleLead.620x365.glh724.png/1452053418670.jpg')
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