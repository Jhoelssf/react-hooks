export const TodoListItem2 = ({todo, index, handleDelete, handleToggle}) => {
    return (
        <>
            <li key={todo.id}
                className={'list-group-item d-flex align-items-center justify-content-between'}>
                <p onClick={() => handleToggle(todo.id)}
                   className={`text-center ${todo.done && 'complete'}`}>
                    {index + 1}. {todo.desc}
                </p>
                <button onClick={() => {
                    handleDelete(todo.id)
                }}
                        className={'btn btn-sm btn-danger'}>
                    Borrar
                </button>
            </li>
        </>
    )
}
