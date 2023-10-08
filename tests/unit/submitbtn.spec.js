import { shallowMount } from "@vue/test-utils";
import SubmitButton from "@/components/SubmitButton.vue";

describe("SubmitButton.vue", () => {
  // 使用工厂模式来重构测试用例 DRY-Don't Repeat Yourself
  const msg = "submit";
  const fatory = (propsData) => {
    return shallowMount(SubmitButton, {
      propsData: {
        msg,
        ...propsData,
      },
    });
  };
  it("displays a non authorized message", () => {
    const wrapper = fatory();

    console.log(wrapper.html());

    expect(wrapper.find("span").text()).toBe("Not Authorized");
    expect(wrapper.find("button").text()).toBe("submit");
  });

  it("displays a admin privileges message", () => {
    const isAdmin = true;
    const wrapper = fatory({ isAdmin });

    console.log(wrapper.html());

    expect(wrapper.find("span").text()).toBe("Admin Privileges");
    expect(wrapper.find("button").text()).toBe("submit");
  });
});
