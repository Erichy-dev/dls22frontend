import { defineStore } from "pinia";

const UserStore = defineStore({
  id: "User",
  state: () => ({
    teamName: "",
    signedIn: false,
    registerCompetition: true,
    registerLeagueCompetition: true,
    registerCupCompetition: true,
  }),
});

export { UserStore };
