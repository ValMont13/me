<template>
  <header>
    <nav id="menu">
      <ul v-if="show">
        <li class="menu-item" v-for="item in menu" @click="scrollTo" :data-link="item.link">
          <a class="title" :data-link="item.link">{{ item.title }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import VueScrollTo from 'vue-scrollto'

  export default {
    name: 'header',
    data () {
      return {
        menu: [
          { title: 'Moi', link: '#me' },
          { title: 'Mes Compétences', link: '#competences' },
          { title: 'Mes Projets', link: '#projets' }
        ],
        show: window.innerWidth > 400
      }
    },
    created: function () {
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize (event) {
        this.show = window.innerWidth > 400
        if (this.show) {
          document.getElementById('menu').classList.remove('hide')
          document.getElementById('menu').classList.add('active')
        } else {
          document.getElementById('menu').classList.remove('active')
          document.getElementById('menu').classList.add('hide')
        }
      },
      scrollTo (event) {
        VueScrollTo.scrollTo(event.target.getAttribute('data-link'))
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/scss/colors/index';
  @import '../assets/scss/mixins/compatibility/index';
  @import url('https://fonts.googleapis.com/css?family=Amatic+SC');

  #menu {
    background-color: $strongGreen;
    @include shadows($lightShadow-black);
    color: white;
    font-family: 'Amatic SC', cursive;
  }

  ul {
    padding: 0;
    margin : 0;
  }

  .menu-item:hover {
    background-color: $lightGreen;
    @include transforms(skew(-15deg));
    @include shadows($lightShadow-gray)
  }

  .menu-item {
    list-style: none;
    display: inline-block;
    width: 25%;
    padding: 2%;
    @include transitions($quick)
  }

  .menu-item:hover .title {
    @include transforms(skew(15deg));
  }

  .title {
    color: white;
    font-size: 34px;
    font-weight: 700;
    @include transitions($quick)
  }

  /* Responsive */

  @media only screen and (max-width: 767px)
  {
    .title {
      font-size: 28px;
    }
  }

</style>
