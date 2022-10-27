/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'

export const Front = () => {
  return (
    <button type="button">
      <Link to="/back">Gå till baksidan</Link>
    </button>
  )
}

export default Link
