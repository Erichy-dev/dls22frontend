<script lang="ts" setup>
import { ref, type Ref } from "vue";
import GamesNavigator from "../../components/GamesNavigator.vue";
import axios from "axios";

interface TopScorersSchema {
  pk: string;
  fields: {
    goals: number;
  };
}
const topScorers: Ref<TopScorersSchema[] | null> = ref(null);
axios({
  method: "get",
  url: "topScores/",
}).then((res) => {
  topScorers.value = res.data;
});
</script>

<template>
  <main class="flex flex-col">
    <div class="flex-1 flex flex-col">
      <table class="bg-black bg-opacity-70 w-10/12 self-center mt-5">
        <thead>
          <tr>
            <th class="border p-1">TEAM</th>
            <th class="border p-1">GOALS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="top in topScorers" :key="top.pk">
            <th class="border p-1">{{ top.pk }}</th>
            <th class="border p-1">{{ top.fields.goals }}</th>
          </tr>
        </tbody>
      </table>
    </div>
    <GamesNavigator />
  </main>
</template>
