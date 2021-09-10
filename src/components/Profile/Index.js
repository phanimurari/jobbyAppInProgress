import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import {
  ProfileDetailsContainer,
  ProfileImage,
  ProfileName,
  ProfileShortBio,
  ProfileDetailsRetryButton,
  ProfileDetailsNoDetailsContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const apiUrl = 'https://apis.ccbp.in/profile'

const strings = {
  failureProfileContainerButtonText: 'Retry',
}

const profileContainerBgImage =
  'https://assets.ccbp.in/frontend/react-js/profile-bg.png'

class Profile extends Component {
  state = {apiStatus: apiStatusConstants.initial, profileDetails: {}}

  componentDidMount() {
    this.getProfileDetails()
  }

  getFormattedData = data => ({
    name: data.name,
    profileImageUrl: data.profile_image_url,
    shortBio: data.short_bio,
  })

  getProfileDetails = async () => {
    console.log('iam called')

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    console.log(response, 'failure')
    if (response.ok) {
      const fetchedData = await response.json()
      const formattedData = this.getFormattedData(fetchedData.profile_details)
      this.setState({
        profileDetails: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderProfileDetailsView = () => {
    const {profileDetails} = this.state
    const {profileImageUrl, name, shortBio} = profileDetails

    return (
      <ProfileDetailsContainer
        profileContainerBgImage={profileContainerBgImage}
      >
        <ProfileImage src={profileImageUrl} />
        <ProfileName>{name}</ProfileName>
        <ProfileShortBio>{shortBio}</ProfileShortBio>
      </ProfileDetailsContainer>
    )
  }

  renderFailureView = () => (
    <ProfileDetailsNoDetailsContainer>
      <ProfileDetailsRetryButton onClick={this.getProfileDetails}>
        {strings.failureProfileContainerButtonText}
      </ProfileDetailsRetryButton>
    </ProfileDetailsNoDetailsContainer>
  )

  renderLoadingView = () => (
    <ProfileDetailsNoDetailsContainer testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProfileDetailsNoDetailsContainer>
  )

  renderProfileDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProfileDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {profileDetails} = this.state

    return this.renderProfileDetails()
  }
}

export default Profile
