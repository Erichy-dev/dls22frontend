<script lang="ts" setup>
import { ref, watch, type Ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { UserStore } from "@/stores/UserAccount";
import { setCookie } from "@/composables/cookies";

// cookie

const form: Ref<HTMLFormElement | null> = ref(null);

const navigate = useRouter();
const teamName = ref("");
const password1 = ref("");
const password2 = ref("");
const invalidInput = ref("");
const invalid = ref(false);
const passDontMatch = ref(false);

watch(password2, () => {
  if (password1.value !== password2.value) {
    passDontMatch.value = true;
  } else {
    passDontMatch.value = false;
  }
});

async function createProfile() {
  if (!passDontMatch.value) {
    axios({
      method: "post",
      url: "createUser/",
      data: new FormData(form.value as HTMLFormElement),
    }).then((res) => {
      if (res.data === "valid") {
        UserStore().teamName = teamName.value;
        UserStore().signedIn = true;
        setCookie("nt", teamName.value, 1);
        navigate.push("/games");
      } else {
        invalidInput.value = Object.keys(res.data).join(",");
        invalid.value = true;
        setTimeout(() => {
          invalid.value = false;
        }, 5000);
      }
    });
  }
}
</script>

<template>
  <main class="flex flex-col">
    <div class="flex-1 self-center flex flex-row lg:w-4/12">
      <form
        ref="form"
        action=""
        @submit.prevent="createProfile"
        class="bg-black bg-opacity-70 self-center flex flex-col p-4 space-y-1 w-full"
      >
        <h2 class="self-center md:text-3xl">CREATE ACCOUNT</h2>
        <!-- <div class="w-6/12 self-center">
          <img
            src="/DLS.jpg"
            alt="profile pic"
            class="rounded-full border-white"
          />
        </div>
        <div class="flex flex-row justify-between">
          <label for="profile" class="mr-2">PROFILE</label>
          <input type="file" id="profile" />
        </div> -->
        <div class="flex flex-row justify-between">
          <label for="teamName" class="flex-1 text-sm md:text-lg"
            >TEAM NAME</label
          >
          <input
            class="text-black p-1"
            type="text"
            v-model="teamName"
            required
            placeholder="your dls22 team name"
            id="teamName"
            name="teamName"
          />
        </div>
        <div class="flex flex-row justify-between">
          <label for="firstName" class="flex-1 text-sm md:text-lg"
            >FIRST NAME</label
          >
          <input
            class="text-black p-1"
            type="text"
            required
            placeholder="registered first name"
            id="firstName"
            name="firstName"
          />
        </div>
        <div class="flex flex-row justify-between">
          <label for="lastName" class="flex-1 text-sm md:text-lg"
            >LAST NAME</label
          >
          <input
            class="text-black p-1"
            type="text"
            required
            placeholder="registered last name"
            id="lastName"
            name="lastName"
          />
        </div>
        <div class="flex flex-row justify-between">
          <label for="email" class="flex-1 text-sm md:text-lg">EMAIL</label>
          <input
            class="text-black p-1"
            type="email"
            required
            placeholder="registered email"
            id="email"
            name="email"
          />
        </div>
        <div class="flex flex-row justify-between">
          <label for="city" class="flex-1 text-sm md:text-lg">CITY</label>
          <input
            class="text-black p-1"
            type="text"
            required
            placeholder="current location"
            id="city"
            name="city"
          />
        </div>
        <div class="flex flex-row justify-between">
          <label for="phoneNumber" class="flex-1 text-sm md:text-lg"
            >PHONE NUMBER</label
          >
          <input
            class="text-black p-1"
            type="tel"
            required
            placeholder="registered phone number"
            id="phoneNumber"
            name="phoneNumber"
          />
        </div>
        <div class="flex flex-row justify-between">
          <label for="password1" class="flex-1 text-sm md:text-lg"
            >Password</label
          >
          <input
            class="text-black p-1"
            type="password"
            v-model="password1"
            required
            placeholder="a strong password"
            id="password1"
            name="password1"
          />
        </div>
        <div class="flex flex-row justify-between">
          <label for="password2" class="flex-1 text-sm md:text-lg"
            >Password</label
          >
          <input
            class="text-black p-1"
            type="password"
            v-model="password2"
            required
            placeholder="repeat password"
            id="password2"
            name="password2"
          />
        </div>
        <p v-if="passDontMatch" class="text-red-600 self-center">
          Passwords do not match
        </p>
        <transition name="toast">
          <p v-if="invalid" class="text-red-600 self-center text-sm">
            These fields already exist::: {{ invalidInput }}
          </p>
        </transition>
        <div class="self-center flex flex-col space-y-3">
          <button
            class="border-slate-500 bg-cyan-600 p-2 rounded-xl md:text-xl w-fit"
            type="submit"
          >
            Submit
          </button>
          <router-link to="/signIn">
            <button
              class="border-slate-500 bg-cyan-600 p-2 mb-3 rounded-xl md:text-xl w-fit self-center"
            >
              SIGN IN
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </main>
</template>
