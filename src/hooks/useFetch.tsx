import {useEffect, useRef, useState} from 'react'

export const useFetch = (url: string) => {
    // const isMounted = useRef(true)
    const [state, setState] = useState({data: null, loading: true, error: null})

    // useEffect(() => {
    //
    //     return () => {
    //         isMounted.current = false
    //     }
    // }, [])

    // setState({data: null, loading: true, error: null})

    // useEffect(() => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             if (isMounted.current) {
    //                 setState({
    //                     loading: false,
    //                     error: null,
    //                     data
    //                 })
    //             }
    //         })
    // }, [url])
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setState({
                    loading: false,
                    error: null,
                    data
                })
            })
    }, [url])

    return state
}
