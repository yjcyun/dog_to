import { Link } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const StoreListItem = ({ data: { slug, image, name, category } }) => {
  return (
    <StoreListItemWrapper>
      <Link to={`/stores/${slug}`} className='store-list'>
        <div className='store-list-image'>
          <Image fluid={image.childImageSharp.fluid} />
        </div>
        <div className='store-list-detail header'>
          <h4 className='header'>{name}</h4>
          <h5 className='text-red header'>{category}</h5>
        </div>
      </Link>
    </StoreListItemWrapper>
  )
}

const StoreListItemWrapper = styled.li`
 .store-list {
    display: grid;
    grid-template-columns: 1fr 2fr;
    text-decoration: none;
    background: var(--bcg-grey-2);
    padding: 1rem 0;
    border-bottom: 1px solid var(--light-grey);
    transition: 0.2s all ease;
    &:hover {
      background: var(--white);
    }
  }
  .store-list-detail{
    margin-left: 1rem;
    h4 {
      font-size: 1.2rem;
      margin-bottom: 0.7rem;
    }
    h5 {
      font-size: 1.1rem;
    }
  }
`

export default StoreListItem
