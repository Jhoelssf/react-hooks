import {Action} from './intro-reducer'

export const todoReducer =<T extends Object>(state = [], action: Action<T>) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]

        case 'delete':
            return state.filter(todo => todo.id !== action.payload)

        case 'toggle':
            return state.map(todo =>
                (todo.id === action.payload) ? {...todo, done: !todo.done} : todo
            )
            // return state.map((to1do) => {
            //     if (to1do.id === action.payload) {
            //         return {
            //             ...to1do,
            //             done: !to1do.done
            //         }
            //     } else {
            //         return to1do
            //     }
            // })

        default:
            return state
    }
}
