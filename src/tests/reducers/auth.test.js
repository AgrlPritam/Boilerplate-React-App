import authReducer from '../../reducers/auth'

test('Should set UID for login',() => {
    const action = {
        type: 'LOGIN',
        uid: '123abcd'
    }
    const state = authReducer({}, action)
    expect(state.uid).toBe(action.uid)
})

test('Should set uid for logout',() => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: 'anything'},action)
    expect(state).toEqual({})
})