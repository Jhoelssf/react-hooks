import {useForm} from '../../hooks/useForm'
import {TodoObj} from './intro-reducer'

export const TodoAdd = ({todos, handleAddTodo}) => {
    const {description, handleChange, reset} = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim().length <= 1) {
            return
        }
        const newTodo: TodoObj = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handleAddTodo(newTodo)
        reset()
    }

    return (
        <>
            <h4>Agregar To do</h4>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input type="text"
                       onChange={handleChange}
                       className={'form-control form-control-sm'}
                       name={'description'}
                       placeholder={'Aprender ...'}
                       value={description}
                       autoComplete={'off'}/>

                <button className="btn btn-outline-primary btn-sm mt-1 btn-block">
                    Agregar
                </button>
            </form>
        </>
    )
}
