<template>
  <div>
    <Navbar />

    <div
      class="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-6 sm:px-12 lg:px-20"
      aria-label="About Us Section"
    >
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1
            class="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-6 drop-shadow-md leading-tight"
          >
            About Us
          </h1>
          <p
            class="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed tracking-wide"
          >
            Welcome to
            <span class="font-semibold text-indigo-600">EventMaster</span> — your
            trusted partner for seamless and secure ticketing for concerts,
            sports, conferences, and more.
          </p>
          <router-link
            to="/"
            class="inline-block mt-8 px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          >
            Return Home
          </router-link>
        </div>

        <!-- Cards Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12"
          role="list"
        >
          <div
            role="listitem"
            tabindex="0"
            class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-[1.05] transition-transform duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            <h2
              class="text-2xl sm:text-3xl font-semibold text-indigo-700 mb-4"
            >
              Who We Are
            </h2>
            <p class="text-gray-700 leading-relaxed text-base sm:text-lg">
              We're a passionate team dedicated to simplifying how people
              discover, book, and attend events.
            </p>
          </div>

          <div
            role="listitem"
            tabindex="0"
            class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-[1.05] transition-transform duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            <h2
              class="text-2xl sm:text-3xl font-semibold text-indigo-700 mb-4"
            >
              What We Do
            </h2>
            <p class="text-gray-700 leading-relaxed text-base sm:text-lg">
              We provide an all-in-one platform for event organizers to sell
              tickets, manage attendees, and build excitement.
            </p>
          </div>

          <div
            role="listitem"
            tabindex="0"
            class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-[1.05] transition-transform duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            <h2
              class="text-2xl sm:text-3xl font-semibold text-indigo-700 mb-4"
            >
              Our Mission
            </h2>
            <p class="text-gray-700 leading-relaxed text-base sm:text-lg">
              To make event access easier, safer, and more enjoyable for
              everyone.
            </p>
          </div>

          <div
            role="listitem"
            tabindex="0"
            class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-[1.05] transition-transform duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            <h2
              class="text-2xl sm:text-3xl font-semibold text-indigo-700 mb-4"
            >
              Why Choose Us?
            </h2>
            <p class="text-gray-700 leading-relaxed text-base sm:text-lg">
              Secure payments, real-time ticketing, personalized
              recommendations, and 24/7 support.
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
