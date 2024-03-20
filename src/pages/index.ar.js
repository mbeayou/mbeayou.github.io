import React from 'react'
import ReactGA from 'react-ga'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from 'components/Layout'
import GridTemplate from 'components/GridTemplate'
import ButtonLink from 'components/ButtonLink'
import Author from 'components/Author'


const trackLanguageClick = () => {
  ReactGA.event({
    category: 'Home',
    action: 'click',
    label: `Home - Go to english`
  })
}

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
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
          View in English
        </ButtonLink>

        <Author language="ar" />
      </GridTemplate>
    </Layout>
  )
}

export default IndexPage
