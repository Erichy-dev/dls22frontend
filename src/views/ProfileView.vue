<script lang="ts" setup>
import { UserStore } from "@/stores/UserAccount";
import axios from "axios";
import { onMounted, computed, ref, type Ref } from "vue";
import { useRouter } from "vue-router";

const navigate = useRouter();
const form: Ref<HTMLFormElement | null> = ref(null);
const teamName = computed(() => UserStore().teamName);
interface User {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
}
const userDetails: Ref<User | null> = ref(null);

onMounted(() => {
  const fmData = new FormData();
  fmData.append("teamName", teamName.value);
  axios({
    method: "post",
    url: "userDetails/",
    data: fmData,
  }).then((res) => {
    userDetails.value = res.data;
  });
});
function updateProfile() {
  const fmData = new FormData(form.value as HTMLFormElement);
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
    <div
      class="flex-1 self-center flex flex-col space-y-4 lg:flex-row lg:space-x-32"
    >
      <table class="bg-black bg-opacity-70 self-center mx-4">
        <tbody>
          <tr>
            <td class="p-1 border">First Name</td>
            <td class="p-1 border">{{ userDetails?.firstName }}</td>
          </tr>
          <tr>
            <td class="p-1 border">Last Name</td>
            <td class="p-1 border">{{ userDetails?.lastName }}</td>
          </tr>
          <tr>
            <td class="p-1 border">Email</td>
            <td class="p-1 border">{{ userDetails?.email }}</td>
          </tr>
          <tr>
            <td class="p-1 border">City</td>
            <td class="p-1 border">{{ userDetails?.city }}</td>
          </tr>
        </tbody>
      </table>
      <form
        ref="form"
        @submit.prevent="updateProfile"
        class="bg-black bg-opacity-70 self-center flex flex-col p-4 space-y-2"
      >
        <h2 class="self-center lg:text-3xl">UPDATE ACCOUNT</h2>
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
          class="border-slate-500 bg-cyan-600 p-2 rounded-xl lg:text-xl w-fit self-center"
        >
          Submit
        </button>
      </form>
    </div>
  </main>
</template>
