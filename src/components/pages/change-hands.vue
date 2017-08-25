<template>
  <Timeline time=" " location="Australia" :progress="progress">

    <p>
      The telescope then passed through the hands of a number of Australia’s amateur astronomers.
    </p>

    <p>
      Fill in more content!
    </p>

    <div class="background" style="background-color: blue" slot="background"></div>

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

<style lang="stylus">
    
</style>