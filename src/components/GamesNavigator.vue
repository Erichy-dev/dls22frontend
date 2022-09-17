<script lang="ts" setup></script>

<template>
  <main class="flex-1 flex flex-row self-center w-9/12">
    <div
      class="self-center flex flex-row justify-between w-full text-xl text-black"
    >
      <router-link to="/games">
        <button class="p-4 m-1 bg-white rounded-lg bg-opacity-70">GAMES</button>
      </router-link>
      <router-link to="/fixturesResults">
        <button class="p-4 m-1 bg-white rounded-lg bg-opacity-70">
          FIXTURES/RESULTS
        </button>
      </router-link>
      <router-link to="/topScores">
        <button class="p-4 m-1 bg-white rounded-lg bg-opacity-70">
          TOP SCORES
        </button>
      </router-link>
    </div>
  </main>
</template>
