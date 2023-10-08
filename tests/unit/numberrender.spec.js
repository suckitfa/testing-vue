import { shallowMount } from "@vue/test-utils";
import NumberRenderer from "@/components/NumberRenderer.vue";

describe("NumberRenderer", () => {
  it("renders even numbers", () => {
    // 通过将其渲染出来进行测试
    const wrapper = shallowMount(NumberRenderer, {
      propsData: {
        even: true,
      },
    });

    expect(wrapper.text()).toBe("2,4,6,8");
  });

  //   使用call来单独测试computed属性
  it("renders odd numbers.", () => {
    const localThis = { even: false };
    expect(NumberRenderer.computed.numbers.call(localThis)).toBe("1,3,5,7,9");
  });
});
