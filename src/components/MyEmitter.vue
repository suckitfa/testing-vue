<template>
  <div></div>
</template>

<script>
export default {
  name: "MyEmitter",

  methods: {
    emitEvent() {
      this.$emit("myEvent", "name", "password");
    },
  },
};
</script>

<style scoped></style>
