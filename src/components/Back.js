/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'

export const Back = () => {
  return (
    <div>
      <button type="button">
        <Link to="/front">Gå till framsidan</Link>
      </button>
    </div>
  )
}

export default Link