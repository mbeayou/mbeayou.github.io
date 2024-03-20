import React from 'react'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import DateTime from 'components/DateTime'
import BoxHandler from 'components/BoxHandler'

import * as S from './styled'

const trackClickBooks = (item) => {
  ReactGA.event({
    category: 'Books',
    action: 'click',
    label: `Books - Going to ${item}`
  })
}

const BooksImg = ({ imageSrc }) => {
  const { images } = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "Books" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  const image = images.edges.find(image => {
    return image.node.relativePath === imageSrc.relativePath
  })

  return <S.Image fluid={image.node.childImageSharp.fluid} />
}

const Books = ({ content }) => {
  return (
    <S.BooksList>
      {content.map(({ node }) => {
        return (
          <S.BooksItem 
            key={node.id} 
            href={node.path} 
            title={node.title} 
            onClick={() => trackClickBooks}>
            <BoxHandler>
              <DateTime>{node.date}</DateTime>
              <S.Title>{node.title}</S.Title>
              <S.Text>{node.rate}</S.Text>
              <S.Text>{node.description}</S.Text>
            </BoxHandler>
          </S.BooksItem>
        )
      })}
    </S.BooksList>
  )
}

Books.propTypes = {
  children: PropTypes.node.isRequired
}

export default Books
