<template>
  <section id="me">
    <b-container style="padding:0">
      <h1>Qui suis-je ?</h1>
      <b-row>
        <b-col sm="12" md="5" class="txt-container">
          <p class="txt-container-content">
            Je suis actuellement en 3ème année à Epitech Lille, je fais donc une formation spécialisée dans le développement informatique sous toutes ses formes :
            Web, Logiciels, Jeux videos, Systèmes embarqués... </br></br>
            J'ai travaillé lors de ma première année dans une agence web spécialiste dans la création de site Web et en référencement Google.</br></br>
            De part mon expérience acquise au vu de mes différents projets, je propose mes services en développement de solutions webs complétes.<br><br>
            En loisir, je participe souvent à différents événements, des hackathons ou encore la dernière DevFest !
          </p>
      </b-col>
      <b-col sm="12" md="5">
        <b-carousel id="me-slide"
                    indicators background="#fafafa" :interval="6000" img-width="500" img-height="500"
                    v-model="slide" @sliding-start="onStart" @sliding-end="onEnd">
          <b-carousel-slide caption="Hackathon Bonduelle/Thales" img-src="static/photo.jpg"></b-carousel-slide>
          <b-carousel-slide caption="Hackathon Bonduelle/Thales" img-src="static/Logo-Bonduelle.jpg"></b-carousel-slide>
          <b-carousel-slide caption="DevFest 2017 à Lille" img-src="static/devfest.jpg"></b-carousel-slide>
          <b-carousel-slide caption="Global Game Jam à Lille" img-src="static/global.png"></b-carousel-slide>
        </b-carousel>
      </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  export default {
    name: 'Me',
    data: function () {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onStart (slide) {
        this.sliding = true
      },
      onEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/colors/index';
  @import '../assets/scss/mixins/compatibility/index';

  #me {
    margin: 3%;
    padding: 3%;
    text-align: left;
    box-shadow: 0 0 5px -2px gray;
  }

  .txt-container {
    margin: 3%;
  }

  #me-slide {
    margin-top: 10%;
    @include shadows($lightShadow-gray);
  }

  .txt-container-content {
    background: $lightGray;
    text-align: justify;
    padding: 3%;
    margin-top: 10%;
    @include shadows($borderlike);
  }

  .carousel-caption {
    background: rgba(0, 0, 0, 0.5);
  }

  #me .row {
    margin-bottom: 3%;
  }

  @media only screen and (max-width: 767px) {
    .txt-container {
      margin: 0;
    }
  }

</style>
