/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper } from 'components/GlobalStyling'

export const Back = () => {
  return (
    <Wrapper>
      <Container>
        <p>god jul</p>
        <button type="button">
          <Link to="/">Framsida</Link>
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

button {
text-align: center;
display: flex;
justify-content: center;
width: 50%;
border: none;
background-color: transparent;
}
`

export default Link