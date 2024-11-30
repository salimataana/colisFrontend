<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Section des informations générales -->
      <div class="footer-section">
        <h3>À propos</h3>
        <p>
          Notre entreprise se spécialise dans la livraison rapide et fiable de colis
          à travers le monde. Nous mettons un accent particulier sur la satisfaction
          de nos clients et l'innovation dans nos services.
        </p>
      </div>

      <!-- Section des liens de navigation -->
      <div class="footer-section">
        <h3>Navigation</h3>
        <ul>
          <li><a href="/home">Accueil</a></li>
          <li><a href="/services">Nos Services</a></li>
          <li><a href="/contact">Contactez-nous</a></li>
          <li><a href="/about">À propos</a></li>
        </ul>
      </div>

      <!-- Section des réseaux sociaux -->
      <div class="footer-section">
        <h3>Suivez-nous</h3>
        <div class="social-icons">
          <a href="#" class="icon">🌐</a>
          <a href="#" class="icon">📧</a>
          <a href="#" class="icon">📱</a>
        </div>
      </div>

      <!-- Section des informations légales -->
      <div class="footer-section">
        <h3>Informations Légales</h3>
        <ul>
          <li><a href="/privacy-policy">Politique de confidentialité</a></li>
          <li><a href="/terms-of-service">Conditions d'utilisation</a></li>
          <li><a href="/cookies-policy">Politique de cookies</a></li>
        </ul>
      </div>

      <!-- Section des contacts -->
      <div class="footer-section">
        <h3>Contact</h3>
        <ul>
          <li><strong>Téléphone :</strong> +33 06 78 36 33 19</li>
          <li><strong>Email :</strong> ana.salimata.sanou@gmail.com</li>
          <li><strong>Adresse :</strong> 22 Rue Basse des Rives, Saint Etienne, France</li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2024 Mon Entreprise. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup>
// Aucun script nécessaire pour cet exemple
</script>

<style scoped>
.footer {
  background-color: #007bff; /* Fond bleu */
  color: white;
  padding: 40px 0;
  font-family: Arial, sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.footer-section p,
.footer-section ul {
  font-size: 0.9rem;
}

.footer-section ul {
  list-style: none;
  padding-left: 0;
}

.footer-section ul li {
  margin: 8px 0;
}

.footer-section a {
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #3498db;
}

.social-icons {
  margin-top: 10px;
}

.social-icons .icon {
  font-size: 1.8rem;
  margin: 0 15px;
  text-decoration: none;
  color: white;
}

.social-icons .icon:hover {
  color: #3498db;
}

.footer-bottom {
  background-color: #222;
  text-align: center;
  padding: 10px 0;
  font-size: 0.8rem;
}
</style>
