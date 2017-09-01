<template>
  <Timeline start time="1885" location="Dublin, Ireland" :progress="progress">

    <p>
      Amateur astronomer William John Macdonnell purchased this telescope from Thomas Grubb’s Astronomical Instrument Works
    </p>

    <p>
      Macdonnell imported the telescope to Port Macquarie in New South Wales. There he installed it in a purpose-built observatory behind the Bank of New South Wales, where he worked as manager, and turned it to the heavens.
    </p>

    <p slot="detail">More info....</p>

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