<template>
<div class="app">
  <header class="app__header">
    <the-header></the-header>
  </header>
  <section class="app__advantages">
    <the-advantages></the-advantages>
  </section>
  <section class="app__features">
    <the-features></the-features>
  </section>
</div>
</template>

<script>
import TheAdvantages from './components/TheAdvantages.vue'
import TheFeatures from './components/TheFeatures.vue'
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheAdvantages,
    TheFeatures
  }
}
</script>
