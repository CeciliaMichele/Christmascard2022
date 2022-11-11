/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bajs from '../images/bajs.jpg'
import { Wrapper } from './GlobalStyling'

export const Front = () => {
  return (
    <Wrapper>
      <Container>
        <ProfileImage src={bajs} alt="Picture of Cecilia" />
        <p>God jul</p>
        <button type="button">
          <Link to="/back">Baksida</Link>
        </button>
      </Container>
    </Wrapper>
  )
}

const Container = styled.div`
width: 40%;
height: auto;
border: solid gray;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
margin: 15px;
padding: 15px;
position: absolute;
top: 10%;

button {
display: flex;
justify-content: left;
width: 50%;
border: none;
background-color: transparent;
}
`
const ProfileImage = styled.img`
width:100%;
`

export default Link
