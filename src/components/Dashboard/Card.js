import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap'
import Trianglify from 'trianglify'
import { randomChoice } from '../../utils/random'
import { extractCategory, extractImage } from '../../utils/extracters'

const RandomCard = ({ id, title, date, excerpt, _embedded }) => {
  const medias = extractImage(_embedded)
  const img = medias.source || Trianglify().png()
  const regex = /(<([^>]+)>)/ig
  excerpt = excerpt.rendered.replace(regex, '')
  title = title.rendered.replace(regex, '')
  const category = extractCategory(_embedded)

  console.log(category)

  const information = [
    new Date(date).toLocaleDateString(),
    _embedded.author[0].name
  ]

  information.push(category.name)

  const renderContent = () => {
    return (
      <>
        <CardTitle>{title}</CardTitle>
        <CardText>
          <small className="text-muted">
            {information.join(' | ')}
          </small>
        </CardText>

        <CardText>{excerpt}</CardText>
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
