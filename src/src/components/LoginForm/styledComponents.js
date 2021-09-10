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

export const LoginFormInputField = styled.input`
  color: ${colors.loginFormInputColor};
  background-color: #272727;
  font-size: 14px;
  height: 40px;
  border: 1px solid #475569;
  border-radius: 2px;
  margin-top: 8px;
  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
  outline: none;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const LogoFormLogo = styled.img`
  width: 162px;
  margin-bottom: 12px;
`

export const LoginFormLabel = styled.label`
  color: ${colors.labelColor};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  margin-top: 15px;
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
