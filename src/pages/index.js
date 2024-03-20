import React from 'react'
import ReactGA from 'react-ga'

import ButtonLink from 'components/ButtonLink'
import Layout from 'components/Layout'
import GridTemplate from 'components/GridTemplate'
import BlogList from 'components/BlogList'
import Author from 'components/Author'

const trackLanguageClick = () => {
  ReactGA.event({
    category: 'Home',
    action: 'click',
    label: `Home - Go to arabic`
  })
}

const IndexPage = () => {
  return (
    <Layout>
      <GridTemplate>
        <ButtonLink
          to="/ar/"
          title="View in arabic"
          onClick={() => trackLanguageClick()}>
          عرض باللغة العربية
        </ButtonLink>

        <Author />
        <BlogList />
      </GridTemplate>
    </Layout>
  )
}

export default IndexPage
