import { useState, useEffect } from 'react'

export const useFetch = (method) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchUrl () {
      const response = await method()
      const json = response.data
      console.log(json)
      setData(json)
      setLoading(false)
    }
    fetchUrl()
  }, [method])
  return [data, loading]
}
