import {memo} from 'react'

type Props = {
    numero: number
    incrementar: (n: number) => void
}

export const Hijo = memo(({numero, incrementar}: Props) => {

    console.log('  Me volví a generar :(  ')

    return (
        <button
            className="btn btn-primary me-3"
            onClick={() => incrementar(numero)}
        >
            {numero}
        </button>
    )
})
