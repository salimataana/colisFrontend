<template>
  <div class="index-container">
    <h2>List of Packet</h2>

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
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Liste des paquets simulée (remplacer par une vraie source de données si nécessaire)
const packets = ref([
  { name: 'Colis 1', weight: 2.5, address: '123 Rue Exemple', postalCode: '75000', creationDate: '2024-11-01' },
  { name: 'Colis 2', weight: 1.2, address: '456 Avenue Modèle', postalCode: '69000', creationDate: '2024-11-05' },
  { name: 'Colis 3', weight: 3.0, address: '789 Boulevard Test', postalCode: '13000', creationDate: '2024-11-10' }
]);
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
