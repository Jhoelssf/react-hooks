import {memo} from 'react'

type Props = { increment: (num: number) => void }

export const ShowIncrement = memo(({increment}: Props) => {

    console.log('Me volvi a generar :( ')

    return (
        <>
            <button className={'btn btn-primary'}
                    onClick={() => {
                        increment(5)
                    }}>
                incrementar
            </button>
        </>
    )
})
