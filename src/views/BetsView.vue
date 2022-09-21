<script lang="ts" setup>
import GamesNavigator from "../components/GamesNavigator.vue";
import { UserStore } from "@/stores/UserAccount";
import { computed, ref, type Ref } from "vue";
import axios from "axios";

const showBets = computed(() => UserStore().signedIn);

interface BetsSchema {
  pk: string;
  fields: {
    amount: number;
  };
}
const leagueBets: Ref<BetsSchema[] | null> = ref(null);
axios({
  method: "get",
  url: "leagueBets/",
}).then((res) => {
  leagueBets.value = res.data;
});
const cupBets: Ref<BetsSchema[] | null> = ref(null);
axios({
  method: "get",
  url: "cupBets/",
}).then((res) => {
  cupBets.value = res.data;
});
</script>

<template>
  <main class="flex flex-col">
    <div class="flex-1 flex flex-row self-center" v-if="!showBets">
      <div class="flex-1 w-10/12 flex flex-col self-center">
        <div
          class="self-center bg-white text-black bg-opacity-70 text-xl rounded-xl p-4 mb-4 shadow-black shadow-xl font-bold"
        >
          KINDLY SIGN IN FIRST TO JOIN BETS
        </div>
        <router-link to="/signUp" class="self-center">
          <button
            class="border-slate-500 bg-cyan-600 p-2 mb-3 rounded-xl text-xl w-fit"
          >
            CREATE ACCOUNT
          </button>
        </router-link>
      </div>
    </div>
    <div class="flex-1 flex flex-col" v-if="showBets">
      <div class="flex-1 flex flex-col">
        <div
          class="flex-1 w-10/12 self-center mt-5 flex flex-col lg:flex-row justify-between"
        >
          <div class="w-full flex flex-col">
            <button
              class="self-center bg-black bg-opacity-70 m-2 p-5 px-9 border text-2xl border-zinc-400"
            >
              DOG_C LEAGUE
            </button>
            <table class="bg-black bg-opacity-70 w-10/12 self-center">
              <thead>
                <tr>
                  <th class="p-1 border border-zinc-400">TEAM</th>
                  <th class="p-1 border border-zinc-400">AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="bet in leagueBets" :key="bet.pk">
                  <td class="p-1 border">{{ bet.pk }}</td>
                  <td class="p-1 border">{{ bet.fields.amount }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="w-full flex flex-col">
            <button
              class="self-center bg-black bg-opacity-70 m-2 p-5 px-9 border text-2xl border-zinc-400"
            >
              DOG_C CUP
            </button>
            <table class="bg-black bg-opacity-70 w-10/12 self-center">
              <thead>
                <tr>
                  <th class="p-1 border border-zinc-400">TEAM</th>
                  <th class="p-1 border border-zinc-400">AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="bet in cupBets" :key="bet.pk">
                  <td class="p-1 border">{{ bet.pk }}</td>
                  <td class="p-1 border">{{ bet.fields.amount }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <GamesNavigator />
    </div>
  </main>
</template>
