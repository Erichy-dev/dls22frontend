<script lang="ts" setup>
import { UserStore } from "@/stores/UserAccount";
import axios from "axios";
import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";

const navigate = useRouter();
const form: Ref<HTMLFormElement | null> = ref(null);
function updateProfile() {
  const fmData = new FormData(form.value as HTMLFormElement);
  const teamName = UserStore().teamName;
  fmData.append("teamName", teamName);
  axios({
    method: "post",
    url: "updateProfile/",
    data: fmData,
  }).then(() => {
    navigate.push("/games");
  });
}
</script>

<template>
  <main class="flex flex-col">
    <div class="flex-1 self-center flex flex-row lg:w-4/12">
      <form
        ref="form"
        @submit.prevent="updateProfile"
        class="bg-black bg-opacity-70 self-center flex flex-col p-4 space-y-2 w-full"
      >
        <h2 class="self-center text-3xl">UPDATE ACCOUNT</h2>
        <div class="flex flex-row justify-between">
          <label for="firstName" class="flex-1">FIRST NAME</label>
          <input
            class="text-black p-1"
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>
        <div class="flex flex-row justify-between">
          <label for="lastName" class="flex-1">LAST NAME</label>
          <input
            class="text-black p-1"
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>
        <div class="flex flex-row justify-between">
          <label for="city" class="flex-1">CITY</label>
          <input class="text-black p-1" type="text" id="city" name="city" />
        </div>
        <div class="flex flex-row justify-between">
          <label for="password" class="flex-1">PASSWORD</label>
          <input
            class="text-black p-1"
            type="password"
            id="password"
            name="password"
            required
          />
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
