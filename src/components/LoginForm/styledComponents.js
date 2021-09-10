import styled from 'styled-components'

const colors = {
  black: '#000000',
  formContainerColor: '#2c364c',
  labelColor: `#f8fafc`,
  loginFormInputColor: '#cbd5e1',
  errorMessageColor: '#ff0b37',
}

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.black};
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${colors.formContainerColor};
  width: 85%;
  border-radius: 8px;
  padding: 24px;
  max-width: 450px;
  min-height: 380px;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const LogoFormLogo = styled.img`
  width: 162px;
  margin-bottom: 12px;
`

export const ErrorMessage = styled.p`
  align-self: center;
  color: ${colors.errorMessageColor};
  font-size: 12px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.33;
  margin-top: 15px;
`
