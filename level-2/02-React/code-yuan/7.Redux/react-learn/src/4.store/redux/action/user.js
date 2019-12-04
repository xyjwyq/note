export const actionTypes = {
    addUser: Symbol('add-user'),
    deleteUser: Symbol('delete-user'),
    updateUser: Symbol('update-user')
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