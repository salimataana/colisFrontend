<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">Email</label>
        <input type="email" id="username" v-model="username" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>

    <div v-if="message">
      <p>{{ message }}</p>
    </div>

    <p class="mt-3">Don't have an account? <router-link to="/register">Register here</router-link></p>
  </div>
</template>

<script>
import AuthService  from "@/services/AuthService.js";
import axios from "axios";

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      message: '',
      isAuthenticated: AuthService.isAuthenticated(),
    }
  },
  methods: {
    async submitForm() {

      const loginData = {
        username: this.username,
        password: this.password,
      };
      try {
        const response = await AuthService.login(loginData);


        //const response = await axios.post('http://localhost:8080/rest/v1/login', loginData, {
        //  headers: {
           // 'Access-Control-Allow-Origin': '*'
         // }
       // });

        this.isAuthenticated = true;
        this.message = "connexion reussie";
        this.$router.push('/indexpacket');
      } catch (error) {
        this.message = "erreur de connexion";
      }
    }
  }
}
</script>

<style scoped>
/* Style global du formulaire */
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.login-form h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
  font-family: 'Roboto', sans-serif;
}

.form-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

/* Effet de focus sur les champs de saisie */
input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Style pour le bouton */
button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Effet hover pour le bouton */
button:hover {
  background-color: #0056b3;
}

/* Ajout d'une marge au texte en bas */
.mt-3 {
  margin-top: 20px;
  text-align: center;
  font-size: 0.9rem;
}

.mt-3 a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.mt-3 a:hover {
  text-decoration: underline;
}

/* Ajout d'animations pour une expérience agréable */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.login-form {
  animation: fadeIn 1s ease-in-out;
}
</style>
