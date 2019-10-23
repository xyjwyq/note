<template>
  <div id="app">
    <div class="logon" @click="handleToHome">渡一教育</div>
    <!-- <router-link tag="div" to="/home">渡一教育</router-link> -->
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
      <ul>
        <router-link tag="li" to="/home">首页</router-link>
        <router-link tag="li" :to="{ path: '/learn' }">课程学习</router-link>
        <router-link tag="li" :to="{ name: 'student' }">学员展示</router-link>
        <router-link tag="li" to="/about">关于</router-link>
        <router-link tag="li" to="/community">社区</router-link>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    handleToHome() {
      // [a, b, c, d] --> [a, b, c, d, e]
      // this.$router.push('/home');

      // [a, b, c, d] --> [a, b, c, e]
      // this.$router.replace({name:'home'});

      // [a, b, c, d] -1 ==> d -> c , 0 ==> d -> d, 2 ==> b -> d
      this.$router.go(0);

    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav li {
  display: inline-block;
  margin: 0;
  margin-left: 10px;
  padding: 0;
  list-style: none;
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
}

#nav li.router-link-exact-active {
  color: #42b983;
}

#nav li.router-link-active {
  color: #42b983;
}
</style>
