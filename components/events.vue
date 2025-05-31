<template>
  <div class="container mx-auto px-4 py-10">
    <!-- Event List (Hidden when form is visible) -->
    <div v-if="!showForm && !showConfirmation">
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold text-green-700 mb-3">🌿 Upcoming Events</h1>
        <p class="text-gray-600 text-lg">Secure your spot at Africa's premier tech gatherings</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="event in events"
          :key="event.id"
          class="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
        >
          <img :src="event.image" :alt="event.title" class="w-full h-48 object-cover" />
          <div class="p-5">
            <p class="text-gray-500 text-sm flex items-center mb-2">
              <i class="fas fa-calendar-alt text-green-500 mr-2"></i> {{ event.date }}
            </p>
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              <i class="fas fa-bullhorn mr-2 text-green-600"></i> {{ event.title }}
            </h2>
            <p class="text-gray-700 mb-4">{{ event.description }}</p>
            <button
              @click="confirmRegistration(event)"
              class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center"
            >
              <i class="fas fa-user-plus mr-2"></i> Register
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div v-if="showConfirmation" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white rounded-lg p-6 shadow-lg max-w-md w-full text-center">
        <h2 class="text-xl font-bold text-green-700 mb-4">Confirm Registration</h2>
        <p class="text-gray-700 mb-6">
          Do you want to register for <span class="font-semibold">{{ selectedEvent.title }}</span>
          happening at <span class="font-semibold">{{ selectedEvent.location }}</span> on
          <span class="font-semibold">{{ selectedEvent.date }}</span>?
        </p>
        <div class="flex justify-center gap-4">
          <button
            @click="proceedToForm"
            class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Yes
          </button>
          <button
            @click="cancelConfirmation"
            class="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400"
          >
            No
          </button>
        </div>
      </div>
    </div>

    <!-- Registration Form -->
    <div v-if="showForm" class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold text-green-700 mb-6 text-center">
        <i class="fas fa-ticket-alt mr-2"></i> Register for {{ selectedEvent.title }}
      </h2>
      <form @submit.prevent="submitForm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              v-model="form.firstName"
              type="text"
              required
              class="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              v-model="form.lastName"
              type="text"
              required
              class="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            v-model="form.email"
            type="email"
            required
            class="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            v-model="form.phone"
            type="tel"
            required
            class="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Event</label>
          <input
            :value="selectedEvent.title"
            type="text"
            readonly
            class="w-full bg-gray-100 border px-4 py-2 rounded"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Number of Tickets</label>
          <input
            v-model.number="form.tickets"
            type="number"
            min="1"
            required
            class="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div class="mb-6">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              v-model="form.agree"
              required
              class="form-checkbox text-green-600"
            />
            <span class="ml-2 text-sm text-gray-700">
              I agree to the <a href="#" class="text-green-600 underline">terms and conditions</a>
            </span>
          </label>
        </div>

        <div class="flex justify-between items-center">
          <button
            type="submit"
            class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 flex items-center"
          >
            <i class="fas fa-paper-plane mr-2"></i> Submit
          </button>
          <button
            type="button"
            @click="cancelForm"
            class="text-gray-600 hover:underline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      events: [
        {
          id: 1,
          image: 'https://i.pinimg.com/736x/de/1c/96/de1c9637c52172b2fb3f43a96eeec842.jpg',
          date: 'Aug 20, 2025',
          title: 'Block Chain Kenya',
          location: 'Nairobi, Kenya',
          description: 'Explore innovations in smart agriculture and digital farming.'
        },
        {
          id: 2,
          image: 'https://i.pinimg.com/736x/fb/bc/97/fbbc97ad7d9865aa65b42378d75ccb0b.jpg',
          date: 'Aug 20, 2025',
          title: 'Cyber Security 2025',
          location: 'Nairobi, Kenya',
          description: 'Explore Cyber Security Top events.'
        },
        {
          id: 2,
          image: 'https://i.pinimg.com/736x/ec/be/07/ecbe07eabb98f298a78001ef4892a3a0.jpg',
          date: 'Sep 5, 2025',
          title: 'Africa AgriTech Expo',
          location: 'Kigali, Rwanda',
          description: 'Africa’s biggest gathering of AgriTech minds and startups.'
        },
        {
          id: 3,
          image: 'https://i.pinimg.com/736x/73/71/de/7371de98f76e1dad66b48f4aa8bac4bb.jpg',
          date: 'Oct 10, 2025',
          title: 'GreenTech Nairobi Meetup',
          location: 'Nairobi, Kenya',
          description: 'A networking event for green tech entrepreneurs.'
        },
      ],
      showForm: false,
      showConfirmation: false,
      selectedEvent: {},
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        tickets: 1,
        agree: false
      }
    }
  },
  methods: {
    confirmRegistration(event) {
      this.selectedEvent = event
      this.showConfirmation = true
    },
    proceedToForm() {
      this.form.event = this.selectedEvent.title
      this.showConfirmation = false
      this.showForm = true
    },
    cancelConfirmation() {
      this.selectedEvent = {}
      this.showConfirmation = false
    },
    cancelForm() {
      this.resetForm()
      this.showForm = false
    },
    submitForm() {
      alert(`🎉 Thank you, ${this.form.firstName}! You have registered for "${this.selectedEvent.title}".`)
      this.resetForm()
      this.showForm = false
    },
    resetForm() {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        tickets: 1,
        agree: false
      }
    }
  }
}
</script>
