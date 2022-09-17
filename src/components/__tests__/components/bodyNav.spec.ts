import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import BodyNav from "../../BodyNav.vue";

describe("test app", () => {
  test("app is truthy?", () => {
    const app = mount(BodyNav);
    expect(app).toBeTruthy();
  });
});
