import React, { useEffect, useContext } from 'react'
import { CardColumns } from 'reactstrap'
import Card from './Card'
import requests from '../../requests'
import { useFetch } from '../../utils/hooks'
import LoadingContext from '../../contexts/LoadingContext'

const Dashboard = () => {
  const [news, isLoading] = useFetch(requests.getPosts)
  const { showLoading, hideLoading } = useContext(LoadingContext)

  useEffect(() => {
    if (isLoading) {
      showLoading()
    } else {
      hideLoading()
    }
  }, [isLoading, showLoading, hideLoading])

  return (
    <>
      <h1 className="mt-2">Новости</h1>
      <hr />
      <CardColumns>
        {
          news.map((value, index) => {
            return (
              <Card key={index} {...value} />
            )
          })
        }

      </CardColumns>
    </>
  )
}

export default Dashboard
