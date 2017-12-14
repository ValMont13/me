<template>
  <footer>
    <section id="footer">
      <div id="mail">
        <img src="static/mailbox.png" width="100px" height="100px">
        <a href="mailto:valentin.montagne@epitech.eu"></a>
      </div>
      <h2 class="footer-txt">Contactez moi ! </h2>
      <div id="byme">By Valentin Montagne</div>
    </section>
  </footer>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style lang="scss" scoped>

  @import '../assets/scss/mixins/compatibility/index';
  @import '../assets/scss/colors/index';

  #footer {
    background-color: $dark-bg;
    padding: 5%;
    @include shadows($lightShadow-black);
  }

  .footer-txt {
    color: white;
  }

  #mail {
    position: relative;
    width: 100px;
    height: 100px;
    margin: auto;
  }

  #mail:hover img {
    transform: scale(1.1) rotateY(40deg);
  }

  #mail img {
    @include transitions($normal);
  }

  #mail a {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }

  #byme {
    color: white;
    font-size: 18px;
  }
</style>
