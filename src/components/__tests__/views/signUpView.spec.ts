import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import SignUpView from "../../../views/SignUpView.vue";

describe("test app", () => {
  test("app is truthy?", () => {
    const app = mount(SignUpView);
    expect(app).toBeTruthy();
  });
});
