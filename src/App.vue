<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  export default {
    name: 'app',
    components: {
      'header-bar': Header,
      'footer-bar': Footer
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Poiret+One');

  @font-face {
    font-family: 'Poiret One', cursive;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    font-family: 'Poiret One', cursive;
    margin: 0;
  }

  h1, h2, h3, h4, footer, p, span {
    font-family: 'Poiret One', cursive;
    font-weight: 600;
  }

</style>
