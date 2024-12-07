import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Register from '@/components/Register.vue';
import Login from '@/components/Login.vue';
import Packet from '@/components/createPacket.vue';
import PacketStatus from "@/components/createPacketStatus.vue";
import IndexPacket from "@/components/IndexPacket.vue";
import PacketTracking from "@/components/PacketTracking.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        redirect: '/register' // La page d'accueil redirige vers la page Register
    },

      {
      path: '/packet',
      name: 'Packet',
      component: Packet
      },
    {
        path: '/packetstatus',
        name: 'PacketStatus',
        component: PacketStatus
    },
    {
        path: '/indexpacket',
        name: 'IndexPacket',
        component: IndexPacket
    },
    {
        path: '/trackingpacket',
        name: 'PacketTracking',
        component: PacketTracking
    }
];

const router = createRouter({
history: createWebHistory(),
routes
});

export default router;
