export const actionTypes = {
    setLoginUser: Symbol('set-login-user')
}

/**
 * 设置登录的用户
 * @param {*} user 
 */
export function createSetLoginUserAction(user) {
    return {
        type: actionTypes.setLoginUser,
        payload: user
    }
}