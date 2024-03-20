import React from 'react'
import ReactGA from 'react-ga'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { getActiveTheme } from 'utils/themes'

import Layout from 'components/Layout'
import Content from 'components/Content'
import GridTemplate from 'components/GridTemplate'
import BlogList from 'components/BlogList'

const trackProjectsClick = () => {
  ReactGA.event({
    category: '404',
    action: 'click',
    label: `404 - Go to Projects`,
  })
}

const trackBlogClick = () => {
  ReactGA.event({
    category: '404',
    action: 'click',
    label: `404 - Go to blog`,
  })
}

const NotFoundPage = () => {
  return (
    <Layout>
      <GridTemplate>
        <Content>
          <h1>
          There's nothing here...
            <span className='small' role='img' aria-label='Emoji assustado'>
              😱
            </span>
          </h1>

          <p className='support-title'>
          But don't worry!
            <span className='small' role='img' aria-label='Emoji feliz'>
              😄
            </span>
          </p>

          <ul>
            <li>
            In the meantime you can take a look at my{' '}
              <AniLink
                cover
                bg={getActiveTheme()}
                direction='down'
                duration={1}
                to='/Projects/'
                onClick={() => trackProjectsClick()}
              >
              personal projects
              </AniLink>
              ?
            </li>

            <li>
            Or even{' '}
              <AniLink
                cover
                bg={getActiveTheme()}
                direction='down'
                duration={1}
                to='/blog/'
                onClick={() => trackBlogClick()}
              >
                read my blog?
              </AniLink>
              ?
            </li>
          </ul>
        </Content>

        <BlogList />
      </GridTemplate>
    </Layout>
  )
}

export default NotFoundPage
