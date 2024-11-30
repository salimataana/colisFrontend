
<!-- Home.vue -->
<template>
  <div class="home-container">
    <!-- Affichage de l'image -->
    <img src="/home.jpg" alt="Home Image" class="main-image" />

    <Footer />
  </div>
</template>

<script setup>
import Footer from './Footer.vue'; // Footer importer ici
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-image {
  width: 100%;
  display: block;
  margin: 0 auto;
  flex-grow: 1; /* Permet à l'image de prendre l'espace restant */
}
</style>
