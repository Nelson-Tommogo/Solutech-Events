<template>
  <nav class="bg-white shadow-md py-4 px-6 flex items-center">
    <!-- Logo -->
    <h1 class="text-xl font-bold text-indigo-700 mr-auto cursor-pointer">
      Solutech EventsHub
    </h1>

    <!-- Navigation links -->
    <ul class="flex gap-8 text-gray-700 font-medium mx-auto">
      <li><NuxtLink to="/" class="hover:text-indigo-600 transition">Home</NuxtLink></li>
      <li><NuxtLink to="/about" class="hover:text-indigo-600 transition">About</NuxtLink></li>
      <li><NuxtLink to="/events" class="hover:text-indigo-600 transition">Events</NuxtLink></li>
      <li><NuxtLink to="/contact" class="hover:text-indigo-600 transition">Contact</NuxtLink></li>
    </ul>

    <!-- Auth links with icons -->
    <div class="flex items-center gap-4">
      <!-- Login -->
      <NuxtLink to="/login" class="flex items-center text-indigo-600 hover:text-indigo-800 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H3m0 0l4-4m-4 4l4 4m6-10h4a2 2 0 012 2v12a2 2 0 01-2 2h-4" />
        </svg>
        Login
      </NuxtLink>

      <!-- Register -->
      <NuxtLink to="/register" class="flex items-center text-indigo-600 hover:text-indigo-800 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-6 8a6 6 0 00-6 6h12a6 6 0 00-6-6z" />
        </svg>
        Register
      </NuxtLink>

      <!-- Logout -->
      <NuxtLink to="/logout" class="flex items-center text-red-600 hover:text-red-800 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 11-4 0v-1m4-10V5a2 2 0 10-4 0v1" />
        </svg>
        Logout
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
// No script logic required since you're only navigating
</script>
