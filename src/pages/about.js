import React from 'react'
import ReactGA from 'react-ga'

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
  return (
    <Layout>
      <GridTemplate>
        <ButtonLink
          to="/ar/about/"
          title="View in english"
          onClick={() => trackLanguageClick()}>
            عرض باللغة العربية
        </ButtonLink>

        <Author fullText={true} />
      </GridTemplate>
    </Layout>
  )
}

export default IndexPage
