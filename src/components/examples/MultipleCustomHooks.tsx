import {useFetch} from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter'

export const MultipleCustomHooks = () => {

    const baseUrl = 'https://www.breakingbadapi.com/api'

    const {counter, increment} = useCounter(1)

    const {loading, error, data} = useFetch(`${baseUrl}/quotes/${counter}`)

    const {author, quote} = !!data && data[0]

    // console.log(author, quote)

    return (
        <div className={'container'}>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {
                loading
                ?
                    (
                        <div className={'alert alert-info text-center'}>
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className={'blockquote text-end'}>
                            <p>{quote}</p>
                            <footer className={'blockquote-footer'}>{author}</footer>
                        </blockquote>
                    )
            }

            <button className="btn btn-primary" onClick={increment}>
                Siguiente quote
            </button>
        </div>
    )
}
