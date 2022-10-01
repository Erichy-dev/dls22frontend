<script lang="ts" setup>
import axios from "axios";
import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";
import { UserStore } from "../stores/UserAccount";
import { useReCaptcha } from "vue-recaptcha-v3";
import GoogleRecaptcha from "../components/GoogleRecaptcha.vue";

const form: Ref<HTMLFormElement | null> = ref(null);
const navigate = useRouter();
const teamName = ref("");
const password = ref("");
const invalid = ref(false);

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

async function signIn() {
  await recaptchaLoaded();
  const token = await executeRecaptcha("submit");
  axios({
    method: "post",
    url: "signIn/",
    data: new FormData(form.value as HTMLFormElement),
  })
    .then((res) => {
      if (res.data === "valid") {
        UserStore().teamName = teamName.value;
        UserStore().signedIn = true;
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

// ADD CSS PROPS TO FORMS FIELD WHEN USER CLICKS ON THE INPUTS
</script>

<template>
  <main class="flex flex-col">
    <div class="flex-1 self-center flex flex-row md:w-6/12 lg:w-4/12">
      <form
        ref="form"
        action=""
        @submit.prevent="signIn"
        class="bg-black bg-opacity-70 self-center flex flex-col p-4 space-y-2"
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
            placeholder="your team name"
            class="text-black p-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:shadow-lg focus:shadow-sky-600 rounded-md focus:ring-1"
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
            placeholder="password"
            class="text-black p-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:shadow-lg focus:shadow-sky-600 rounded-md focus:ring-1"
            v-model="password"
          />
        </div>
        <div class="self-center flex flex-col space-y-3">
          <input
            type="submit"
            value="Submit"
            class="border-slate-500 bg-cyan-600 p-2 rounded-xl md:text-xl w-fit"
          />
          <!-- <span @click="forgotPassword" class="hover:text-red-300 w-fit"
            >forgot password?</span
          > -->
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
        <google-recaptcha />
      </form>
    </div>
  </main>
</template>
