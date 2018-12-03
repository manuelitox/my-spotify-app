import React from 'react'

import StyledFooter from './styles'
import { ReactComponent as LoveIcon } from 'svgs/love.svg'
import { ReactComponent as SpotifyIcon } from 'svgs/spotify.svg'

const Footer = () => (
  <StyledFooter>
    <p>
      Powered by <SpotifyIcon />. Developed with <LoveIcon /> <a href="https://github.com/manuelitox" target="_blank" rel="noopener noreferrer">Manuel</a>.
    </p>
  </StyledFooter>
)

export default Footer