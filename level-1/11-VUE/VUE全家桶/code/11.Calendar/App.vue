<template>
  <div class="app">
    <Calendar />
  </div>
</template>

<script>
import Calendar from "./Callendar";

export default {
  components: {
    Calendar
  }
};
</script>

<style >
html,
body,
.app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
}

</style>