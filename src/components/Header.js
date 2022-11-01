/* eslint-disable linebreak-style */
import React from 'react'
import background from 'images/background.jpg'
import styled from 'styled-components'

export const Header = () => {
  return (
    <div>
      <Background>
        <img src={background} alt="" />
      </Background>
    </div>
  )
}

const Background = styled.div`
background-image: 40%;
`