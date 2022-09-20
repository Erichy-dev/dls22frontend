<script lang="ts" setup>
import axios from "axios";
import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";
import { UserStore } from "../stores/UserAccount";
import { setCookie } from "@/composables/cookies";

const form: Ref<HTMLFormElement | null> = ref(null);
const navigate = useRouter();
const teamName = ref("");
const password = ref("");
const invalid = ref(false);
function signIn() {
  axios({
    method: "post",
    url: "signIn/",
    data: new FormData(form.value as HTMLFormElement),
  })
    .then((res) => {
      if (res.data === "valid") {
        UserStore().teamName = teamName.value;
        UserStore().signedIn = true;
        setCookie("nt", teamName.value, 0.25);
        navigate.push("/loggedIn");
      } else {
        invalid.value = true;
        setTimeout(() => {
          invalid.value = false;
        }, 2000);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function forgotPassword() {
  //
}
</script>

<template>
  <main class="flex flex-col">
    <div class="flex-1 self-center flex flex-row lg:w-4/12">
      <form
        ref="form"
        action=""
        @submit.prevent="signIn"
        class="bg-black bg-opacity-70 self-center flex flex-col p-4 space-y-2 w-full"
      >
        <h2 class="self-center text-3xl">SIGN IN</h2>
        <div class="flex flex-row justify-between">
          <label for="teamName" class="flex-1 text-sm md:text-lg"
            >Team Name</label
          >
          <input
            type="text"
            required
            name="teamName"
            class="text-black p-1"
            v-model="teamName"
          />
        </div>
        <div class="flex flex-row justify-between">
          <label for="password" class="flex-1 text-sm md:text-lg"
            >Password</label
          >
          <input
            type="password"
            required
            name="password"
            class="text-black p-1"
            v-model="password"
          />
        </div>
        <div class="self-center flex flex-col space-y-3">
          <input
            type="submit"
            value="Submit"
            class="border-slate-500 bg-cyan-600 p-2 rounded-xl md:text-xl w-fit"
          />
          <span @click="forgotPassword" class="hover:text-red-300 w-fit"
            >forgot password?</span
          >
          <router-link to="/signUp">
            <button
              class="border-slate-500 bg-cyan-600 p-2 mb-3 rounded-xl md:text-xl w-fit self-center"
            >
              CREATE ACCOUNT
            </button>
          </router-link>
          <transition name="toast">
            <button
              v-if="invalid"
              class="border-slate-500 bg-red-600 p-1 mb-1 rounded-xl w-fit self-center"
            >
              INVALID NAME OR PASSWORD
            </button>
          </transition>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
.toast-move,
.toast-enter-active,
.toast-leave-active {
  transition: all 1s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
