import Vue from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render: h => h(App),
  render() {
    return (
      <div>
        <h1 class="haha" style={{color:'blue',fontSize:'16px'}}>测试</h1>
      </div>
    );
  }
}).$mount('#app')
