<script lang="ts" setup>
import { UserStore } from "@/stores/UserAccount";
import { computed, ref, onMounted } from "vue";
import { MenuIcon } from "@heroicons/vue/solid";
import { setCookie } from "@/composables/cookies";

const signedIn = computed(() => UserStore().signedIn);
const teamName = computed(() => UserStore().teamName);

const toggleNavIf = ref(false);
const guide = ref<HTMLElement | null>(null);
const checkGuide = ref<boolean>(true);
const guideClass = ["w-full", "bg-black", "flex"];
function toggleGuide() {
  if (checkGuide.value) {
    guide.value?.classList.add(...guideClass);
    toggleNavIf.value = true;
    checkGuide.value = false;
  } else {
    toggleNavIf.value = false;
    setTimeout(() => {
      guide.value?.classList.remove(...guideClass);
    });
    checkGuide.value = true;
  }
}
onMounted(() => {
  window.addEventListener("click", outsideToggle);
});
function outsideToggle(e: Event) {
  const toggleGuide = document.getElementsByClassName("toggleGuide")[0];
  const pathElem = document.getElementsByTagName("path")[0];
  if (!checkGuide.value) {
    const guide = document.getElementById("guide");
    if (
      !guide?.contains(e.target as HTMLElement) &&
      e.target != toggleGuide &&
      e.target != pathElem
    ) {
      toggleNavIf.value = false;
      setTimeout(() => {
        (guide as HTMLElement).classList.remove(...guideClass);
      });
      checkGuide.value = true;
    }
  }
}
if (window.outerWidth >= 768) {
  toggleNavIf.value = true;
}

function signOut() {
  UserStore().teamName = "";
  UserStore().signedIn = false;
  setCookie("nt", teamName.value, 0.5, true);
}
</script>

<template>
  <main
    class="flex flex-row justify-between text-lg min-w-full z-20 font-extrabold"
  >
    <h1 class="text-4xl md:text-6xl italic m-2 p-1">DOG_C</h1>
    <MenuIcon
      @click="toggleGuide"
      class="flex md:hidden w-1/12 border p-0 m-3 z-30 text-white toggleGuide hover:text-red-600"
    />
    <transition name="toast">
      <section
        v-show="toggleNavIf"
        class="md:flex md:flex-row md:space-x-4 lg:space-x-6 absolute md:relative flex-col top-3/4 md:top-0 p-4 bg-opacity-70 z-40 md:z-0"
        ref="guide"
        id="guide"
      >
        <router-link to="/">
          <button
            class="p-1 rounded-md hover:underline decoration-2 decoration-red-600 font-extrabold"
          >
            HOME
          </button>
        </router-link>
        <router-link to="/games">
          <button
            class="p-1 rounded-md hover:underline decoration-2 decoration-red-600 font-extrabold"
          >
            GAMES
          </button>
        </router-link>
        <router-link to="/bets">
          <button
            class="p-1 rounded-md hover:underline decoration-2 decoration-red-600 font-extrabold"
          >
            BETS
          </button>
        </router-link>
        <!-- <router-link to="/about">
          <button
            class="p-1 rounded-md hover:underline decoration-2 decoration-red-600 font-extrabold"
          >
            ABOUT
          </button>
        </router-link> -->
        <!-- <router-link to="/chat">
          <button
            class="p-1 rounded-md hover:underline decoration-2 decoration-red-600 font-extrabold"
          >
            CHAT
          </button>
        </router-link> -->
        <router-link to="/signIn" v-if="!signedIn">
          <button
            class="p-1 rounded-md hover:underline decoration-2 decoration-red-600 font-extrabold"
          >
            SIGN IN
          </button>
        </router-link>
        <router-link to="/profile" v-if="signedIn">
          <button
            class="p-1 hover:underline decoration-2 decoration-red-600 font-extrabold rounded-full text-yellow-300"
          >
            {{ teamName }}
          </button>
        </router-link>
        <router-link to="/signOut" @click="signOut">
          <button
            class="p-1 hover:underline decoration-2 decoration-red-600 font-extrabold rounded-full"
          >
            SIGN OUT
          </button>
        </router-link>
        <router-link to="/support">
          <button
            class="p-1 rounded-md hover:underline decoration-2 decoration-red-600 font-extrabold"
          >
            HELP
          </button>
        </router-link>
      </section>
    </transition>
  </main>
</template>
