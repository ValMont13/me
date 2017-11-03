<template>
  <section id="content">
    <me-section></me-section>
    <skills-section></skills-section>
  </section>
</template>

<script>
  import Me from '@/components/Me'
  import Skills from '@/components/Skills'

  export default {
    name: 'Homepage',
    components: {
      'me-section': Me,
      'skills-section': Skills
    }
  }
</script>
