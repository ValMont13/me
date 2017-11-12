<template>
  <section id="content">
    <me-section></me-section>
    <skills-section></skills-section>
    <projects-section></projects-section>
  </section>
</template>

<script>
  import Me from '@/components/Me'
  import Skills from '@/components/Skills'
  import Projects from '@/components/Projects'

  export default {
    name: 'Homepage',
    components: {
      'me-section': Me,
      'skills-section': Skills,
      'projects-section': Projects
    }
  }
</script>
