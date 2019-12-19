export default {
    routes: [
        {
            path:'/',
            component: '../layout/index.js',
            exact: false,
            routes: [
                {
                    path: '/',
                    component: './index.js',
                    title: '首页',
                    Routes: ['./src/routes/HandleTitle.js']
                },
                {
                    path: '/welcome',
                    component:'./welcome.js',
                    title: '欢迎页',
                    Routes: ['./src/routes/PrivateRouter.js' ,'./src/routes/HandleTitle.js']
                },
                {
                    path: '/login',
                    component:'./login.js',
                    // title: '登录页',
                    Routes: ['./src/routes/HandleTitle.js']
                }
            ]
        }
    ]
}