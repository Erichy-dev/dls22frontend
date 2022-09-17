import SupportViewVue from "@/views/SupportView.vue";
import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";

describe("test app", () => {
  test("app is truthy?", () => {
    const app = mount(SupportViewVue);
    expect(app).toBeTruthy();
  });
});
