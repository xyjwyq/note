export default {
    state: 0,
    reducers: {
        increase(state) {
            return state + 1;
        },
        decrease: state => state -1
    }
}