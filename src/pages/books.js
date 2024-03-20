import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from 'components/Layout'
import Books from 'components/Books'

const BooksJsonQuery = graphql`
  query {
    allBooksJson {
      edges {
        node {
          id,
          path
          title
          date
          description
          rate
        }
      }
    }
  }
`

const BooksPage = () => {
  const data = useStaticQuery(BooksJsonQuery)
  
  return (
    <Layout>
      <Books content={data.allBooksJson.edges} />
    </Layout>
  )
}

export default BooksPage
