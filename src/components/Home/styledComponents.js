import styled from 'styled-components'
import {Link} from 'react-router-dom'

import media from 'styled-media-query'

const colors = {
  white: '#ffffff',
}

const imageUrls = {
  large: 'https://assets.ccbp.in/frontend/react-js/home-lg-bg.png',
  small: 'https://assets.ccbp.in/frontend/react-js/home-sm-bg.png',
}

export const HomeContainer = styled.div`
  height: 100vh;
  background-color: black;
`

export const HomePageContainer = styled.div`
  ${media.lessThan('medium')`
   background-image: url(${imageUrls.small});
  `}
  ${media.greaterThan('medium')`
    background-image: url(${imageUrls.large});
    padding-top: 9%;
  `}
  display: flex;
  flex-direction: column;
  background-size: cover;
  padding: 15px;
  height: 90%;
`

export const HomePageHeading = styled.h1`
  ${media.lessThan('medium')`
    font-size: 40px;
  `}
  ${media.greaterThan('medium')`
    font-size: 60px;
  `}

  color: ${colors.white};
`

export const HomePageParagraph = styled.p`
  ${media.lessThan('medium')`
    font-size: 20px;
  `}
  ${media.greaterThan('medium')`
    font-size: 30px;
  `}  
  color: ${colors.white};
  margin: 5px;
`

export const StyledLink = styled(Link)`
  width: 100px;
`
