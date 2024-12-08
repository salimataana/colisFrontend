<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/register" class="nav-link">Register</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login" class="nav-link">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/packet" class="nav-link">Create Packet</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/packetstatus" class="nav-link">Create PacketStatus</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/indexpacket" class="nav-link">List of Packet</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #007bff, #00d4ff); /* Dégradé de bleu */
  padding: 20px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Ombre subtile */
  border-radius: 8px; /* Bords arrondis */
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 0 25px;
  position: relative; /* Nécessaire pour les effets de survol */
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  text-transform: lowercase; /* mettre en minuscules */
  letter-spacing: 1px; /* Espace entre les lettres */
  padding: 8px 15px; /* Espacement autour du texte */
  border-radius: 4px;
  transition: all 0.3s ease; /* Transition douce pour les effets */
}

.nav-link:hover {
  color: #0056b3; /* Couleur du texte au survol */
  background-color: white; /* Fond blanc au survol */
  transform: translateY(-2px); /* Légère élévation au survol */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); /* Ombre au survol */
}

.nav-link:active {
  transform: translateY(1px); /* Effet d'enfoncement au clic */
}

.nav-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease;
}

.nav-item:hover::after {
  width: 100%; /* Barrure sous le lien au survol */
}
</style>
