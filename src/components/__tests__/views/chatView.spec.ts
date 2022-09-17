import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import ChatView from "../../../views/ChatView.vue";

describe("test app", () => {
  test("app is truthy?", () => {
    const app = mount(ChatView);
    expect(app).toBeTruthy();
  });
});
