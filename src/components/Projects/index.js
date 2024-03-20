import React from 'react'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import DateTime from 'components/DateTime'
import BoxHandler from 'components/BoxHandler'

import * as S from './styled'

const trackClickProjects = (item) => {
  ReactGA.event({
    category: 'Projects',
    action: 'click',
    label: `Projects - Going to ${item}`
  })
}

const ProjectsImg = ({ imageSrc }) => {
  const { images } = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "Projects" } }) {
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

const Projects = ({ content }) => {
  return (
    <S.ProjectsList>
      {content.map(({ node }) => {
        return (
          <S.ProjectsItem 
            key={node.id} 
            href={node.path} 
            title={node.title} 
            onClick={() => trackClickProjects}>
            <BoxHandler>
              <ProjectsImg imageSrc={node.imageSrc} />
              <DateTime>{node.date}</DateTime>
              <S.Title>{node.title}</S.Title>
              <S.Text>{node.description}</S.Text>
            </BoxHandler>
          </S.ProjectsItem>
        )
      })}
    </S.ProjectsList>
  )
}

Projects.propTypes = {
  children: PropTypes.node.isRequired
}

export default Projects
