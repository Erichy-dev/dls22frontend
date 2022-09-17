import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import ProfileView from "../../../views/ProfileView.vue";

describe("test app", () => {
  test("app is truthy?", () => {
    const app = mount(ProfileView);
    expect(app).toBeTruthy();
  });
});
