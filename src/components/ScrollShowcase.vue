<script>
import withinRange from '../lib/within-range'
import Vue from 'vue'

const toPageProgress = (prog, idx, transition) => {
  const lwr = idx - transition
  const upr = idx + transition
  return withinRange(0, 1)(prog - idx + transition * idx)
}

export default {
  props: {
    progress: {
      type: Number,
      default: 0
    },
    transitionProgress: {
      type: Number,
      default: 0.2
    },
    pages: {
      type: Array,
      default: []
    }
  },
  render(h) {
    return (
      <div class="showcase">
        { this.pages.map((component, idx) => h(
          component,
          {
            'class': {
              page: true
            },
            props: {
              progress: toPageProgress(this.progress, idx, this.transitionProgress)
            }
          }
        )) }
      </div>
    )
  }
}
</script>

<style lang="stylus" scoped>
.showcase, .page
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  overflow: hidden
</style>