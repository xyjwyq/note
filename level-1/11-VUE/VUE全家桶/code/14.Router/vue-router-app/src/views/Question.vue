<template>
  <div class="question">
    问题: {{ question }}
    <button v-show="nextFlag" @click="handleClick">下一个问题</button>
  </div>
</template>

<script>
export default {
  // beforeRouteEnter (to, from, next) {
  // },
  beforeRouteUpdate(to, from, next) {
    const id = to.params.id;
    this.getData(id);
    next();
  },
  data() {
    return {
      question: "",
      questionId: null,
      nextFlag: true,
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
  },
  mounted() {
    console.log(this.$route);
    const id = this.$route.params.id;
    this.getData(id);
  },
  methods: {
    handleClick() {
      this.$router.push({
        name: "question",
        params: { id: this.questionId + 1 }
      });
    },
    getData(id) {
      const index = this.questionList.findIndex(item => item.questionId === id);
      if (index !== -1) {
        this.question = this.questionList[index].title;
        this.questionId = id;
      } else {
        this.nextFlag = false;
        this.question= '没有问题';
      }
    }
  }
};
</script>

<style>
</style>