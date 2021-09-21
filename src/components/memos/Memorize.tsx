import {useCounter} from '../../hooks/useCounter'
import {Small} from './Small'
import {useState} from 'react'

export const Memorize = () => {

    const {counter, increment} = useCounter(10)
    const [show, setShow] = useState(true)

    return (
        <div className={'container'}>
            <h1>Memorize</h1>
            <hr/>

            <h1>Counter: <Small value={counter}/></h1>

            <button onClick={increment} className="btn btn-primary">
                +1
            </button>

            <button className={'btn btn-outline-primary ms-3'} onClick={() => {setShow(!show)}}>
                Show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}