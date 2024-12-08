<template>
  <div class="index-container">
    <h2>List of Packets</h2>
    <!-- Affichage de la liste des paquets -->
    <div v-if="packets.length > 0" class="packets-grid">
      <div v-for="packet in packets" :key="packet.id" class="packet-card">
        <p><strong>Name :</strong> {{ packet.name }}</p>
        <p><strong>Weight :</strong> {{ packet.weight }} kg</p>
        <p><strong>Address :</strong> {{ packet.address_packet }}</p>
        <p><strong>Creation Date :</strong> {{ packet.date_creation }}</p>
        <router-link :to="'/trackingpacket/'+packet.id"><strong>Track Packet :</strong></router-link>
      </div>
    </div>
    <div v-else>
      <p>No packets available.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      packets: []
    };
  },
  created() {
    this.fetchPackets();
  },
  methods: {
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
  }
};
</script>

<style>
.index-container {
  padding: 20px;
}

.packets-grid {
  display: flex;
  flex-wrap: wrap;
}

.packet-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
}
</style>