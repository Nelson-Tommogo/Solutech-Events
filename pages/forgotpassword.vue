<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
          Forgot Password
        </h2>
  
        <form @submit.prevent="handleGeneratePassword">
          <div v-if="!linkSent">
            <!-- Email Input -->
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="Enter your email"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
  
            <!-- Generate Password Button -->
            <button
              type="submit"
              class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
            >
              Generate Password
            </button>
          </div>
  
          <!-- Success Message -->
          <div v-else class="text-center text-green-600 font-medium">
            Password reset link has been sent to your email.
            <div class="text-sm mt-2 text-gray-500">Redirecting to login...</div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const linkSent = ref(false)
  const router = useRouter()
  
  function handleGeneratePassword() {
    console.log('Generating password for:', email.value)
    linkSent.value = true
  
    // Redirect to login after 3 seconds
    setTimeout(() => {
      router.push('/login')
    }, 3000)
  }
  </script>
  