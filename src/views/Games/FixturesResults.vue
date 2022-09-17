<script lang="ts" setup>
import GamesNavigator from "../../components/GamesNavigator.vue";
</script>

<template>
  <main class="flex flex-col">
    <div class="flex-1 flex flex-col">
      <div class="w-10/12 self-center mt-5 flex flex-row justify-between">
        <table class="bg-black bg-opacity-70 w-5/12">
          <thead>
            <tr>
              <th class="p-1">GAME 0 OF 15</th>
            </tr>
          </thead>
          <!-- <tbody>
              <tr>
                <th class=" p-1"></th>
              </tr>
            </tbody> -->
        </table>
        <table class="bg-black bg-opacity-70 w-5/12">
          <thead>
            <tr>
              <th class="p-1">GAME 1 OF 15</th>
            </tr>
          </thead>
          <!-- <tbody>
              <tr>
                <th class=" p-1"></th>
              </tr>
            </tbody> -->
        </table>
      </div>
    </div>
    <GamesNavigator />
  </main>
</template>
