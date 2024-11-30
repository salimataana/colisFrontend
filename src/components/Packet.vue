<template>
  <div class="form-container">
    <h2>Create Packet</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="name" placeholder="Entrez le nom du colis" required />
      </div>

      <div class="form-group">
        <label for="weight">Poids</label>
        <input type="number" id="weight" v-model="weight" placeholder="Entrez le poids du colis" required />
      </div>

      <div class="form-group">
        <label for="address_packet">Adresse du Colis</label>
        <input type="text" id="address_packet" v-model="address_packet" placeholder="Entrez l'adresse du colis" required />
      </div>

      <div class="form-group">
        <label for="code_postal">Code Postal</label>
        <input type="number" id="code_postal" v-model="code_postal" placeholder="Entrez le code postal" required />
      </div>

      <div class="form-group">
        <label for="date_creation">Date de Création</label>
        <input type="date" id="date_creation" v-model="date_creation" required />
      </div>

      <button type="submit">Create Packet</button>
    </form>

    <div v-if="submitted" class="form-summary">
      <h3>Détails du colis soumis :</h3>
      <p><strong>Nom :</strong> {{ name }}</p>
      <p><strong>Poids :</strong> {{ weight }} kg</p>
      <p><strong>Adresse :</strong> {{ address_packet }}</p>
      <p><strong>Code Postal :</strong> {{ code_postal }}</p>
      <p><strong>Date de Création :</strong> {{ date_creation }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Variables pour lier les champs du formulaire
const name = ref('');
const weight = ref(null);
const address_packet = ref('');
const code_postal = ref(null);
const date_creation = ref('');

// Variable pour afficher les informations soumises
const submitted = ref(false);

// Fonction pour soumettre le formulaire
const submitForm = () => {
  // Lorsque le formulaire est soumis, afficher les informations saisies
  submitted.value = true;
};
</script>

<style scoped>
.form-container {
  width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

input,
textarea,
select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.form-summary {
  margin-top: 20px;
}
</style>
