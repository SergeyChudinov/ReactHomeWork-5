

const initialState = {
    messages: [
        {
            id: 1,
            title: 'Hi'
        },
        {
            id: 2,
            title: 'Good'
        },
        {
            id: 3,
            title: 'Sergey'
        }
    ]
}
export const messageReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'add_message':
            return {
                ...state,
                messages: [...state.messages, action.playload]
            } 
        case 'delete_message':
            return {
                ...state,
                messages: [...state.messages.slice(0, action.playload), ...state.messages.slice(action.playload + 1)]
            }
        default: {
            return state
        }
    }
}
