export interface A {
    id: string
}

export interface Action<T> {
    type: string
    payload: T
}

export interface TodoObj {
    id: number
    desc: string
    done: boolean
}

/*
 const initialState = {
     id: 1,
     todo: 'Comprar pan',
     done: false
 }

 const todoReducer = (state = initialState, action?) => {
     if (action?.type === 'agregar') {
         // @ts-ignore
         return [...state, action.payload]
     }
     return state
 }

 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 let todos = todoReducer()

 const newTodo = {
     id: 2,
     todo: 'Comprar leche',
     done: false
 }

 const agregarTodoAction = {
     type: 'agregar',
     payload: newTodo
 }

 // @ts-ignore
 todos = todoReducer(todos, agregarTodoAction)

 console.log(todos)
*/

