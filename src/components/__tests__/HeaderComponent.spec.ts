import { describe, it, expect } from "vitest";

import { mount} from "@vue/test-utils";
import HeaderComponent from "../HeaderComponent.vue";

describe("Header", () => {
  it("renders properly", () => {
    const wrapper = mount(HeaderComponent, {props: {isNavigated: false}});
    expect(wrapper.text()).toContain("Home");
    expect(wrapper).toMatchSnapshot();
  });

  it("renders properly when navigated", () => {
    const wrapper = mount(HeaderComponent, {props: {isNavigated: true}});
    expect(wrapper.text()).toContain("Home");
    expect(wrapper.text()).toContain("Back");
  });
});
