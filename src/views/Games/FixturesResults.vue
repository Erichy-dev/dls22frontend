<script lang="ts" setup>
import GamesNavigator from "../../components/GamesNavigator.vue";
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
  url: "/fixturesA/",
}).then((res) => {
  fixturesA.value = res.data;
});
axios({
  method: "get",
  url: "/fixturesB/",
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
    <div class="flex-1 flex flex-col">
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
    </div>
    <router-link to="/godcLeague" class="self-center">
      <button class="p-1 md:p-4 bg-white text-black rounded-lg bg-opacity-70">
        DOG_C LEAGUE
      </button>
    </router-link>
    <GamesNavigator />
  </main>
</template>
