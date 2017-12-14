<template>
  <section id="projects">
      <b-row no-gutters>
        <b-col v-for="(project, idx) in projects" :key="project"  sm="6">
          <div class="img-container">
            <img :src=project.img>
            <a class="project-link" :href=project.link></a>
          </div>
        </b-col>
      </b-row>
  </section>
</template>

<script>
  export default {
    name: 'Projects',
    data: function () {
      return {
        projects: [
          {
            link: 'https://www.motardsociety.com/',
            img: 'static/motard.png'
          },
          {
            link: '',
            img: 'static/funambulant.png'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

  .img-container img {
    width: 100%;
    transition: all 1s ease;
  }

  .img-container a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    transition: all 1s ease;
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .img-container:hover img {
    transform: scale(1.4) rotate(10deg);
  }

  .img-container:hover a {
    background: rgba(0, 0, 0, 0.1);
  }

</style>
