import React from 'react'
import { Link } from 'react-router-dom'
import Truncate from 'react-truncate'
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap'
import Trianglify from 'trianglify'
import { randomChoice } from '../../utils'

const RandomCard = ({ id, img, title, date, views, author, description }) => {
  img = img || Trianglify().png()

  const renderContent = () => {
    return (
      <>
        <CardTitle>{title}</CardTitle>
        <CardText>
          <small className="text-muted">
            {date} | {views} просмотр(ов) | {author}
          </small>
        </CardText>

        <Truncate lines={2} ellipsis={'...'}>
          <CardText>{description}</CardText>
        </Truncate>
      </>
    )
  }

  const renderUpperImage = () => {
    return (
      <>
        <CardImg src={img} />
        <CardBody>
          {renderContent()}
        </CardBody>
      </>
    )
  }

  const renderDownImage = () => {
    return (
      <>
        <CardBody>
          {renderContent()}
        </CardBody>
        <CardImg src={img} />
      </>
    )
  }

  return (
    <Card>
      <Link to={`/posts/${id}`}>
        {randomChoice([renderUpperImage, renderDownImage])()}
      </Link>
    </Card>
  )
}

export default RandomCard
