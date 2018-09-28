

const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNTER:INCREMENT':
            return Object.assign({}, state, { count: state.count + 1 });
        default:
            return state;
    }
}

export default counterReducer;