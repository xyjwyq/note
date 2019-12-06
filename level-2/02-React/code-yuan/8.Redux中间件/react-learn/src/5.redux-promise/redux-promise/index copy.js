function createPromiseMiddleware() {
    return store => next => action => {
        if (typeof action.then === 'function') {
            // 简单判断promise对象
            action.then(action => {
                next(action)
            });
        } else if (action.payload && typeof action.payload.then === 'function') {
            action.payload.then(payload => {
                next({
                    ...action,
                    payload
                });
            })
        } else {
            next(action);
        }
    }
}

export default createPromiseMiddleware();