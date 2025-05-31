<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">
          Discover <span class="hero-title-accent">Tech Events</span> That Matter
        </h1>
        <p class="hero-subtitle">
          Connect with innovators and thought leaders across Africa's fastest-growing tech sectors.
        </p>
      </div>
    </div>

    <Events/>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
// Form handling logic would go here
</script>

<style scoped>
/* Base Styles */
.min-h-screen {
  min-height: 100vh;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.bg-gray-50 {
  background-color: #f9fafb;
}

/* Navbar Styles */
.navbar {
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-container {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .nav-container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .nav-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #4f46e5;
  transition: color 0.15s ease-in-out;
}

.logo:hover {
  color: #3730a3;
}

.logo-accent {
  color: #818cf8;
}

.nav-links {
  display: none;
  gap: 2rem;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  color: #374151;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  transition: color 0.15s ease-in-out;
}

.nav-link:hover {
  color: #4f46e5;
}

.active-link {
  color: #4f46e5;
  border-bottom: 2px solid #6366f1;
}

.mobile-menu-button {
  color: #6b7280;
  transition: color 0.15s ease-in-out;
}

@media (min-width: 768px) {
  .mobile-menu-button {
    display: none;
  }
}

.mobile-menu-button:hover {
  color: #4f46e5;
}

.menu-icon {
  height: 1.5rem;
  width: 1.5rem;
  fill: none;
}

/* Hero Section Styles */
.hero-section {
  position: relative;
  background-image: linear-gradient(to right, #6366f1, #9333ea);
  padding: 5rem 1rem;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background-color: #000000;
  opacity: 0.1;
}

.hero-content {
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  z-index: 10;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.25;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
}

.hero-title-accent {
  color: #c7d2fe;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #e0e7ff;
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

@media (min-width: 640px) {
  .hero-buttons {
    flex-direction: row;
  }
}

.hero-button-primary {
  display: inline-flex;
  justify-content: center;
}

.hero-button-primary button {
  background-color: #ffffff;
  color: #4f46e5;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  transform: translateY(0);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.hero-button-primary button:hover {
  background-color: #e0e7ff;
  transform: translateY(-0.25rem);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hero-button-secondary {
  display: inline-flex;
  justify-content: center;
}

.hero-button-secondary button {
  background-color: #4338ca;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  transform: translateY(0);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.hero-button-secondary button:hover {
  background-color: #3730a3;
  transform: translateY(-0.25rem);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.button-icon {
  height: 1.25rem;
  width: 1.25rem;
}

/* Events Section Styles */
.events-section {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.section-divider {
  width: 5rem;
  height: 0.25rem;
  background-color: #4f46e5;
  margin-left: auto;
  margin-right: auto;
}

.events-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 640px) {
  .events-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .events-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.event-card {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-left-width: 4px;
}

.event-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.ai-event {
  border-left-color: #6366f1;
}

.web3-event {
  border-left-color: #3b82f6;
}

.devfest-event {
  border-left-color: #10b981;
}

.event-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.event-icon {
  background-color: #e0e7ff;
  padding: 0.75rem;
  border-radius: 9999px;
  margin-right: 1rem;
}

.ai-event .event-icon {
  background-color: #e0e7ff;
}

.web3-event .event-icon {
  background-color: #dbeafe;
}

.devfest-event .event-icon {
  background-color: #d1fae5;
}

.icon {
  height: 2rem;
  width: 2rem;
}

.ai-event .icon {
  color: #4f46e5;
}

.web3-event .icon {
  color: #2563eb;
}

.devfest-event .icon {
  color: #059669;
}

.event-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  transition: color 0.3s ease;
}

.ai-event:hover .event-title {
  color: #4f46e5;
}

.web3-event:hover .event-title {
  color: #2563eb;
}

.devfest-event:hover .event-title {
  color: #059669;
}

.event-description {
  color: #6b7280;
  margin-bottom: 1.5rem;
}



.event-meta {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
}

.meta-icon {
  height: 1rem;
  width: 1rem;
  margin-right: 0.25rem;
}

.event-register {
  color: #4f46e5;
  font-weight: 500;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
}

.event-register:hover {
  color: #3730a3;
}

.register-icon {
  height: 1.25rem;
  width: 1.25rem;
  margin-left: 0.25rem;
}

/* Registration Form Styles */
.registration-section {
  background-color: #f9fafb;
  padding: 4rem 1rem;
}

.registration-container {
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.registration-header {
  background-image: linear-gradient(to right, #6366f1, #9333ea);
  padding: 1.5rem;
  color: #ffffff;
}

.registration-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.registration-subtitle {
  color: #e0e7ff;
}

.registration-form {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
}

.form-input {
  width: 100;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.25);
}
.checkbox-input {
  height: 1rem;
  width: 1rem;
  color: #4f46e5;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
}

.terms-link {
  color: #4f46e5;
  text-decoration: underline;
  transition: color 0.2s ease;
}

.terms-link:hover {
  color: #3730a3;
}

.submit-button {
  background-color: #4f46e5;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.submit-button:hover {
  background-color: #4338ca;
}

.submit-icon {
  height: 1.25rem;
  width: 1.25rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  color: #d1d5db;
  transition: color 0.2s ease;
}

.social-icon:hover {
  color: #818cf8;
}

.icon {
  height: 1.5rem;
  width: 1.5rem;
}



/* Utility Classes */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
