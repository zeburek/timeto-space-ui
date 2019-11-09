import { useState, useEffect } from 'react'

export const useFetch = (method) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchUrl () {
      try {
        const response = await method()
        const json = response.data
        console.log(json)
        setData(json)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchUrl()
  }, [method])
  return [data, loading]
}
