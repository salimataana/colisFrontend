<template>
  <div class="form-container">
    <h2>Create PacketStatus</h2>
    <form @submit.prevent="submitForm">
      <!-- Champ Nom -->
      <div class="form-group">
        <label for="status">Statut</label>
        <select id="status" v-model="name" required>
          <option value="enCours">En Cours</option>
          <option value="livre">Livré</option>
          <option value="retarde">Retardé</option>
          <option value="reprogramme">Reprogrammé</option>
        </select>
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
      <button @click.prevent="submitForm()">Get values</button>
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

<script>

  import {ref, onMounted} from 'vue';
  import axios from 'axios';

  export default {
    name: 'PacketStatus',
    data() {
      return {
        statuspacket: {
          name: "",
          description: "",
          selectedPacketId: ""
        }, packets: []
      }
    },
    created() {
      this.fetchPackets();
    },
    methods: {
      async submitForm() {
        try {
          const packetstatusData = {
            name: this.name,
            description: this.description,
          };
          const  selectedPacketId= this.selectedPacketId;

         // alert(JSON.stringify(packetstatusData));


          const response = await axios.post(`http://localhost:8080/rest/v1/packetstatus?packet=${selectedPacketId}`,packetstatusData);
          console.log(response.status); // Affiche le code de statut
          this.submitted = true;
          // Redirection vers la route IndexPacket avec la bonne casse
          this.$router.push(`/trackingpacket/${selectedPacketId}`);
        } catch (error) {
          console.error('Erreur lors de la création du packet :', error.response || error);
          alert('Une erreur est survenue lors de la création du packet.');
        }
      },

      async fetchPackets() {
        try {
          const response = await axios.get('http://127.0.0.1:8080/rest/v1/packet', {
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          })
          this.packets = response.data
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching packets:', error);
        }
      }
    },
  }

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
