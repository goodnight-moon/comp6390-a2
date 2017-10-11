<template>
  <div id="app">

    <Scroll v-model="progress" :total="total" color="#eee" />

    <ScrollShowcase :progress="progress" :pages="pages" />

    <ScrollHint @click="nextPage" />

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