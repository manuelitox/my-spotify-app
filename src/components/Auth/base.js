import React, { Fragment } from 'react'

import theme from 'config/theme'
import Title from 'components/ArtistPage/Title/'
import PopUp from 'components/generic/PopUp/container'
import StyledPopUp from './styles'

const AuthPopUp = () => (
  <PopUp isOpen={ true } togglePopUp={ () => console.log('') } WithCloseButton={ false }>
    <Fragment>
      <Title color={ theme.blueDark } insidePopUp={ true }>Spotify Authorization</Title>
      <StyledPopUp>
        <a href={ `https://accounts.spotify.com/authorize?client_id=${ process.env.REACT_APP_CLIENT_ID }&redirect_uri=${ encodeURIComponent(process.env.REACT_APP_URL) }&scope=user-read-private%20user-read-email&response_type=token&state=123` }>Get Authorization</a>
        <p><small>You need to login into Spotify</small></p>
      </StyledPopUp>
    </Fragment>
  </PopUp>            
)

export default AuthPopUp