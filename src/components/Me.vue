<template>
  <section id="me">
    <b-container style="padding:0">
      <h1>Qui suis-je ?</h1>
      <b-col class="txt-container">
          <p class="txt-container-content">
            Lorem Ipsum...
          </p>
      </b-col>
    </b-container>
  </section>
</template>

<script>
  export default {
    name: 'Me'
  }
</script>

<style lang="scss">
  @import '../assets/scss/colors/index';
  @import '../assets/scss/mixins/compatibility/index';

  #me {
    height: 80vh;
    margin: 3%;
    text-align: left;
  }

  .txt-container {
    margin: 3%;
  }

  .txt-container-content {
    background: $lightGray;
    padding: 3%;
    @include shadows($borderlike);
  }

</style>
