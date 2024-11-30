<template>
  <div class="form-container">
    <h2>Create PacketStatus</h2>
    <form @submit.prevent="submitForm">
      <!-- Champ Nom -->
      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="name" placeholder="Entrez le nom" required />
      </div>

      <!-- Champ Description -->
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" id="description" v-model="description" placeholder="Entrez la description" required />
      </div>

      <!-- Liste déroulante Packet -->
      <div class="form-group">
        <label for="packet">Sélectionnez un Packet</label>
        <select id="packet" v-model="selectedPacketId" required>
          <option v-for="packet in packets" :key="packet.id" :value="packet.id">
            {{ packet.name }} (ID: {{ packet.id }})
          </option>
        </select>
      </div>

      <button type="submit">Create PacketStatus</button>
    </form>

    <!-- Affichage des données soumises -->
    <div v-if="submitted" class="form-summary">
      <h3>Données soumises :</h3>
      <p><strong>Nom :</strong> {{ name }}</p>
      <p><strong>Description :</strong> {{ description }}</p>
      <p><strong>Packet ID :</strong> {{ selectedPacketId }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Champs du formulaire
const name = ref('');
const description = ref('');
const selectedPacketId = ref(null);

// Liste statique des packets
const packets = ref([
  { id: 1, name: 'Packet 1' },
  { id: 2, name: 'Packet 2' },
  { id: 3, name: 'Packet 3' }
]);

// Indicateur de soumission réussie
const submitted = ref(false);

// Soumission du formulaire
const submitForm = () => {
  submitted.value = true;
};
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.form-summary {
  margin-top: 20px;
  padding: 10px;
  background-color: #e9f7ef;
  border: 1px solid #d4edda;
  border-radius: 5px;
}
</style>
