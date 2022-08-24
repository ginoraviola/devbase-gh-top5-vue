import { describe, it, expect } from "vitest";

import { mount} from "@vue/test-utils";
import ButtonComponent from "../ButtonComponent.vue";

describe("Button", () => {
  it("renders properly", () => {
    const wrapper = mount(ButtonComponent, { props: { username: "Gino" } });
    expect(wrapper.text()).toContain("Gino");
    expect(wrapper).toMatchSnapshot();
  });
});
