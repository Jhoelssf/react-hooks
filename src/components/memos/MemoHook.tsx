import {useCounter} from '../../hooks/useCounter'
import {useMemo, useState} from 'react'
import {procesoPesado} from '../../helpers/procesoPesado'

export const MemoHook = () => {

    const {counter, increment} = useCounter(100)
    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div className={'container'}>
            <h1>Memorize Hook</h1>
            <hr/>

            <h3>Counter: <small>{counter}</small></h3>
            <hr/>

            <p>{memoProcesoPesado}</p>

            <button onClick={increment} className="btn btn-primary">
                +1
            </button>

            <button className={'btn btn-outline-primary ms-3'} onClick={() => {setShow(!show)}}>
                Show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
