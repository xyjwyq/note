<template>
  <div class="calendar">
    <header class="calendar_header">
      <div class="prev" @click="handlePrev"></div>
      <div class="now_day">{{ year }}年{{ month }}月{{ day }}日</div>
      <div class="next" @click="handleNext"></div>
    </header>
    <div class="calendar_main">
      <div class="week_container clearfix">
        <div
          class="week_day"
          v-for="week in ['日', '一', '二', '三', '四', '五', '六']"
          :key="week"
        >{{ week }}</div>
      </div>
      <div class="month_container">
        <div class="month_day" v-for="(item, index) in 42" :key="index">
          <div
            class="now_month"
            v-if="item - beginDay > 0 && item - beginDay <= nowMonthDays"
            :class="{
              'now_day': nowTime === `${year}年${month}月${item - beginDay}日`,
              'select_day': `${year}年${month}月${day}日` === `${year}年${month}月${item - beginDay}日`
            }"
            :data-day="item - beginDay"
            @click="handleSelectDay"
          >{{ item - beginDay }}</div>
          <div
            v-else-if="item - beginDay <= 0"
          >{{ item - beginDay + prevMonthDays }}</div>
          <div v-else>{{ item - nowMonthDays - beginDay }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: null,
      month: null,
      day: null,
      nowTime: ""
    };
  },
  created() {
    this.getInitTime();
  },
  methods: {
    getInitTime() {
      const nowDate = new Date();
      this.year = nowDate.getFullYear();
      this.month = nowDate.getMonth() + 1;
      this.day = nowDate.getDate();
      this.nowTime = `${this.year}年${this.month}月${this.day}日`;
    },
    handleSelectDay(e) {
      const day = e.target.dataset.day;
      if (day === this.day) {
        return;
      }
      this.day = day;
    },
    handlePrev() {
      if (this.month === 1) {
        this.year--;
        this.month = 12;
      } else {
        this.month--;
      }
      this.setDay();
    },
    handleNext() {
      if (this.month === 12) {
        this.year++;
        this.month = 1;
      } else {
        this.month++;
      }
      this.setDay();
    },
    setDay() {
      if (this.day > this.nowMonthDays) {
        this.day = this.nowMonthDays;
      }
    }
  },
  computed: {
    beginDay() {
      return new Date(this.year, this.month - 1, 1).getDay();
    },
    prevMonthDays() {
      return new Date(this.year, this.month - 1, 0).getDate();
    },
    nowMonthDays() {
      return new Date(this.year, this.month, 0).getDate();
    }
  }
};
</script>
    


<style scoped>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.calendar {
  width: 350px;
  height: 350px;
  margin: 100px auto;
}

.calendar .calendar_header {
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  /* background-color: antiquewhite; */
}

.calendar .calendar_header .prev,
.calendar .calendar_header .next {
  width: 0;
  height: 0;
  border: 15px solid transparent;
  cursor: pointer;
}

.calendar .calendar_header .prev {
  border-right-color: aqua;
}
.calendar .calendar_header .next {
  border-left-color: aqua;
}

.calendar .calendar_main .week_container {
  background-color: aqua;
}

.calendar .calendar_main .week_container div {
  float: left;
  width: 50px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-right: 1px solid #000;
  box-sizing: border-box;
}
.calendar .calendar_main .week_container .week_day:last-child {
  border: none;
}

.calendar .calendar_main .month_container {
  display: flex;
  flex-wrap: wrap;
  /* background-color: aquamarine; */
}

.calendar .calendar_main .month_container .month_day {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid#ccc;
  background-color: #eee;
  color: #aaa;
  box-sizing: border-box;
  cursor: pointer;
}

.calendar .calendar_main .month_container .month_day .now_month {
  background-color: #fff;
  color: #000;
}

.calendar .calendar_main .month_container .month_day .now_month.now_day {
  background-color: bisque;
  color: #fff;
}

.calendar .calendar_main .month_container .month_day .select_day {
  background-color: cadetblue;
}
</style>