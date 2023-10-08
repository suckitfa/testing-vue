<template>
  <div>{{ numbers }}</div>
</template>

<script>
export default {
  name: "NumberRenderer",
  computed: {
    numbers() {
      const evens = [];
      const odds = [];
      for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
          evens.push(i);
        } else {
          odds.push(i);
        }
      }
      const res = this.even ? evens : odds;
      return res.join(",");
    },
  },
  props: {
    even: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
