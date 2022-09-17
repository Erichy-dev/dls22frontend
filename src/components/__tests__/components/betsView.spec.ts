import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import BetsView from "../../../views/BetsView.vue";

describe("test app", () => {
  test("app is truthy?", () => {
    const app = mount(BetsView);
    expect(app).toBeTruthy();
  });
});
