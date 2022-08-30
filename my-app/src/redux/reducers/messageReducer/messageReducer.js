

const initialState = {
    messages: [
        {
            id: 1,
            title: 'Who are you?',
            chatId: 2
        },
        {
            id: 2,
            title: 'Kim',
            chatId: 1
        },
        {
            id: 3,
            title: 'Hello',
            chatId: 3
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
                messages: [...state.messages.filter(message => message.id !== action.playload)]
            }
        default: {
            return state
        }
    }
}
// messages: [...state.messages.slice(0, action.playload), ...state.messages.slice(action.playload + 1)]