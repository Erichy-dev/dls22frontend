import { defineStore } from "pinia";

const UserStore = defineStore({
  id: "User",
  state: () => ({
    teamName: "",
    signedIn: false,
    registerLeagueCompetition: true,
  }),
});

export { UserStore };
