import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {GiSuitcase} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {
  NavBarMobileContainer,
  NavBarButtonsContainer,
  NavBarMediumDeviceContainer,
  Logo,
  NavBarMediumDeviceButtonContainer,
  StyledLink,
} from './styledComponents'
import ButtonComponent from '../commonComponents/ButtonComponent'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const strings = {
  buttonText: 'Logout',
  buttonType: 'button',
}

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const buttonDetails = {
    buttonText: strings.buttonText,
    buttonType: strings.buttonType,
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <NavBarMobileContainer>
          <Link to="/">
            <Logo src={websiteLogo} alt="website logo" />
          </Link>
          <NavBarButtonsContainer>
            <Link to="/">
              <AiFillHome size="35px" color="white" />
            </Link>
            <Link to="/">
              <GiSuitcase size="35px" color="white" />
            </Link>
            <FiLogOut size="35px" onClick={onClickLogout} color="white" />
          </NavBarButtonsContainer>
        </NavBarMobileContainer>

        <NavBarMediumDeviceContainer>
          <li>
            <Link to="/">
              <Logo src={websiteLogo} alt="website logo" />
            </Link>
          </li>
          <NavBarMediumDeviceButtonContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/jobs">Jobs</StyledLink>
          </NavBarMediumDeviceButtonContainer>
          <li onClick={onClickLogout}>
            <ButtonComponent buttonDetails={buttonDetails} />
          </li>
        </NavBarMediumDeviceContainer>
      </div>
    </nav>
  )
}

export default withRouter(Header)
