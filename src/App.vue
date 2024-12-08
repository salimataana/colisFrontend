<script>
import Navbar from "@/components/Navbar.vue";
import Packet from "@/components/Packet.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    Packet
  }
};
</script>

<template>
  <main>
    <div>
      <Navbar/>
      <router-view/>
    </div>
  </main>
</template>

<style scoped>
</style>
