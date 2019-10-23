<template>
  <div class="personal">
    <input type="text" v-model="value" />
    <button @click="handleClick">提交</button>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    if (this.value !== "") {
      const flag = window.confirm("确定是否离开？");
      if (flag) {
        next();
      }
    } else {
      next();
    }
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    handleClick() {
      this.value = "";
    }
  }
};
</script>

<style lang='scss'>
</style>