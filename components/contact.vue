<template>
    <div class="min-h-screen bg-gradient-to-tr from-indigo-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div class="max-w-3xl w-full bg-white rounded-xl shadow-lg p-10 sm:p-12">
        <div class="text-center mb-10">
          <h1 class="text-5xl font-extrabold text-indigo-700 mb-4">Contact Us</h1>
          <p class="text-indigo-900 text-lg max-w-xl mx-auto">
            We’d love to hear from you! Reach out with any questions, feedback, or just to say hello.
          </p>
        </div>
  
        <form class="space-y-8">
          <div>
            <label for="name" class="block text-sm font-semibold text-indigo-800 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Jane Doe"
              class="w-full rounded-lg border border-indigo-300 px-4 py-3 shadow-sm placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
  
          <div>
            <label for="email" class="block text-sm font-semibold text-indigo-800 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              class="w-full rounded-lg border border-indigo-300 px-4 py-3 shadow-sm placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
  
          <div>
            <label for="message" class="block text-sm font-semibold text-indigo-800 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="How can we help you?"
              class="w-full rounded-lg border border-indigo-300 px-4 py-3 shadow-sm placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
            ></textarea>
          </div>
  
          <div class="text-center">
            <button
              type="submit"
              class="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Add form handling logic here if needed
  </script>
  