import styled from 'styled-components'

import media from 'styled-media-query'

const colors = {
  profileNameColor: '#6366f1',
  profileShortBioColor: '#2c364c',
}

export const ProfileDetailsContainer = styled.div`
  padding: 15px;
  background-image: url(${props => props.profileContainerBgImage});
  background-size: cover;
  border-radius: 15px;
  max-width: 350px;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const ProfileImage = styled.img``

export const ProfileName = styled.p`
  color: ${colors.profileNameColor};
`

export const ProfileShortBio = styled.p`
  color: ${colors.profileShortBioColor};
`

export const ProfileDetailsNoDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  height: 300px;
`

export const ProfileDetailsRetryButton = styled.button`
  color: #ffffff;
  background-color: #6366f1;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  height: 40px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  padding-left: 15px;
  padding-right: 15px;
`
