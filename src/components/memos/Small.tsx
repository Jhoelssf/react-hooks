import {memo} from 'react'

type props = {
    value: number
}

export const Small = memo(({value}: props) => {

    console.log('Me volvi a llamar :(')

    return (
        <>
            <small>{value}</small>
        </>
    )
})
