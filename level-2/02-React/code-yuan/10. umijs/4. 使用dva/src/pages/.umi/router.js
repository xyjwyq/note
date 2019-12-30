import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layout/index.js').default,
    routes: [
      {
        path: '/counter',
        exact: true,
        component: require('../counter.js').default,
        _title: true,
        _title_default: true,
      },
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
        title: '首页',
        Routes: [
          require('../../routes/HandleTitle.js').default,
          require('./TitleWrapper.jsx').default,
        ],
        _title: '首页',
        _title_default: true,
      },
      {
        path: '/login',
        exact: true,
        component: require('../login.js').default,
        title: '登录页',
        Routes: [
          require('../../routes/HandleTitle.js').default,
          require('./TitleWrapper.jsx').default,
        ],
        _title: '登录页',
        _title_default: true,
      },
      {
        path: '/sub/A',
        exact: true,
        component: require('../sub/A.js').default,
        _title: true,
        _title_default: true,
      },
      {
        path: '/sub',
        exact: true,
        component: require('../sub/index.js').default,
        _title: true,
        _title_default: true,
      },
      {
        path: '/sub/model',
        exact: true,
        component: require('../sub/model.js').default,
        _title: true,
        _title_default: true,
      },
      {
        path: '/sub/sub/B',
        exact: true,
        component: require('../sub/sub/B.js').default,
        _title: true,
        _title_default: true,
      },
      {
        path: '/sub/sub',
        exact: true,
        component: require('../sub/sub/index.js').default,
        _title: true,
        _title_default: true,
      },
      {
        path: '/welcome',
        exact: true,
        component: require('../welcome.js').default,
        title: '欢迎页',
        Routes: [
          require('../../routes/PrivateRouter.js').default,
          require('../../routes/HandleTitle.js').default,
          require('./TitleWrapper.jsx').default,
        ],
        _title: '欢迎页',
        _title_default: true,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/xyj/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: true,
        _title_default: true,
      },
    ],
    _title: true,
    _title_default: true,
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/xyj/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: true,
    _title_default: true,
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
