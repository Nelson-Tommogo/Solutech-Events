<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div class="text-center">
        <!-- Animated Spinner -->
        <div class="flex justify-center mb-6">
          <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
        </div>
        
        <!-- Logout Message with Fade-in Animation -->
        <h1 class="text-2xl font-bold text-gray-800 mb-2 animate-pulse">Logging you out...</h1>
        <p class="text-gray-600 max-w-md mx-auto">Please wait while we securely end your session</p>
        
        <!-- Progress Bar -->
        <div class="mt-8 w-48 mx-auto bg-gray-200 rounded-full h-2 overflow-hidden">
          <div class="bg-green-500 h-2 rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const config = useRuntimeConfig()
  const router = useRouter()
  
  // Add a small delay for better UX (optional)
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Perform logout
  await useFetch('/api/logout', {
    baseURL: config.public.apiBase,
    method: 'POST',
    credentials: 'include'
  })
  
  // Redirect to login
  router.push('/login')
  </script>
  
  <style>
  /* Custom animation for progress bar */
  @keyframes progress {
    0% { width: 0%; }
    100% { width: 100%; }
  }
  .animate-progress {
    animation: progress 1.5s ease-in-out forwards;
  }
  </style>