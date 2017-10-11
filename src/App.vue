<template>
  <div id="app">

    <Scroll v-model="progress" :total="total" color="#eee" />

    <ScrollShowcase :progress="progress" :pages="pages" />

    <ScrollHint v-if="progress < this.total - 0.6" @click="nextPage" />

  </div>
</template>

<script>
import Scroll from './components/Scroll'
import ScrollShowcase from './components/ScrollShowcase'
import ScrollHint from './components/ScrollHint'
import Cover from './components/pages/cover'
import Construction from './components/pages/construction'
import FirstUse from './components/pages/first-use'
import Sale from './components/pages/sale'
import ChangeHands from './components/pages/change-hands'
import SydneyOwner from './components/pages/sydney-owner'
import Storage from './components/pages/storage'
import Restoration from './components/pages/restoration'
import Thanks from './components/pages/thanks'
import Tween from '@tweenjs/tween.js'

export default {
  name: 'app',
  components: {
    Scroll,
    ScrollShowcase,
    ScrollHint
  },
  data() {
    return {
      progress: 0,
      pages: [
        Cover, Construction, FirstUse, Sale, ChangeHands, SydneyOwner, Storage, Restoration, Thanks
      ]
    }
  },
  computed: {
    total() {
      return this.pages.length - this.pages.length * 0.2
    }
  },
  methods: {
    nextPage() {
      const progObj = { progress: this.progress }
      const curPage = Math.floor(this.progress / 0.8)
      const targProg = curPage === 0 ? 1 : curPage + 0.8
      const tween = new Tween.Tween(progObj)
        .to({ progress: targProg }, 1000)
        .easing(Tween.Easing.Quartic.Out)
        .onUpdate(() => {
          this.progress = progObj.progress
        })
      tween.start()

      let animation
      let animate = (time) => {
        animation = window.requestAnimationFrame(time => {
          window.requestAnimationFrame(animate)
          if (!Tween.update(time)) {
            window.cancelAnimationFrame(animation)
          }
        })
      }

      window.requestAnimationFrame( animate )
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style lang="stylus">
html, body, #app
  background-color: #000
</style>