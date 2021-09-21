import {LegacyRef, useRef} from 'react'

export const FocusScreen = () => {

    const inputRef: LegacyRef<HTMLInputElement> = useRef()

    const handleClick = () => {
        inputRef.current.select()
        console.log(inputRef)
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>

            <input ref={inputRef} placeholder={'Su nombre'} className={'form-control form-control-sm'}/>

            <button onClick={handleClick} className="btn btn-outline-primary mt-3">
                Focus
            </button>
        </>
    )
}
