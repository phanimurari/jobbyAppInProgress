import {StyledButtonComponent} from './styledComponents'

const ButtonComponent = props => {
  const {buttonDetails} = props
  const {buttonText, buttonType} = buttonDetails

  return (
    <StyledButtonComponent type={buttonType === 'submit' ? 'submit' : 'button'}>
      {buttonText}
    </StyledButtonComponent>
  )
}

export default ButtonComponent
