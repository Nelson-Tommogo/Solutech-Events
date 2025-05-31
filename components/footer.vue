<template>
    <footer class="bg-gray-900 text-white py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 md:grid-cols-3">
          <!-- Brand -->
          <div>
            <h3 class="text-3xl font-bold">
              Event<span class="text-indigo-500">App</span>
            </h3>
            <p class="mt-4 text-gray-400">
              Connecting tech enthusiasts with Africa's most exciting technology events and conferences.
            </p>
          </div>
  
          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="hover:text-indigo-400 text-gray-300">Home</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-indigo-400 text-gray-300">About</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-indigo-400 text-gray-300">Contact</NuxtLink></li>
              <li><NuxtLink to="#events" class="hover:text-indigo-400 text-gray-300">Events</NuxtLink></li>
            </ul>
          </div>
  
          <!-- Social Media -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Connect With Us</h4>
            <div class="flex space-x-4">
              <a href="#" aria-label="Twitter" class="hover:text-indigo-400 text-gray-400">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675..."/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" class="hover:text-indigo-400 text-gray-400">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12c0-5.523..."/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" class="hover:text-indigo-400 text-gray-400">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c..."/>
                </svg>
              </a>
            </div>
          </div>
        </div>
  
        <div class="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
          &copy; 2025 EventApp. All rights reserved.
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  // No logic needed
  </script>
  
  <style scoped>
  /* All styles are handled by Tailwind */
  </style>
  