import {useContext} from 'react'
import {UserContext} from './UserContext'

export const AboutScreen = () => {

    const {user, setUser} = useContext(UserContext)
    const onLogout = () => {
        setUser({})
    }

    return (
        <>
            <h1>AboutScreen</h1>
            <hr/>

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button onClick={onLogout}
                className="btn btn-sm btn-outline-success">
                Logout
            </button>

        </>
    )
}
