import App from './app.js';

// const template = '<App />'

// const config = {
//     el: '#app',
//     template,
//     components: {
//         App
//     }
// };

// const vue = new Vue(config);

const vue = new Vue({
    template: '<App />',
    components: {
        App
    }
}).$mount('#app');