<script lang="ts" setup>
import { ref, type Ref } from "vue";
import axios from "axios";
import GamesNavigator from "../../components/GamesNavigator.vue";

interface ChartSchema {
  pk: number;
  fields: {
    position: string;
    played: number;
    won: number;
    draw: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
    goalsDifference: number;
    points: number;
  };
}
const chart: Ref<ChartSchema[] | null> = ref(null);
axios({
  method: "get",
  url: "leagueGames/",
}).then((res) => {
  chart.value = res.data;
});
</script>

<template>
  <main class="flex flex-col">
    <div class="flex-1 flex flex-col">
      <table class="bg-black bg-opacity-70 w-10/12 self-center mt-5">
        <thead class="font-extrabold">
          <tr>
            <th class="border p-1">POS</th>
            <th class="border p-1">TEAM</th>
            <th class="border p-1">P</th>
            <th class="border p-1">W</th>
            <th class="border p-1">D</th>
            <th class="border p-1">L</th>
            <th class="border p-1">GF</th>
            <th class="border p-1">GA</th>
            <th class="border p-1">GD</th>
            <th class="border p-1">PTS</th>
          </tr>
        </thead>
        <tbody v-if="chart">
          <tr v-for="item in chart" :key="item.pk">
            <th class="border p-1">{{ item.fields.position }}</th>
            <th class="border p-1">{{ item.pk }}</th>
            <th class="border p-1">{{ item.fields.played }}</th>
            <th class="border p-1">{{ item.fields.won }}</th>
            <th class="border p-1">{{ item.fields.draw }}</th>
            <th class="border p-1">{{ item.fields.lost }}</th>
            <th class="border p-1">{{ item.fields.goalsFor }}</th>
            <th class="border p-1">{{ item.fields.goalsAgainst }}</th>
            <th class="border p-1">{{ item.fields.goalsDifference }}</th>
            <th class="border p-1">{{ item.fields.points }}</th>
          </tr>
        </tbody>
      </table>
    </div>
    <GamesNavigator />
  </main>
</template>
