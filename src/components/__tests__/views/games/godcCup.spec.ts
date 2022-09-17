import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import GodcCup from "../../../../views/Games/GodcCup.vue";

describe("test app", () => {
  test("app is truthy?", () => {
    const app = mount(GodcCup);
    expect(app).toBeTruthy();
  });
});
