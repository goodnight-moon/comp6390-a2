<template>
  <Timeline end time="2005" location="Canberra, ACT" :progress="progress">

    <p>
       The National Museum acquired the telescope in 2005 and has returned it to working condition, as it would have appeared in the late-19th century.
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