/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: center;
margin: 15px;

`
export const Text = styled.p`
font-family: 'Great Vibes', cursive;
font-size: 40px;
color: white;
`

export const Container = styled.div`
width: 80%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
margin: 15px;


@media (min-width: 1025px) {
  width: 30%;
  }
  `

export const ProfileImage = styled.img`
width: 90%;
@media (min-width: 1025px) {
  width: 80%;
  }
`