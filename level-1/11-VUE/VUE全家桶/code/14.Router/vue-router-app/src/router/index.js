import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  // 方式1
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import('../views/Learn.vue')
  },
  {
    path: '/student',
    name: 'student',
    meta: {
      login: true
    },
    component: () => import('../views/Student.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/community',
    name: 'community',
    meta: {
      login: true
    },
    component: () => import('../views/Community.vue'),
    redirect: '/community/academic',
    children: [{
        path: 'academic',
        name: 'academic',
        component: () => import('../views/Academic.vue')
      },
      {
        path: 'download',
        name: 'download',
        component: () => import('../views/Download.vue')
      },
      {
        path: 'personal',
        name: 'personal',
        component: () => import('../views/Personal.vue')
      }
    ]
  },
  {
    path: '/question/:id',
    name: 'question',
    component: () => import('../views/Question.vue')
  },
  //query
  // {
  //   path: '/question',
  //   name: 'question',
  //   component: () => import('../views/Question.vue')
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/Error.vue')
  },
  {
    path: '*', // 当上面的额路径均不匹配时，则进入该配置
    redirect(to) {
      if (to.path === '/') {
        return '/home';
      } else {
        return '/error'
      }
    }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  // linkExactActiveClass: 'active-exact',
  // linkActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
  // if (to.name === 'student' || to.name === 'academic') {
  //   console.log(from);
  // } else {
  //   next();
  // }
  // if (['student', 'community', 'academic', 'download', 'personal'].includes(to.naem)) {}
  const needLogin = to.matched.some(route => route.meta && route.meta.login);
  if (needLogin) {
    const isLogin = document.cookie.includes('login=true');
    if (isLogin) {
      next();
      return;
    }

    const toLoginFlag = window.confirm('该页面需要登录后访问，前往登录吗？');
    if (toLoginFlag) {
      next('/login');
    }
    
    return;
    
  }
  next();

});

export default router;



// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router