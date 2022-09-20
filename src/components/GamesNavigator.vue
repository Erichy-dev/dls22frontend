<script lang="ts" setup></script>

<template>
  <main class="flex-1 flex flex-row self-center lg:w-9/12 w-full">
    <div
      class="self-center flex flex-row justify-between w-full md:text-xl text-black space-x-3"
    >
      <router-link to="/games">
        <button class="p-1 md:p-4 bg-white rounded-lg bg-opacity-70">
          GAMES
        </button>
      </router-link>
      <router-link to="/topScores">
        <button class="p-1 md:p-4 bg-white rounded-lg bg-opacity-70">
          TOP SCORES
        </button>
      </router-link>
    </div>
  </main>
</template>
