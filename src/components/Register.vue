<template>
  <div class="register-container">
    <h2>Register</h2>
    <div class="form-container">
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" class="form-control" id="firstName" v-model="firstName" placeholder="Enter first name" required />
        </div>

        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" class="form-control" id="lastName" v-model="lastName" placeholder="Enter last name" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email" required />
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="tel" class="form-control" id="phone" v-model="phone" placeholder="Enter phone number" />
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <input type="text" class="form-control" id="address" v-model="address" placeholder="Enter address" />
        </div>

        <div class="form-group">
          <label for="typeOfAccount">Type of Account</label>
          <select class="form-control" id="typeOfAccount" v-model="typeOfAccount">
            <option value="customer">Customer</option>
            <option value="deliver">Deliver</option>
          </select>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="Enter password" required />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm your password" required />
        </div>

        <button type="submit" class="btn btn-primary w-100">Submit</button>
      </form>

      <p class="mt-3">Already have an account? <router-link to="/login">Login here</router-link></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const address = ref('');
const typeOfAccount = ref('customer');
const password = ref('');
const confirmPassword = ref('');

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }
  // Handle form submission logic here (e.g., sending data to the backend)
  console.log('Form submitted with:', {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
    typeOfAccount: typeOfAccount.value,
    password: password.value,
  });
};
</script>

<style scoped>
.register-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f7f9fc;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 30px;
}

.form-container {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
  transition: all 0.3s ease;
}

/* Ajout de l'effet de focus */
.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  outline: none;
}

/* Bouton de soumission */
button {
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* Style pour le lien vers la page de connexion */
.mt-3 {
  text-align: center;
  font-size: 1rem;
}

.mt-3 a {
  text-decoration: none;
  color: #007bff;
}

.mt-3 a:hover {
  text-decoration: underline;
}

/* Animation de fade-in */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.register-container {
  animation: fadeIn 1s ease-in-out;
}
</style>
