import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PersonCard from "../PersonCard.vue";

describe("Person", () => {
  it("renders properly", () => {
    const wrapper = mount(PersonCard, {
      props: {
        user: {
          name: "John Doe",
          location: "San Francisco",
          avatar_url: "https://avatars.githubusercontent.com/u/2829600?v=4",
        },
      },
    });
    expect(wrapper.text()).toContain("John Doe");
    expect(wrapper.text()).toContain("San Francisco");
    expect(wrapper).toMatchSnapshot();
  });
});
