<script lang="ts" setup>
import { UserStore } from "@/stores/UserAccount";
import { computed } from "vue";

const signedIn = computed(() => UserStore().signedIn);
const teamName = computed(() => UserStore().teamName);
</script>

<template>
  <main
    class="absolute self-end flex flex-row top-4 space-x-4 lg:space-x-6 mr-5 p-2 text-lg"
  >
    <router-link to="/">
      <button
        class="p-1 rounded-md hover:underline decoration-2 decoration-red-600"
      >
        HOME
      </button>
    </router-link>
    <router-link to="/games">
      <button
        class="p-1 rounded-md hover:underline decoration-2 decoration-red-600"
      >
        GAMES
      </button>
    </router-link>
    <router-link to="/bets">
      <button
        class="p-1 rounded-md hover:underline decoration-2 decoration-red-600"
      >
        BETS
      </button>
    </router-link>
    <!-- <router-link to="/about">
      <button
        class="p-1 rounded-md hover:underline decoration-2 decoration-red-600"
      >
        ABOUT
      </button>
    </router-link> -->
    <!-- <router-link to="/chat">
      <button
        class="p-1 rounded-md hover:underline decoration-2 decoration-red-600"
      >
        CHAT
      </button>
    </router-link> -->
    <router-link to="/support">
      <button
        class="p-1 rounded-md hover:underline decoration-2 decoration-red-600"
      >
        SUPPORT
      </button>
    </router-link>
    <router-link to="/signIn" v-if="!signedIn">
      <button
        class="p-1 rounded-md hover:underline decoration-2 decoration-red-600"
      >
        SIGN IN
      </button>
    </router-link>
    <router-link to="/profile" v-if="signedIn">
      <button
        class="p-1 hover:underline decoration-2 decoration-red-600 rounded-full bg-black bg-opacity-60 text-yellow-300"
      >
        {{ teamName }}
      </button>
    </router-link>
  </main>
</template>
