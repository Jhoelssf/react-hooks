import {useFetch} from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter'
import './LayoutEffect.css'
import {useLayoutEffect, useRef} from 'react'

export const LayoutEffect = () => {

    const baseUrl = 'https://www.breakingbadapi.com/api'

    const {counter, increment} = useCounter(1)

    const {data} = useFetch(`${baseUrl}/quotes/${counter}`)

    const {quote} = !!data && data[0]

    const pTag = useRef()

    useLayoutEffect(() => {
        // @ts-ignore
        console.log(pTag?.current?.getBoundingClientRect())
    }, [quote])

    // console.log(author, quote)

    return (
        <div className={'container'}>
            <h1>LayoutEffect</h1>
            <hr/>

            <blockquote className={'blockquote text-end'}>
                <p className={'mb-0'}
                   ref={pTag}>
                    {quote}
                </p>
                {/*<footer className={'blockquote-footer'}>{author}</footer>*/}
            </blockquote>

            <button className="btn btn-primary" onClick={increment}>
                Siguiente quote
            </button>
        </div>
    )
}
