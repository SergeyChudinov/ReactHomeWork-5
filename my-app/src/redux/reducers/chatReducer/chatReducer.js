

const initialState = {
    chats: [
        {
            id: 1,
            name: 'Andrey'
        },
        {
            id: 2,
            name: 'Alisa'
        },
        {
            id: 3,
            name: 'Sergey'
        }
    ]
}
export const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'add_chat':
            return {
                ...state,
                chats: [...state.chats, action.playload]
            } 
        case 'delete_chat':
            return {
                ...state,
                chats: [...state.chats.slice(0, action.playload), ...state.chats.slice(action.playload + 1)]
            }
        default: {
            return state
        }
    }
}
