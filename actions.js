const increase = (state) => {
    return {
        ...state,
        count:state.count + 1
    };
}

const decrease = (state) => {
    return {
        ...state,
        count:state.count - 1
    };
};

const get = (state, key) => {
    return {
        state[key];
    }
};