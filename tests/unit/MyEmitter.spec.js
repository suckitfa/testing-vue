import MyEmitter from "@/components/MyEmitter.vue";
import { shallowMount } from "@vue/test-utils";

describe("MyEmitter", () => {
  it("emits an event with two arguments", () => {
    const wrapper = shallowMount(MyEmitter);

    wrapper.vm.emitEvent();

    console.log(wrapper.emitted());
  });
});
