import {LoginFormLabel, LoginFormInputField} from './styledComponents'

const InputComponent = props => {
  const {labelText, type, placeholderText, onChangeInput, inputValue} = props

  return (
    <>
      <LoginFormLabel>{labelText}</LoginFormLabel>
      <LoginFormInputField
        type={type}
        placeholder={placeholderText}
        onChange={onChangeInput}
        value={inputValue}
      />
    </>
  )
}

export default InputComponent
