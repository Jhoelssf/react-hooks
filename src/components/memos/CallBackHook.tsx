import {useCallback, useState} from 'react'
import {ShowIncrement} from './ShowIncrement'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    const increment = useCallback((num) => {
        setCounter(c => c + num)
    }, [setCounter])

    return (
        <div className={'container'}>
            <h1>UserCallbackHook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment} />
        </div>
    )
}
