import {useContext} from 'react'
import {UserContext} from './UserContext'

export const LoginScreen = () => {

    const {user, setUser} = useContext(UserContext)
    const onLogin = () => {
        setUser({
            id: 1234,
            user: 'jhoel',
            email: 'jhoelssflorez@gmail.com'
        })
    }

    console.log(user)

    return (
        <>
            <h1>LoginScreen</h1>
            <hr/>

            <button onClick={onLogin} className="btn btn-sm btn-primary">
                Login
            </button>

        </>
    )
}
