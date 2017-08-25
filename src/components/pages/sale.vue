<template>
  <Timeline time="1890" location="Port Macquarie, NSW" :progress="progress">

    <p>
      Financial Crisis <br>
      TODO: link to financial crisis
    </p>

    <p>
      Macdonnell was forced to sell the instrument.
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
    
</style>