<script>
export default {
  data() {
    return {
      prev: null
    }
  },
  methods: {
    handleTouchStart(ev) {
      if (ev.touches[0]) {
        this.prev = {
          x: ev.touches[0].screenX,
          y: ev.touches[0].screenY
        }
      }
    },
    handleTouchEnd(ev) {
      this.emit(ev)
    },
    handleTouchMove(ev) {
      this.emit(ev)
      if (ev.touches[0]) {
        this.prev = {
          x: ev.touches[0].screenX,
          y: ev.touches[0].screenY
        }
      }
    },
    emit(ev) {
      if (this.prev && ev.touches[0]) {
        this.$emit('wheel', {
          preventDefault: () => null,
          deltaMode: WheelEvent.DOM_DELTA_PIXEL,
          deltaX: - (ev.touches[0].screenX - this.prev.x) * 2,
          deltaY: - (ev.touches[0].screenY - this.prev.y) * 2,
        })
      }
    }
  },
  mounted() {
    document.addEventListener('touchstart', this.handleTouchStart)
    document.addEventListener('touchmove', this.handleTouchMove)
    document.addEventListener('touchend', this.handleTouchEnd)
  },
  beforeDestroy() {
    document.removeEventListener('touchstart', this.handleTouchStart)
    document.removeEventListener('touchmove', this.handleTouchMove)
    document.removeEventListener('touchend', this.handleTouchEnd)
  },
  render() {
    return (<div></div>)
  }
}
</script>