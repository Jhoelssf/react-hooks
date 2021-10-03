import {TodoListItem2} from './TodoListItem2'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <>
            <ul>
                {
                    todos.map((todo, index) => (
                        <TodoListItem2 todo={todo}
                                       key={todo.id}
                                       index={index}
                                       handleDelete={handleDelete}
                                       handleToggle={handleToggle}/>
                    ))
                }
            </ul>
        </>
    )
}
