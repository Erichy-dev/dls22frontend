import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import SignInView from "../../../views/SignInView.vue";

describe("test app", () => {
  test("app is truthy?", () => {
    const app = mount(SignInView);
    expect(app).toBeTruthy();
  });
});
