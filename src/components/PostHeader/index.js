import React from 'react'
import PropTypes from 'prop-types'

import Tags from 'components/Tags'
import DateTime from 'components/DateTime'
import ButtonLink from 'components/ButtonLink'
import * as R from 'components/Responsive'

import * as S from './styled'

const PostHeader = ({ 
  image, 
  tags, 
  date, 
  timeToRead, 
  title, 
  description 
}) => {
  return (
    <S.PostHeader> 
      {image && (
        <R.GreaterThanTablet>
          <div>
            <S.PostImage fluid={image.childImageSharp.fluid} />
          </div>
        </R.GreaterThanTablet>
      )}
      <S.ButtonBack>
        <ButtonLink rel="prev" to="/blog/">
          ← Back to list
        </ButtonLink>
      </S.ButtonBack>
      <DateTime>
        <span itemProp="datePublished">{date}</span>
        {timeToRead && (
          <span> · Reading {timeToRead} min</span>
        )}
      </DateTime>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{description}</S.Subtitle>
      <S.Author>M.S.Baayou</S.Author>
      <Tags tags={tags} isLink={true} />
    </S.PostHeader>
  )
}

PostHeader.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  image: PropTypes.object,
  timeToRead: PropTypes.number
}

export default PostHeader
