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

<script>
import axios from "axios";

export default {
  name: 'Packets',
  data() {
    return {
      name: "",
      weight: 0,
      address_packet: "",
      code_postal: "",
      date_creation: "",
      submitted: false,
    };
  },

  methods: {
    async submitForm() {
      try {
        const packetData = {
          name: this.name,
          weight: this.weight,
          address_packet: this.address_packet,
          code_postal: this.code_postal,
          date_creation: this.date_creation,
        };
        //alert(JSON.stringify(packetData));
        const response = await axios.post('http://localhost:8080/rest/v1/packet',packetData);
        console.log(response.status); // Affiche le code de statut
        this.submitted = true;
        // Redirection vers la route IndexPacket avec la bonne casse
        this.$router.push('/indexpacket');
      } catch (error) {
        console.error('Erreur lors de la création du packet :', error.response || error);
        alert('Une erreur est survenue lors de la création du packet.');
      }
    },
  },

  created() {
    axios.get('http://localhost:8080/rest/v1/packet');
  },
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
