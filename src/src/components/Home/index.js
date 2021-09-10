import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import {
  HomeContainer,
  HomePageContainer,
  HomePageHeading,
  HomePageParagraph,
  StyledLink,
} from './styledComponents'
import ButtonComponent from '../commonComponents/ButtonComponent'

const strings = {
  homePageHeading: 'Find The Job That Fits Your Life',
  homePageParagraphOne:
    'Millions of people are searching for jobs,salary,information and company reviews.',
  homePageParagraphTwo: 'Find the job that fits your ability and potential',
  buttonText: 'Find Jobs',
}

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  const buttonDetails = {
    buttonText: strings.buttonText,
    buttonType: 'button',
  }

  return (
    <HomeContainer>
      <Header />
      <HomePageContainer>
        <HomePageHeading>{strings.homePageHeading}</HomePageHeading>
        <HomePageParagraph>{strings.homePageParagraphOne}</HomePageParagraph>
        <HomePageParagraph>{strings.homePageParagraphTwo}</HomePageParagraph>
        <StyledLink to="/jobs">
          <ButtonComponent buttonDetails={buttonDetails} />
        </StyledLink>
      </HomePageContainer>
    </HomeContainer>
  )
}

export default Home
