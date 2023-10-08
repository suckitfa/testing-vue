import { shallowMount, mount } from "@vue/test-utils";
import FormSubmitter from "@/components/FormSubmitter.vue";
import flushPromises from "flush-promises";
// 以上测试同样遵循了单元测试的三个步骤：
// 安排（Arrange）：为测试做好设置。在我们的用例中，是渲染了组件
// 行动（Act）：对系统执行操作
// 断言（Assert）：确保真实的结果匹配你的期望
let url = "";
let data = "";
const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve) => {
      url = _url;
      data = _data;
      resolve();
    });
  },
};
describe("FormSubmitter", () => {
  it("reveals a notification when submitted", async () => {
    const wrapper = shallowMount(FormSubmitter);

    wrapper.find("[data-username]").setValue("alice");
    wrapper.find("form").trigger("submit.prevent");

    // 调用 nextTick 以确保 Vue 的反应式系统更新 DOM
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".message").text()).toBe(
      "Thank you for your submission, alice."
    );
  });

  it("reveals a notification when submitted-2", async () => {
    const wrapper = mount(FormSubmitter, {
      data() {
        return {
          asyncTest: true,
        };
      },
      mocks: {
        $http: mockHttp,
      },
    });

    wrapper.find("[data-username]").setValue("alice");
    wrapper.find("form").trigger("submit.prevent");

    await flushPromises();

    expect(wrapper.find(".message").text()).toBe(
      "Thank you for your submission, alice."
    );
    expect(url).toBe("/api/v1/register");
    expect(data).toEqual({ username: "alice" });
  });
});
