<template>
  <div
    class="min-h-screen bg-gradient-to-tr from-indigo-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
    aria-label="Contact Us Page"
  >
    <div
      class="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 sm:p-12 border border-indigo-100"
    >
      <div class="text-center mb-12">
        <h1
          class="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow-md"
        >
          Contact Us
        </h1>
        <p
          class="text-indigo-900 text-lg sm:text-xl max-w-xl mx-auto tracking-wide leading-relaxed"
        >
          We’d love to hear from you! Reach out with any questions, feedback,
          or just to say hello.
        </p>
      </div>

      <form class="space-y-10" novalidate>
        <div>
          <label
            for="name"
            class="block text-sm font-semibold text-indigo-800 mb-2"
            >Full Name</label
          >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jane Doe"
            required
            class="w-full rounded-xl border border-indigo-300 px-5 py-3 text-indigo-900 placeholder-indigo-400 shadow-sm
            focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-500 transition
            duration-300 ease-in-out"
          />
        </div>

        <div>
          <label
            for="email"
            class="block text-sm font-semibold text-indigo-800 mb-2"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            class="w-full rounded-xl border border-indigo-300 px-5 py-3 text-indigo-900 placeholder-indigo-400 shadow-sm
            focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-500 transition
            duration-300 ease-in-out"
          />
        </div>

        <div>
          <label
            for="message"
            class="block text-sm font-semibold text-indigo-800 mb-2"
            >Message</label
          >
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="How can we help you?"
            required
            class="w-full rounded-xl border border-indigo-300 px-5 py-3 text-indigo-900 placeholder-indigo-400 shadow-sm resize-none
            focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-500 transition
            duration-300 ease-in-out"
          ></textarea>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="inline-flex items-center justify-center px-10 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg
            hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-60 transition
            duration-300 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// You can add form handling here if you want later
</script>
