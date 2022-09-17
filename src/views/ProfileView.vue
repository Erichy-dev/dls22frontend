<script lang="ts" setup>
function updateProfile() {
  //
}
</script>

<template>
  <main class="flex flex-col">
    <div class="flex-1 self-center flex flex-row w-4/12">
      <form
        action=""
        @submit.prevent="updateProfile"
        class="bg-black bg-opacity-70 self-center flex flex-col p-4 space-y-2 w-full"
      >
        <h2 class="self-center text-3xl">UPDATE ACCOUNT</h2>
        <div class="w-6/12 self-center">
          <img
            src="/DLS.jpg"
            alt="profile pic"
            class="rounded-full border-white"
          />
        </div>
        <div class="flex flex-row justify-between">
          <label for="profile" class="mr-2">PROFILE</label>
          <input type="file" id="profile" />
        </div>
        <div class="flex flex-row justify-between">
          <label for="firstName" class="flex-1">FIRST NAME</label>
          <input type="text" id="firstName" />
        </div>
        <div class="flex flex-row justify-between">
          <label for="username" class="flex-1">SECOND NAME</label>
          <input type="text" id="secondName" />
        </div>
        <div class="flex flex-row justify-between">
          <label for="city" class="flex-1">CITY</label>
          <input type="text" id="city" />
        </div>
        <button
          class="border-slate-500 bg-cyan-600 p-2 rounded-xl text-xl w-fit self-center"
        >
          Submit
        </button>
      </form>
    </div>
  </main>
</template>
