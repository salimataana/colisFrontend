<script setup>
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <main>
  <div>
    <!-- Navbar affichée en haut de chaque page -->
    <Navbar />
    <!--<Footer/> -->

    <router-view></router-view> <!-- Affiche les composants correspondant à la route -->
  </div>
  </main>
</template>

<style scoped>
</style>
