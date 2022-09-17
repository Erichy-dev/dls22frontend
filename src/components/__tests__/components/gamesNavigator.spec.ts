import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import GamesNavigator from "../../GamesNavigator.vue";

describe("test app", () => {
  test("app is truthy?", () => {
    const app = mount(GamesNavigator);
    expect(app).toBeTruthy();
  });
});
