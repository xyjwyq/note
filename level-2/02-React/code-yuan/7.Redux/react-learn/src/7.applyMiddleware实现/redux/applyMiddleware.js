import compose from './compose'

export default function(...middleware) {
  return function(createStore) {
    return function(reducer, defaultState) {
      const store = createStore(reducer, defaultState);
      let dispatch = () => {
        throw new Error("目前还不能使用dispatch");
      };
      
      const simpleStore = {
          dispatch: store.dispatch,
          getState:store.getState
      }

      const dispatchProducers = middleware.map(mid => mid(simpleStore));
      dispatch = compose(...dispatchProducers)(store.dispatch);

      return {
        ...store,
        dispatch
      };
    };
  };
}
