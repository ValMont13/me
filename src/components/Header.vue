<template>
  <header>
    <div id="topbar"><h2>Valentin Montagne, web developer</h2></div>
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
          { title: 'Mes Compétences', link: '#skills' },
          { title: 'Mes Projets', link: '#projects' }
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

<style lang="scss" scoped>
  @import '../assets/scss/colors/index';
  @import '../assets/scss/mixins/compatibility/index';

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
    cursor: pointer;
    @include transitions($quick)
  }

  .menu-item:hover .title {
    @include transforms(skew(15deg));
  }

  .title {
    display: inline-block;
    color: white;
    font-size: 34px;
    font-weight: 700;
    cursor: pointer;
    @include transitions($quick)
  }

  #topbar {
    background: $dark-bg;
    padding: 10px;
  }

  #topbar h2 {
    display: inline-block;
    color: white;
    font-family: monospace;
    overflow: hidden;
    border-right: .15em solid $strongGreen;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation:
      typing 5s steps(40, end),
      blink-caret .5s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: $strongGreen }
  }

  /* Responsive */

  @media only screen and (max-width: 767px)
  {
    #topbar h2 {
      font-size: 12px;
    }

    .title {
      font-size: 28px;
    }
  }

  @media only screen and (max-width: 400px) {
    header {
      border-bottom: solid 10px $strongGreen;
    }
  }

</style>
