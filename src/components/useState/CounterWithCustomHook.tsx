import {useCounter} from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const initialValue = 100
    const {counter, increment, decrement, reset} = useCounter(initialValue)

    return (
        <>
            <h1>Counter With Hook: { counter }</h1>
            <hr/>

            <button className="btn btn-primary"
                    onClick={() => increment()}>
                +1
            </button>
            <button className="btn btn-warning"
                    onClick={() => decrement()}>
                -1
            </button>

            <button className="btn btn-danger"
                    onClick={() => reset(initialValue)}>
                Reset
            </button>
        </>
    )
}
