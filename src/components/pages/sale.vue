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

    <div class="background" style="background-color: red" slot="background"></div>

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
a:hover, a:visited, a:active
  color: inherit
</style>