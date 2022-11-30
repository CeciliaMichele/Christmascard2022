/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: center;
`
export const Text = styled.p`
font-family: 'Great Vibes', cursive;
font-size: 40px;
color: white;
`

export const Container = styled.div`
width: 80%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
margin: 15px;
position: absolute;
top: 10%;

@media (min-width: 1025px) {
  width: 30%;
  }
  `