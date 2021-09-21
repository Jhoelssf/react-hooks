import {MultipleCustomHooks} from '../examples/MultipleCustomHooks'
import {useState} from 'react'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div className={'container'}>
            <h1>Real Example Ref</h1>
            <hr/>

            {show && <MultipleCustomHooks />}

            <button onClick={() => setShow( !show )} className="btn btn-success">
                show/hide
            </button>

        </div>
    )
}
