<template>
  <div class="community">
    <ul>
      <router-link tag="li" :to="{ name: 'academic' }">学术中心</router-link>
      <router-link tag="li" :to="{ name: 'download' }">资源下载</router-link>
      <router-link tag="li" :to="{ name: 'personal' }">个人中心</router-link>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul li {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
}

.community li.router-link-exact-active {
  color: #42b983;
}

.community li.router-link-active {
  color: #42b983;
}
</style>