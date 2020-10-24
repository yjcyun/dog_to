import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout/Layout'
import FindStores from '../components/stores/FindStores'
import Subscribe from '../components/news/Subscribe'
import StoreThumbnailContainer from '../components/stores/StoreThumbnailContainer'
import LoadMore from '../components/default/LoadMore'
import FeaturedStores from '../components/stores/FeaturedStores'

export const query = graphql`
  {
    stores: allMdx( 
      sort: {fields: frontmatter___title, order: ASC}, 
      filter: {fileAbsolutePath: {regex: "/(stores)/"}}) {
      nodes {
        id
        body
        frontmatter {
          address
          author
          category
          date(fromNow: true)
          name
          imageCredit
          rating
          slug
          title
          website
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      totalCount
    }
  }
`

const Stores = () => {
  const { stores: { nodes, totalCount} } = useStaticQuery(query);

  return (
    <Layout>
      <div className='page-padding'>
        <FeaturedStores />
      </div>
      <FindStores nodes={nodes} totalCount={totalCount} />
      <div className='page-padding'>
        <Subscribe
          hideBtn
          heading="Know what you're looking for already?"
          placeholder='Find a business by name...'
        />
        <StoreThumbnailContainer nodes={nodes} />
        <LoadMore />
      </div>
    </Layout>
  )
}

export default Stores