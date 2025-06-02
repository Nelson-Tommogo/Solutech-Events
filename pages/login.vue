<template>
    <div class="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 flex items-center justify-center p-4">
      <div class="w-full max-w-md">
        <!-- Animated Card -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
          <!-- Decorative header strip -->
          <div class="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
          
          <div class="p-8">
            <!-- Logo and Title -->
            <div class="flex justify-center mb-6">
              <div class="bg-green-100 p-3 rounded-full">
                <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                </svg>
              </div>
            </div>
            <h2 class="text-center text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            <p class="text-center text-gray-500 mb-8">Sign in to your admin dashboard</p>
  
            <!-- Login Form -->
            <form class="space-y-5" @submit.prevent="handleLogin">
              <!-- Email Input -->
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  class="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-200 focus:border-green-500 outline-none transition duration-200"
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
                  id="password"
                  v-model="password"
                  type="password"
                  placeholder="Password"
                  required
                  class="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-200 focus:border-green-500 outline-none transition duration-200"
                >
              </div>
  
              <!-- Remember Me & Forgot Password -->
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  >
                  <label for="remember-me" class="ml-2 block text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="/forgotpassword" class="text-sm font-medium text-green-600 hover:text-green-500 transition duration-200">
                    Forgot password?
                  </a>
                </div>
              </div>
  
              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center"
                :disabled="loading"
              >
                <span v-if="!loading">Sign In</span>
                <span v-else class="flex items-center">
                  <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
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
  
            <!-- Footer Links -->
            <div class="mt-6 text-center text-sm text-gray-500">
              <p>Don't have an account? <a href="#" class="font-medium text-green-600 hover:text-green-500 transition duration-200">Request access</a></p>
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
  
  const email = ref('')
  const password = ref('')
  const error = ref('')
  const loading = ref(false)
  
  const router = useRouter()
  const config = useRuntimeConfig()
  
  const handleLogin = async () => {
    try {
      loading.value = true
      error.value = ''
      
      const { data, error: err } = await useFetch('/api/login', {
        baseURL: config.public.apiBase,
        method: 'POST',
        body: { 
          email: email.value, 
          password: password.value 
        },
        credentials: 'include'
      })
  
      if (err.value) {
        error.value = err.value.data?.message || 'Login failed. Please check your credentials.'
        loading.value = false
        return
      }
  
      // Redirect on successful login
      router.push('/dashboard')
    } catch (e) {
      error.value = 'An unexpected error occurred. Please try again later.'
      loading.value = false
      console.error('Login error:', e)
    }
  }
  </script>