<template>
  <Timeline time=" " location="Port Macquarie, NSW" :progress="progress">

    <p>
      Macdonnell imported the telescope to Port Macquarie in New South Wales. There he installed it in a purpose-built observatory behind the Bank of New South Wales, where he worked as manager, and turned it to the heavens.
    </p>

    <p>
      Macdonnell used the telescope in a range of observing programs, focusing on transit events, comets, sunspots, double stars and the features of the planets. 
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