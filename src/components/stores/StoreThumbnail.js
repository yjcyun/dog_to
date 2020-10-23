import { Link } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const StoreThumbnail = ({ detail }) => {
  return (
    <StoreThumbnailWrapper>
      <Link to={detail.slug}>
        <div className='store-thumbnail-container'>
          <Image fluid={detail.image.childImageSharp.fluid} />

        </div>
        <div className='store-thumbnail-header header'>Petsmart</div>
      </Link>
    </StoreThumbnailWrapper>
  )
}

const StoreThumbnailWrapper = styled.div`
  a:hover .store-thumbnail-header {
    color: var(--red);
  }
  .store-thumbnail-container{
    margin-bottom: -2rem;
  }
  .store-thumbnail-header {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--white);
    max-width: 90%;
    font-weight: 800;
    font-size: 2rem;
  }
`

export default StoreThumbnail
