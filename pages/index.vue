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

    <Events />

    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
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

/* Hero Section Styles */
.hero-section {
  position: relative;
  background-image: linear-gradient(to right, #6366f1, #9333ea);
  padding: 5rem 1.5rem;
  max-width: 900px;
  width: 90vw;
  margin: 2rem auto;
  border-radius: 1rem;
  border: 3px solid transparent;
  box-shadow: 0 15px 30px rgba(99, 102, 241, 0.3);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.hero-section:hover {
  border-color: #c7d2fe;
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.6);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background-color: #000000;
  opacity: 0.1;
  border-radius: 1rem;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.hero-section:hover .hero-overlay {
  opacity: 0.18;
}

.hero-content {
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
  padding: 0 1rem;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.25;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: color 0.3s ease;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
}

.hero-title-accent {
  color: #c7d2fe;
  border-bottom: 3px solid #c7d2fe;
  padding-bottom: 0.2rem;
  cursor: pointer;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.hero-section:hover .hero-title {
  color: #e0e7ff;
}

.hero-section:hover .hero-title-accent {
  color: #e0e7ff;
  border-color: #e0e7ff;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #e0e7ff;
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: color 0.3s ease;
}

.hero-section:hover .hero-subtitle {
  color: #f3f4ff;
}
</style>
