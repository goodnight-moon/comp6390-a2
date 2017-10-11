<template>
  <Timeline time="1890 - 1906" location="Australia" :progress="progress">

    <p>
      The telescope then passed through the hands of a number of Australia’s amateur astronomers.
    </p>

    <p>
      Fill in more content!
    </p>

    <div slot="detail">
      <h3>List of funny people that owned this telescope. (Purly Imaginary)</h3>
      <h4 class="del">Actually, the people that make us do this assignment.</h4>
      <ul>
        <li>... Duncan ...</li>
        <li>... Stevenson ...</li>
      </ul>

      <img src="https://researchers.anu.edu.au/researchers/stevenson-dr/image" alt="Duncan Stevenson"></img>
    </div>

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
.del
  text-decoration: line-through
.background
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Paris_-_Vintage_travel_gear_seller_at_the_marche_Dauphine_-_5212.jpg/300px-Paris_-_Vintage_travel_gear_seller_at_the_marche_Dauphine_-_5212.jpg')
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