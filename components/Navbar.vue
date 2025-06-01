<template>
  <nav class="bg-white shadow-md py-4 px-4 sm:px-6 flex items-center justify-between">
    <!-- Logo on the left -->
    <h1 class="text-lg sm:text-xl font-bold text-indigo-700 cursor-pointer">
      Solutech EventsHub
    </h1>

    <!-- Hamburger menu for mobile -->
    <button 
      @click="toggleMenu"
      class="md:hidden focus:outline-none"
      aria-label="Toggle menu"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>

    <!-- Navigation links - hidden on mobile when menu is closed -->
    <ul 
      :class="{'hidden': !menuOpen, 'flex': menuOpen}" 
      class="md:flex flex-col md:flex-row gap-6 text-gray-700 font-medium absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none py-4 md:py-0 px-6 md:px-0 z-10"
    >
      <li><NuxtLink to="/" class="hover:text-indigo-600 transition py-2 block" @click="closeMenu">Home</NuxtLink></li>
      <li><NuxtLink to="/about" class="hover:text-indigo-600 transition py-2 block" @click="closeMenu">About</NuxtLink></li>
      <li><NuxtLink to="/events" class="hover:text-indigo-600 transition py-2 block" @click="closeMenu">Events</NuxtLink></li>
      <li><NuxtLink to="/contact" class="hover:text-indigo-600 transition py-2 block" @click="closeMenu">Contact</NuxtLink></li>
    </ul>

    <!-- Empty space on the right for larger screens -->
    <div class="hidden md:block w-24"></div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>