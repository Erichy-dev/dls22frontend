const gameRouters = [
  {
    path: "/fixturesResults",
    name: "fixturesResults",
    component: () => import("@/views/Games/FixturesResults.vue"),
  },
  {
    path: "/godcLeague",
    name: "godcLeague",
    component: () => import("@/views/Games/GodcLeague.vue"),
  },
  {
    path: "/topScores",
    name: "topScores",
    component: () => import("@/views/Games/TopScores.vue"),
  },
];

export default gameRouters;
