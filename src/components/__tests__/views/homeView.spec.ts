import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import HomeView from "../../../views/HomeView.vue";

describe("test app", () => {
  test("app is truthy?", () => {
    const app = mount(HomeView);
    expect(app).toBeTruthy();
  });
});
