import './styles.css'
import {useEffect, useReducer} from 'react'
import {todoReducer} from './todoReducer'
import {Action, TodoObj} from './intro-reducer'
import {TodoAdd} from './TodoAdd'
import {TodoList} from './TodoList'

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init)



    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        // return () => {
        //     effect
        // }
    }, [todos])

    const handleDelete = (todoId) => {
        const action: Action<TodoObj> = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = (newTodo) => {
        const action: Action<TodoObj> = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action)
    }

    return (
        <>
            <h1>TodoApp {todos.length}</h1>
            <hr/>

            <div className={'row'}>
                <div className={'col-md-7'}>
                    <TodoList todos={todos}
                              handleToggle={handleToggle}
                              handleDelete={handleDelete}/>
                </div>
                <div className={'col-md-5'}>
                    <TodoAdd handleAddTodo={handleAddTodo}
                             todos={todos}/>
                </div>
            </div>
        </>
    )
}
