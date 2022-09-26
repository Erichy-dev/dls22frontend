<script lang="ts" setup>
import GamesNavigator from "../../components/GamesNavigator.vue";
import axios from "axios";
import { onMounted, ref, type Ref } from "vue";

interface FixtureSchema {
  fields: {
    teamA: string;
    teamAScore: number;
    teamB: string;
    teamBScore: number;
    roundNumber: number;
  };
}
interface TableSchema {
  teamNames: string;
  scores: string;
  roundNumber: number;
  pk: number;
  code: string;
}
const fixtureTable: Ref<TableSchema[]> = ref([]);
const roundTable: Ref<{ table: TableSchema[]; pk: number }[]> = ref([]);
const leagueFixtures: Ref<FixtureSchema[] | null> = ref(null);
const lastRound = ref(0);
axios({
  method: "get",
  url: "/leagueFixtures/",
}).then((res) => {
  leagueFixtures.value = res.data;
  if (leagueFixtures.value) {
    lastRound.value =
      leagueFixtures.value[leagueFixtures.value.length - 1].fields.roundNumber;
    for (let i = 1; i <= lastRound.value; i++) {
      fixtureTable.value = [];
      for (let j = 0; j < leagueFixtures.value.length; j++) {
        const fixture = leagueFixtures.value[j].fields;
        const teamNames = fixture.teamA + " Vs " + fixture.teamB;
        const scores = fixture.teamAScore + " - " + fixture.teamBScore;
        const roundNumber = fixture.roundNumber;
        const code =
          fixture.teamA.substring(0, 3) + fixture.teamB.substring(0, 3);
        if (roundNumber !== i) continue;
        (fixtureTable.value as TableSchema[]).push({
          teamNames: teamNames,
          scores: scores,
          roundNumber: roundNumber,
          pk: j,
          code: code,
        });
      }
      roundTable.value.push({ table: fixtureTable.value, pk: i });
    }
    fixtureTable.value.sort();
  }
});

onMounted(() => {
  const copyIcon = document.getElementsByTagName("svg")[0];
  copyIcon.addEventListener("click", () => {
    //
  });
});
function copyCode(event: Event) {
  const codeid = (event.currentTarget as HTMLElement).id;
  const node = document.getElementById(`${codeid}code`);

  if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node as HTMLElement);
    (selection as Selection).removeAllRanges();
    (selection as Selection).addRange(range);
    navigator.clipboard.writeText((selection as Selection).toString());

    const copied = document.getElementById(`${codeid}copied`);
    copied?.classList.remove("hidden");
    setTimeout(() => {
      copied?.classList.add("hidden");
    }, 2000);
  } else {
    console.warn("Could not select text in node: Unsupported browser.");
  }
}
</script>

<template>
  <main class="flex flex-col">
    <div class="flex-1 flex flex-col">
      <table
        class="bg-black bg-opacity-70 w-11/12 md:w-6/12 self-center border space-y-5 m-2"
        v-for="fixtureTable in roundTable"
        :key="fixtureTable.pk"
      >
        <thead>
          <tr class="md:text-xl">
            <th class="p-1">GAME {{ fixtureTable.pk }} OF {{ lastRound }}</th>
            <th class="p-1">SCORE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fixture in fixtureTable.table" :key="fixture.pk">
            <td class="p-1 flex flex-col place-items-center">
              {{ fixture.teamNames }}
              <br />
              <div class="w-6/12 flex flex-row self-center text-xs font-bold">
                code:
                <span
                  :id="String(fixture.pk) + 'code'"
                  class="text-red-900 font-black selection:bg-none"
                >
                  {{ fixture.code }}
                </span>
                <div
                  class="ml-1 w-2/12"
                  @click="copyCode"
                  :id="String(fixture.pk)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-9/12 text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z"
                      clip-rule="evenodd"
                    />
                    <path
                      d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z"
                    />
                    <path
                      d="M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z"
                    />
                  </svg>
                </div>
                <span
                  class="text-green-400 hidden"
                  :id="String(fixture.pk) + 'copied'"
                  >Copied</span
                >
              </div>
            </td>
            <td class="p-1 md:pl-10">{{ fixture.scores }}</td>
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
