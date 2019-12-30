import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'counter', ...(require('C:/Users/xyj/Desktop/note/level-2/02-React/code-yuan/10. umijs/4. 使用dva/src/models/counter.js').default) });
app.model({ namespace: 'student', ...(require('C:/Users/xyj/Desktop/note/level-2/02-React/code-yuan/10. umijs/4. 使用dva/src/models/student.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/xyj/Desktop/note/level-2/02-React/code-yuan/10. umijs/4. 使用dva/src/pages/sub/model.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
