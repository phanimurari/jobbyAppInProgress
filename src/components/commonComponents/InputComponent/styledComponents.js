import styled from 'styled-components'

const colors = {
  labelColor: `#f8fafc`,
  loginFormInputColor: '#cbd5e1',
}

export const LoginFormLabel = styled.label`
  color: ${colors.labelColor};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  margin-top: 15px;
`

export const LoginFormInputField = styled.input`
  color: ${colors.loginFormInputColor};
  background-color: #272727;
  font-size: 14px;
  height: 40px;
  border: 1px solid #475569;
  border-radius: 2px;
  margin-top: 8px;
  margin-bottom: 15px;
  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
  outline: none;
`
