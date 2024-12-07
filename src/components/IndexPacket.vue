<template>
  <div class="index-container">
    <h2>List of Packets</h2>

    <!-- Affichage de la liste des paquets -->
    <div v-if="packets.length > 0" class="packets-grid">
      <div v-for="(packet, index) in packets" :key="index" class="packet-card">
        <h3>Packet {{ index + 1 }}</h3>
        <p><strong>Name :</strong> {{ packet.name }}</p>
        <p><strong>Weight :</strong> {{ packet.weight }} kg</p>
        <p><strong>Address :</strong> {{ packet.address }}</p>
        <p><strong>Postal Code :</strong> {{ packet.postalCode }}</p>
        <p><strong>Creation Date:</strong> {{ packet.creationDate }}</p>
      </div>
    </div>

    <!-- Message si aucune donnée n'est disponible -->
    <p v-else class="no-packets">No packets available.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Liste réactive pour stocker les paquets
const packets = ref([]);

// Fonction pour récupérer les données des paquets avec axios
const fetchPackets = () => {
  const url = 'http://localhost:8080/rest/v1/packet'; // URL de l'API

  axios.get(url)
      .then(response => {
        console.log(response.data); // Affiche les données dans la console
        packets.value = response.data; // Assigne les données à packets
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error); // Affiche les erreurs dans la console
      });
};

// Appel de la fonction lors du montage du composant
onMounted(fetchPackets);
</script>

<style scoped>
.index-container {
  width: 80%;
  margin: 20px auto;
  text-align: center;
}

.packets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.packet-card {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.packet-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.packet-card h3 {
  color: #007bff;
}

.no-packets {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #555;
}
</style>
