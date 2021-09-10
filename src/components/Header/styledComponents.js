import styled from 'styled-components'
import {Link} from 'react-router-dom'

import media from 'styled-media-query'

export const NavBarMobileContainer = styled.div`
  ${media.lessThan('medium')`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
  ${media.greaterThan('medium')`
    display : none
  `}
`

export const NavBarButtonsContainer = styled.div`
  ${media.lessThan('medium')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
  `}
  ${media.greaterThan('medium')`
    display : none
  `}
`
export const Logo = styled.img`
  ${media.lessThan('medium')`
  width: 120px;
`}
  ${media.greaterThan('medium')`
    width : 180px
`}
list-style: none;
`

export const NavBarMediumDeviceContainer = styled.ul`
  ${media.lessThan('medium')`
    display : none
  `}
  ${media.greaterThan('medium')`
    display : flex;
    justify-content: space-between;
    align-items:center;
  `}
  list-style: none;
`

export const NavBarMediumDeviceButtonContainer = styled.li`
  list-style: none;
  display: flex;
`

export const StyledLink = styled(Link)`
  color: #ffffff;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  list-style: none;
`
