<script lang="ts" setup></script>

<template>
  <main class="flex flex-col">
    <div class="flex-1 flex flex-col"></div>
    <div class="flex-1 flex flex-row self-center w-9/12">
      <div class="self-center flex flex-col w-full text-xl text-black">
        <router-link to="/games" class="self-center">
          <button class="p-4 m-1 bg-white rounded-lg bg-opacity-70">
            GAMES
          </button>
        </router-link>
      </div>
    </div>
  </main>
</template>
