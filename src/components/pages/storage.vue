<template>
  <Timeline time="1921" location="Sydney, NSW" :progress="progress">

    <p>
       The telescope had been dismantled and placed in storage, where it remained for most of the next 85 years.
    </p>

    <p>
      Fill in more content!
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