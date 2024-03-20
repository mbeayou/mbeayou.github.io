import React from 'react'
import ReactGA from 'react-ga'
import { useStaticQuery, graphql } from 'gatsby'

import ButtonLink from 'components/ButtonLink'
import Layout from 'components/Layout'
import GridTemplate from 'components/GridTemplate'
import Author from 'components/Author'

const trackLanguageClick = () => {
  ReactGA.event({
    category: 'About',
    action: 'click',
    label: `About - Go to english`
  })
}

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            descriptionEn
          }
        }
      }
    `
  )

  return (
    <Layout>
      <GridTemplate>
        <ButtonLink
          to="/"
          title="View in english"
          onClick={() => trackLanguageClick()}>
            Show in english
        </ButtonLink>

        <Author language="en" fullText={true} />
      </GridTemplate>
    </Layout>
  )
}

export default IndexPage
