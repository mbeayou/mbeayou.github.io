import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import GridTemplate from 'components/GridTemplate'
import Content from 'components/Content'
import DisqusWrapper from 'components/DisqusWrapper'

import PostHeader from 'components/PostHeader'
import PostNav from 'components/PostNav'
import GoogleAds from 'components/Ads'

const BlogPost = (props) => {
  const post = props.data.markdownRemark
  const next = props.pageContext.next
  const previous = props.pageContext.previous

  return (
    <Layout>

      <GridTemplate>
        <div itemScope itemType="http://schema.org/Article">
          <PostHeader
            image={post.frontmatter.image}
            tags={post.frontmatter.tags}
            date={post.frontmatter.date}
            title={post.frontmatter.title}
            timeToRead={post.timeToRead}
          />
          <Content>
            <div itemProp="articleBody" dangerouslySetInnerHTML={{ __html: post.html }} />
          </Content>
          <PostNav previous={previous} next={next} />
          <DisqusWrapper title={post.frontmatter.title} slug={post.fields.slug} />
        </div>
      </GridTemplate>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(locale: "en", formatString: "DD - MMMM - YYYY")
        description
        title
        tags

      }
      timeToRead
    }
  }
`
