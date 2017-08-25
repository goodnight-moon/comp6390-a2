<template>
  <Timeline time="1906" location="Sydney, NSW" :progress="progress">

    <p>
      The Sydney architect EH Beattie used it extensively from 1906, publishing many scientific papers based on his observations.
    </p>

    <p>
      Fill in more content!
    </p>

    <div class="background" style="background-color: green" slot="background"></div>

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