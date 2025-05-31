<template>
  <nav class="bg-white shadow-md py-4 px-6 flex items-center">
    <!-- Logo on the far left -->
    <h1 class="text-xl font-bold text-indigo-700 mr-auto cursor-pointer">
      Solutech EventsHub
    </h1>

    <!-- Navigation links centered in the remaining space -->
    <ul class="flex gap-8 text-gray-700 font-medium mx-auto">
      <li><NuxtLink to="/" class="hover:text-indigo-600 transition">Home</NuxtLink></li>
      <li><NuxtLink to="/about" class="hover:text-indigo-600 transition">About</NuxtLink></li>
      <li><NuxtLink to="/events" class="hover:text-indigo-600 transition">Events</NuxtLink></li>
      <li><NuxtLink to="/contact" class="hover:text-indigo-600 transition">Contact</NuxtLink></li>
    </ul>

    <!-- Empty space on the right, or add user menu later -->
    <div class="w-24"></div>
  </nav>
</template>

<script setup lang="ts">
// No script logic required
</script>
