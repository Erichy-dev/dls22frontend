import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import GameView from "../../../views/GameView.vue";

describe("test app", () => {
  test("app is truthy?", () => {
    const app = mount(GameView);
    expect(app).toBeTruthy();
  });
});
