import {useForm} from '../../hooks/useForm'
import {FormEvent, useEffect} from 'react'
type data = {
    name: string
    email: string
    password: string
}

export const FormWithCustomHook = () => {

    const {email, name, password, handleChange} = useForm<data>({
        email: '',
        name: '',
        password: ''
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email, name, password)
    }

    useEffect(() => {
        console.log('email cambio')
    }, [email])

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Form With Custom Hook</h1>
            <hr/>

            <div className="form-group">
                <input type="text"
                       className={'form-control form-control-sm'}
                       placeholder={'Tu nombre'}
                       autoComplete={'off'}
                       value={name}
                       onChange={handleChange}
                       name={'name'}/>
            </div>

            <div className="form-group">
                <input type="text"
                       className={'form-control form-control-sm'}
                       placeholder={'email@email.com'}
                       autoComplete={'off'}
                       value={email}
                       onChange={handleChange}
                       name={'email'}/>
            </div>

            <div className="form-group">
                <input type="password"
                       className={'form-control form-control-sm'}
                       placeholder={'**********'}
                       autoComplete={'off'}
                       value={password}
                       onChange={handleChange}
                       name={'password'}/>
            </div>

            <button type={'submit'} className={'btn btn-success'}>
                Guardar
            </button>

        </form>
    )
}
