const initialState = {
    color: 'white',
    textColor: 'black'
}

export function colorReducer(state=initialState, action) {
    switch(action.type) {
        
        case 'CHANGE_BACKGROUND_COLOR':
            return Object.assign({}, state, {
                color: action.payload.color
            })

        case 'CHANGE_TEXT_COLOR':
            return Object.assign({}, state, {
                textColor: action.payload.textColor
            })
            
        default:
            return state;
    }
}