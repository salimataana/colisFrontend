<template>
  <div v-if="packetstatus.length > 0" class="tracking-container">
    <div v-for="packetstatu in packetstatus" :key="packetstatu.id" class="tracking-card">

      <h2 class="tracking-title">Tracking of Packet</h2>
      <div class="tracking-details">
        <div class="detail">
          <label class="detail-label">Numéro de Suivi :</label>
          <span class="detail-value">{{ packetstatu.id }}</span>
        </div>
        <div class="detail">
          <label class="detail-label">Statut :</label>
          <span class="detail-value" >{{ packetstatu.name }}</span>
        </div>
        <div class="detail">
          <label class="detail-label">Description :</label>
          <span class="detail-value">{{ packetstatu.description }}</span>
        </div>
        <div class="detail">
          <label class="detail-label">Date :</label>
          <span class="detail-value">{{ packetstatu.created_at }}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>No Tracking Status available.</p>
  </div>
</template>

<script>
 import { ref, computed } from 'vue';
 import axios from "axios";
 //http://localhost:8080/rest/v1/trackingpacket/452



 export default {
   name: 'PacketTracking',
   data(){
     return {
       packetId:this.$route.params.packetId,
       packetstatus: null
     }
   },
   created(){
     this.fetchPacket()
   },
   methods:{
    async fetchPacket(){
       const response = await axios.get(`http://localhost:8080/rest/v1/trackingpacket/${this.packetId}`,{
         headers: {
           'Access-Control-Allow-Origin': '*'
         }
       })
       console.log(response);
       this.packetstatus = response.data;
   }
   }
 }

/*
// Variables du colis
const trackingNumber = ref('1234567890');
const status = ref('Reprogrammé'); // Nouveau statut ajouté
const description = ref('Le colis a été reprogrammé pour une nouvelle date de livraison.');
const date = ref('2024-12-01');

// Dynamically set the class for status based on the current value
const statusClass = computed(() => {
  if (status.value === 'En cours') return 'status-in-progress';
  if (status.value === 'Livré') return 'status-delivered';
  if (status.value === 'Reprogrammé') return 'status-rescheduled'; // Nouvelle classe pour "Reprogrammé"
  return 'status-pending';
});
 */

</script>

<style scoped>
.tracking-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
}

.tracking-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 100%;
}

.tracking-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.tracking-details {
  font-size: 1rem;
  color: #555;
}

.detail {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.detail-label {
  font-weight: bold;
  color: #333;
}

.detail-value {
  color: #666;
  font-style: italic;
}

.status-in-progress {
  color: #ff9800; /* Orange */
}

.status-delivered {
  color: #4caf50; /* Green */
}

.status-rescheduled {
  color: #ff5722; /* Red-Orange for Reprogrammed */
}

.status-pending {
  color: #2196f3; /* Blue */
}
</style>
