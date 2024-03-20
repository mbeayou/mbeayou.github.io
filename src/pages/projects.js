import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from 'components/Layout'
import Projects from 'components/Projects'

const ProjectsJsonQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id,
          path
          title
          date
          description
          imageSrc {
            relativePath
          }
        }
      }
    }
  }
`

const ProjectsPage = () => {
  const data = useStaticQuery(ProjectsJsonQuery)
  
  return (
    <Layout>
      <Projects content={data.allProjectsJson.edges} />
    </Layout>
  )
}

export default ProjectsPage
