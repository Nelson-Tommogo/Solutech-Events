<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-4">
      <div class="w-full max-w-md">
        <!-- Animated Card -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <!-- Decorative header strip -->
          <div class="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
          
          <div class="p-8">
            <!-- Logo and Title -->
            <div class="flex justify-center mb-6">
              <div class="bg-blue-100 p-3 rounded-full">
                <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
            </div>
            <h2 class="text-center text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
            <p class="text-center text-gray-500 mb-8">Register for admin access</p>
  
            <!-- Registration Form -->
            <form class="space-y-5" @submit.prevent="handleRegister">
              <!-- Name Input -->
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <input
                  v-model="name"
                  type="text"
                  placeholder="Full Name"
                  required
                  class="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition duration-200"
                >
              </div>
  
              <!-- Email Input -->
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <input
                  v-model="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  class="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition duration-200"
                >
              </div>
  
              <!-- Password Input -->
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <input
                  v-model="password"
                  type="password"
                  placeholder="Password"
                  required
                  class="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition duration-200"
                >
              </div>
  
              <!-- Password Requirements -->
              <div class="text-xs text-gray-500 p-3 bg-gray-50 rounded-lg">
                <p class="font-medium mb-1">Password requirements:</p>
                <ul class="list-disc list-inside space-y-1">
                  <li>Minimum 8 characters</li>
                  <li>At least one uppercase letter</li>
                  <li>At least one number</li>
                </ul>
              </div>
  
              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center"
                :disabled="loading"
              >
                <span v-if="!loading">Create Account</span>
                <span v-else class="flex items-center">
                  <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </span>
              </button>
  
              <!-- Error Message -->
              <div v-if="error" class="p-3 bg-red-50 text-red-600 rounded-lg text-sm flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {{ error }}
              </div>
            </form>
  
            <!-- Login Link -->
            <div class="mt-6 text-center text-sm text-gray-500">
              <p>Already have an account? <router-link to="/login" class="font-medium text-blue-600 hover:text-blue-500 transition duration-200">Sign in</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useRuntimeConfig } from '#imports'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const error = ref('')
  const loading = ref(false)
  
  const router = useRouter()
  const config = useRuntimeConfig()
  
  const handleRegister = async () => {
    try {
      loading.value = true
      error.value = ''
      
      const { error: err } = await useFetch('/api/register', {
        baseURL: config.public.apiBase,
        method: 'POST',
        body: { 
          name: name.value, 
          email: email.value, 
          password: password.value 
        }
      })
  
      if (err.value) {
        error.value = err.value.data?.message || 'Registration failed. Please try again.'
        loading.value = false
        return
      }
  
      // Redirect to login after successful registration
      router.push('/login')
    } catch (e) {
      error.value = 'An unexpected error occurred. Please try again later.'
      loading.value = false
      console.error('Registration error:', e)
    }
  }
  </script>