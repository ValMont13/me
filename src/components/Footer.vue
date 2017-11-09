<template>
  <footer>
    <section id="footer">
      <div id="byme">By Valentin Montagne</div>
    </section>
  </footer>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style lang="scss">

  @import '../assets/scss/mixins/compatibility/index';
  @import '../assets/scss/colors/index';

  #footer {
    background-color: $dark-bg;
    padding: 5%;
    @include shadows($lightShadow-black);
  }

  #byme {
    color: white;
    font-size: 18px;
  }
</style>
