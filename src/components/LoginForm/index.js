import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginPage,
  LoginFormContainer,
  LogoFormLogo,
  LogoContainer,
  ErrorMessage,
} from './styledComponents'
import ButtonComponent from '../commonComponents/ButtonComponent'
import InputComponent from '../commonComponents/InputComponent'

const strings = {
  userNamePlaceholderText: 'user name',
  userPasswordPlaceholderText: 'password',
  logoImageAltText: 'logo',
  userNameLabelText: 'USERNAME',
  userPasswordLabelText: 'PASSWORD',
  loginButtonText: 'Login',
}

const logoSrc = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

class LoginForm extends Component {
  state = {
    userName: '',
    userPassword: '',
    showSubmitError: false,
    loginErrorMsg: '',
  }

  onChangeUserName = event => {
    const userName = event.target.value
    this.setState({userName})
  }

  onChangePassword = event => {
    const userPassword = event.target.value
    this.setState({userPassword})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {userName, userPassword} = this.state
    const userDetails = {username: userName, password: userPassword}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, loginErrorMsg: errorMsg})
  }

  renderLoginError = () => {
    const {showSubmitError, loginErrorMsg} = this.state

    return showSubmitError ? <ErrorMessage>{loginErrorMsg}</ErrorMessage> : null
  }

  render() {
    const buttonDetails = {
      buttonText: strings.loginButtonText,
      buttonType: 'submit',
    }

    const {userName, userPassword} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginPage>
        <LoginFormContainer onSubmit={this.onFormSubmit}>
          <LogoContainer>
            <LogoFormLogo src={logoSrc} alt={strings.logoImageAltText} />
          </LogoContainer>
          <InputComponent
            labelText={strings.userNameLabelText}
            type="text"
            placeholderText={strings.userNamePlaceholderText}
            onChangeInput={this.onChangeUserName}
            inputValue={userName}
          />
          <InputComponent
            labelText={strings.userPasswordLabelText}
            type="password"
            placeholderText={strings.userPasswordPlaceholderText}
            onChangeInput={this.onChangePassword}
            inputValue={userPassword}
          />
          <ButtonComponent buttonDetails={buttonDetails} />
          {this.renderLoginError()}
        </LoginFormContainer>
      </LoginPage>
    )
  }
}

export default LoginForm
