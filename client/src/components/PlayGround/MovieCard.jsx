import React from 'react';
import {Card} from 'semantic-ui-react'

const MovieCard = ({imgPath, title, relDate, overview}) => {
  return (
    <Card
    image={imgPath}
    header={title}
    meta={relDate}
    description={overview}
    // extra={extra}
  />
  )
}

export default MovieCard
