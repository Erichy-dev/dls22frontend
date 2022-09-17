import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import GodcLeague from "../../../../views/Games/GodcLeague.vue";

describe("test app", () => {
  test("app is truthy?", () => {
    const app = mount(GodcLeague);
    expect(app).toBeTruthy();
  });
});
