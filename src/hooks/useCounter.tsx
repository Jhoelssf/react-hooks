import {useState} from 'react'

export const useCounter =(initialState: number = 10) => {

    const [counter, setCounter] = useState(initialState)

    // const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    //     const {name, value} = target
    //     setForm({
    //         ...form,
    //         [name]: value
    //     })
    // }

    // const increment = (factor = 1) => {
    //     setCounter(counter + factor)
    // }
    //
    // const decrement = (factor = 1) => {
    //     setCounter(counter - factor)
    // }
    //
    // const reset = (resetValue: number) => {
    //     setCounter(resetValue)
    // }

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const reset = (resetValue: number) => {
        setCounter(resetValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
