<template>
  <section id="skills">
    <h2>Mes Compétences</h2>
    <b-container>
    <b-row id="web-skills">
      <b-col class="web-skill" v-for="skill in webSkills" :key="skill.title">{{ skill.title }}</b-col>
    </b-row>
    </b-container>
  </section>
</template>

<script>
  export default {
    name: 'Skills',
    data: function () {
      return {
        webSkills: [
          { title: 'HTML5' },
          { title: 'CSS3' },
          { title: 'PHP' },
          { title: 'Javascript' },
          { title: 'Node' },
          { title: 'Vue' },
          { title: 'jQuery' },
          { title: 'C++' },
          { title: 'Assembly 64' },
          { title: 'Ruby' },
          { title: 'Java' },
          { title: 'C#' },
          { title: 'C' }
        ]
      }
    }
  }
</script>

<style lang="scss">

  @import '../assets/scss/colors/index';
  @import '../assets/scss/mixins/compatibility/index';

  #web-skills {
    margin: 5% 1%;
  }

  .web-skill {
    padding: 30px;
    background: $strongGreen;
    color: white;
    font-weight: 800;
    text-transform: uppercase;
    margin: 4px;
    text-shadow: 0 2px #118012;
    @include shadows($lightShadow-black);
    @include transitions($quick)
  }

  .web-skill.col:hover {
    z-index: 1;
    color: #fafafa;
    background: $hoverGreen;
    @include shadows($strongShadow-black);
    @include transforms(scale(1.1))
  }

</style>
