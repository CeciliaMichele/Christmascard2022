/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Front = () => {
  return (
    <>
      <Container>
        <h1>god jul</h1>
      </Container>
      <button type="button">
        <Link to="/back">Gå till baksidan</Link>
      </button>
    </>
  )
}

const Container = styled.div`
width: 40%;
height: auto;
border: solid gray;
`

export default Link
