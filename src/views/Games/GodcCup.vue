<script lang="ts" setup>
import axios from "axios";
import { watchEffect, ref, type Ref } from "vue";

interface FixtureSchema {
  pk: string;
  fields: {
    teamAScore: number;
    teamBScore: number;
  };
}
const fixturesA: Ref<FixtureSchema[] | null> = ref(null);
const fixturesB: Ref<FixtureSchema[] | null> = ref(null);
axios({
  method: "get",
  url: "/cupFixturesA/",
}).then((res) => {
  fixturesA.value = res.data;
});
axios({
  method: "get",
  url: "/cupFixturesB/",
}).then((res) => {
  fixturesB.value = res.data;
});

interface TableSchema {
  teamNames: string;
  scores: string;
}
const fixtureTable: Ref<TableSchema[]> = ref([]);
watchEffect(() => {
  if (fixturesA.value && fixturesB.value) {
    for (let i = 0; i < fixturesA.value.length; i++) {
      const fixA = fixturesA.value[i];
      const fixB = fixturesB.value[i];
      const teamNames = fixA.pk + " V " + fixB.pk;
      const scores = fixA.fields.teamAScore + " - " + fixB.fields.teamBScore;
      (fixtureTable.value as TableSchema[]).push({
        teamNames: teamNames,
        scores: scores,
      });
    }
  }
});
</script>

<template>
  <main class="flex flex-col">
    <table class="bg-black bg-opacity-70 self-center">
      <thead>
        <tr>
          <th class="p-1">GAME 0 OF 15</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fixture in fixtureTable" :key="fixture.teamNames">
          <td class="p-1">{{ fixture.teamNames }}</td>
          <td class="p-1">{{ fixture.scores }}</td>
        </tr>
      </tbody>
    </table>
    <div class="flex-1 flex flex-row self-center w-9/12">
      <div class="self-center flex flex-col w-full text-xl text-black">
        <router-link to="/games" class="self-center">
          <button class="p-4 m-1 bg-white rounded-lg bg-opacity-70">
            GAMES
          </button>
        </router-link>
      </div>
    </div>
  </main>
</template>
