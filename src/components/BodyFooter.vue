<script lang="ts" setup>
import axios from "axios";
import { ref, type Ref } from "vue";

interface liveResultSchema {
  pk: string;
  fields: {
    teamB: string;
    teamAScore: number;
    teamBScore: number;
  };
}
const liveResults: Ref<liveResultSchema | null> = ref(null);
const winner = ref(true);
axios({
  method: "get",
  url: "liveResults/",
}).then((res) => {
  liveResults.value = res.data[0];
  if (liveResults.value) {
    if (
      liveResults.value?.fields.teamAScore <
      liveResults.value?.fields.teamBScore
    ) {
      winner.value = false;
    }
  }
});
</script>

<template>
  <main class="bg-red-600">
    <div
      class="flex flex-col place-items-center space-y-2 lg:ml-20 px-2 md:text-xl py-7 text-black"
    >
      <div class="w-full p-2 text-sm md:text-xl flex flex-row lg:w-10/12">
        <span class="font-semibold text-orange-500 mr-1">LIVE RESULTS:</span>
        <div class="flex-1 overflow-hidden" v-if="liveResults">
          <p
            id="live"
            class="whitespace-nowrap text-orange-500 font-black font-mono"
            v-if="winner"
          >
            {{ liveResults.pk }} beats {{ liveResults.fields.teamB }}
            {{ liveResults.fields.teamAScore }}-{{
              liveResults.fields.teamBScore
            }}
          </p>
          <p
            id="live"
            class="whitespace-nowrap text-cyan-900 font-black font-mono"
            v-else
          >
            {{ liveResults.fields.teamB }} beats {{ liveResults.pk }}
            {{ liveResults.fields.teamBScore }}-{{
              liveResults.fields.teamAScore
            }}
          </p>
        </div>
      </div>
      <router-link to="/termsAndConditions" class="flex-1"
        ><span class="hover:text-white font-semibold"
          >Terms and Conditions</span
        ></router-link
      >
      <span class="font-semibold text-slate-700 font-mono"
        >@copywright DOG_C @2022</span
      >
    </div>
  </main>
</template>

<style>
@keyframes liveResults {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-180%);
  }
}
@keyframes liveResultsB {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-60%);
  }
}
#live {
  animation-name: liveResults;
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@media (min-width: 768px) {
  #live {
    animation-name: liveResultsB;
  }
}
</style>
