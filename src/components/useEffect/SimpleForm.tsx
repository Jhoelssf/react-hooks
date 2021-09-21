import {ChangeEvent, useEffect, useState} from 'react'
import {Message} from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState

    const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        // console.log('Hey')
    }, [])

    useEffect(() => {
        // console.log('formState Cambió')
    }, [formState])

    useEffect(() => {
        // console.log('email Cambió')
    }, [email])

    return (
        <>
            <h1>Use Effect</h1>
            <hr/>

            <div className="form-group">
                <input type="text"
                       className={'form-control form-control-sm'}
                       placeholder={'Tu nombre'}
                       autoComplete={'off'}
                       value={name}
                       onChange={handleInputChange}
                       name={'name'}/>
            </div>

            <div className="form-group">
                <input type="text"
                       className={'form-control form-control-sm'}
                       placeholder={'email@email.com'}
                       autoComplete={'off'}
                       value={email}
                       onChange={handleInputChange}
                       name={'email'}/>
            </div>

            {(name === '123') && <Message />}

        </>
    )
}
