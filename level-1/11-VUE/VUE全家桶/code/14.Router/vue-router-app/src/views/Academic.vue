<template>
  <div class="academic">
    <ul>
      <!-- params -->
      <router-link
        tag="li"
        :to="{name: 'question', params: {id: item.questionId}}"
        v-for="item in questionList"
        :key="item.questionId"
      >{{ item.title }}</router-link>

      <!-- query -->
      <!-- <router-link
        tag="li"
        :to="{name: 'question', query: {id: item.questionId}}"
        v-for="item in questionList"
        :key="item.questionId"
      >{{ item.title }}</router-link> -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionList: [
        {
          questionId: 201901,
          title: "11111111111111"
        },
        {
          questionId: 201902,
          title: "2222222222222222222"
        },
        {
          questionId: 201903,
          title: "33333333333333333"
        }
      ]
    };
  }
};
</script>

<style scoped>
li {
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 20px;
}
</style>