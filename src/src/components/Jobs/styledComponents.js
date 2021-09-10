import styled from 'styled-components'

import media from 'styled-media-query'

const colors = {
  jobsContainerBackgroundColor: '#000000',
}

export const JobsContainer = styled.div`
  background-color: ${colors.jobsContainerBackgroundColor};
  min-height: 100vh;
`
