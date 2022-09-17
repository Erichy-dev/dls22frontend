<script lang="ts" setup>
import GamesNavigator from "@/components/GamesNavigator.vue";
import { UserStore } from "@/stores/UserAccount";
import axios from "axios";
import { ref, computed, watchEffect } from "vue";

const teamName = computed(() => UserStore().teamName);
const signedIn = computed(() => UserStore().signedIn);
const registerCompetition = computed(() => UserStore().registerCompetition);
const registerLeagueCompetition = computed(
  () => UserStore().registerLeagueCompetition
);
const registerCupCompetition = computed(
  () => UserStore().registerCupCompetition
);

axios({
  method: "get",
  url: "leagueRegistration/",
  params: {
    teamName: teamName.value,
  },
}).then((res) => {
  if (res.data !== "None") UserStore().registerLeagueCompetition = false;
});

function registerToLeague() {
  const fmData = new FormData();
  fmData.append("teamName", teamName.value);
  axios({
    method: "post",
    url: "leagueRegistration/",
    data: fmData,
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch();
}
function registerToCup() {
  //
}
</script>

<template>
  <main class="flex flex-col">
    <div class="flex-1 self-center flex flex-row w-full">
      <div class="flex flex-col self-center w-full">
        <div
          class="self-center w-5/12 bg-black bg-opacity-70 text-xl rounded-xl p-4 mb-4 shadow-black shadow-xl"
        >
          Welcome {{ teamName }}. Select the competition you'd like to view.
        </div>
        <div class="flex flex-row text-3xl self-center justify-between w-9/12">
          <div class="flex flex-col">
            <router-link to="/godcLeague">
              <button class="p-4 m-1 bg-black rounded-lg bg-opacity-70">
                DOG_C LEAGUE
              </button>
            </router-link>
            <button
              class="border-slate-500 bg-cyan-600 p-2 rounded-xl text-xl w-fit self-center"
              v-if="registerLeagueCompetition && signedIn"
              @click="registerToLeague"
            >
              REGISTER
            </button>
          </div>
          <div class="flex flex-col">
            <router-link to="/godcCup">
              <button class="p-4 m-1 bg-black rounded-lg bg-opacity-70">
                DOG_C CUP
              </button>
            </router-link>
            <button
              class="border-slate-500 bg-cyan-600 p-2 rounded-xl text-xl w-fit self-center"
              v-if="registerCupCompetition && signedIn"
              @click="registerToCup"
            >
              REGISTER
            </button>
          </div>
        </div>
        <button
          class="border-slate-500 bg-cyan-700 bg-opacity-70 p-2 rounded-xl text-xl w-fit self-center m-4"
          v-if="registerCompetition && signedIn"
        >
          REGISTER BOTH
        </button>
      </div>
    </div>
    <GamesNavigator />
  </main>
</template>
