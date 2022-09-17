import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import TopScores from "../../../../views/Games/TopScores.vue";

describe("test app", () => {
  test("app is truthy?", () => {
    const app = mount(TopScores);
    expect(app).toBeTruthy();
  });
});
