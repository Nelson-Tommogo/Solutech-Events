<template>
  <div>
    <Navbar />

    <div class="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-6 sm:px-12 lg:px-20">
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-14">
          <h1 class="text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow-md">
            About Us
          </h1>
          <p class="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Welcome to <span class="font-semibold text-indigo-600">EventMaster</span> — your trusted partner for seamless and secure ticketing for concerts, sports, conferences, and more.
          </p>
          <router-link
            to="/"
            class="inline-block mt-6 px-6 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Return Home
          </router-link>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            class="bg-white rounded-xl shadow-lg p-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-indigo-100 hover:via-indigo-50 hover:to-white cursor-pointer"
          >
            <h2 class="text-2xl font-semibold text-indigo-700 mb-3">Who We Are</h2>
            <p class="text-gray-700 leading-relaxed">
              We're a passionate team dedicated to simplifying how people discover, book, and attend events.
            </p>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg p-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-indigo-100 hover:via-indigo-50 hover:to-white cursor-pointer"
          >
            <h2 class="text-2xl font-semibold text-indigo-700 mb-3">What We Do</h2>
            <p class="text-gray-700 leading-relaxed">
              We provide an all-in-one platform for event organizers to sell tickets, manage attendees, and build excitement.
            </p>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg p-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-indigo-100 hover:via-indigo-50 hover:to-white cursor-pointer"
          >
            <h2 class="text-2xl font-semibold text-indigo-700 mb-3">Our Mission</h2>
            <p class="text-gray-700 leading-relaxed">
              To make event access easier, safer, and more enjoyable for everyone.
            </p>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg p-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-indigo-100 hover:via-indigo-50 hover:to-white cursor-pointer"
          >
            <h2 class="text-2xl font-semibold text-indigo-700 mb-3">Why Choose Us?</h2>
            <p class="text-gray-700 leading-relaxed">
              Secure payments, real-time ticketing, personalized recommendations, and 24/7 support.
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
// no changes needed here
</script>
