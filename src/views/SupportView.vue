<script lang="ts" setup>
import GoogleRecaptcha from "@/components/GoogleRecaptcha.vue";
</script>

<template>
  <main class="flex flex-col">
    <div class="flex-1 self-center flex flex-row lg:w-5/12">
      <div class="self-center flex flex-col w-full bg-black bg-opacity-70">
        <div class="flex flex-row justify-evenly mt-5 p-2">
          <label for="email" class="text-4xl">Email:</label>
          <input
            type="email"
            required
            class="text-black p-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:shadow-lg focus:shadow-sky-600 rounded-md focus:ring-1"
          />
        </div>
        <div class="flex flex-row justify-evenly">
          <label class="text-4xl mt-5" for="message">Send Message:</label>
          <textarea
            name="message"
            required
            id="message"
            rows="7"
            placeholder="Write here"
            class="w-6/12 m-5 text-black p-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:shadow-lg focus:shadow-sky-600 rounded-md focus:ring-1"
          ></textarea>
        </div>
        <button
          class="border-slate-500 bg-cyan-600 p-2 mb-3 rounded-xl text-xl w-fit self-center"
        >
          Submit
        </button>
        <GoogleRecaptcha />
      </div>
    </div>
  </main>
</template>
