const initialState = [];

export default function employeeReducer (state = initialState, action ) {
    switch (action.type) {
        case 'SET_EMPLOYEE':
            return [...state, action.payload];
        case 'CLEAR_EMPLOYEE':
            return [];
        default:
            return state;
    }
}
