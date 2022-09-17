import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import FixturesResults from "../../../../views/Games/FixturesResults.vue";

describe("test app", () => {
  test("app is truthy?", () => {
    const app = mount(FixturesResults);
    expect(app).toBeTruthy();
  });
});
