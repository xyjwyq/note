import {getAllStudents} from '../../../services/student'

export const actionTypes = {
    addUser: Symbol('add-user'),
    deleteUser: Symbol('delete-user'),
    updateUser: Symbol('update-user'),
    setUsers: Symbol('set-users'),
    setLoading: Symbol('set-loading')
}

export function createAddUserAction(user) {
    return {
        type: actionTypes.addUser,
        payload: user
    }
}

export function createDeleteUserAction(id) {  
    return {
        type: actionTypes.deleteUser,
        payload: id
    }
}

export function createUpdateUserAction(id, newUserData) {
    return {
        type: actionTypes.setUsers,
        payload: {
            ...newUserData,
            id
        }
    }
}

export function createSetUsersAction(users) {
    return {
        type: actionTypes.setUsers,
        payload: users
    }
}

export function createSetLoadingAction(isLoading) {
    return {
        type: actionTypes.setLoading,
        payload: isLoading
    }
}

export function fetchStudent() {
    return async function(dispatch) {
        dispatch(createSetLoadingAction(true)); // 设置加载状态为true
        const users = await getAllStudents();
        dispatch(createSetUsersAction(users)); // 触发设置用户action
        dispatch(createSetLoadingAction(false)); // 加载完成
    }
}
