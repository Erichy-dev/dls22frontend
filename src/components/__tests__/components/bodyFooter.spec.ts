import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import BodyFooter from "../../BodyFooter.vue";

describe("footer", () => {
  test("footer is truthy", () => {
    const footer = mount(BodyFooter);
    expect(footer).toBeTruthy();
  });
});
