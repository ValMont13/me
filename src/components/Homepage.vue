<template>
  <section id="content">
    <me-section></me-section>
  </section>
</template>

<script>
  import Me from '@/components/Me'

  export default {
    name: 'Homepage',
    components: {
      'me-section': Me
    }
  }
</script>
