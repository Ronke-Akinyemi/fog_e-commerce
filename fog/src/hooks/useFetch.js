import { useState, useEffect } from "react"

export default function useFetch(url) {
    const [ data, setData] = useState(null)
    const [ error, setError] =  useState(null)
    const [ isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // create abort controller
        const abortCont = new AbortController();
    setIsLoading(true)
    // pass second arg to fetch for the sake of abort controller
        fetch(url, { signal: abortCont.signal })
        .then(res => {
        if (!res.ok){
            throw Error("Resources not found")
        }
        return res.json()
        })
        .then((data) => {
        setData(data)
        setError(null)
        setIsLoading(false)
        })
        .catch(error =>{
            //check for abort error
            if (error.name === 'AbortError'){
                console.log("fetch aborted")
            }
            else{
                setError(error.message)
                setIsLoading(false)
            }
        })

        //clean up
        return () => abortCont.abort();
    }, [url])
  return (
    {data, error, isLoading}
  )
}
