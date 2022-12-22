/* eslint-disable linebreak-style */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Front } from 'components/Front';
import { Back } from 'components/Back';
// import styled from 'styled-components'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/Back" element={<Back />} />
      </Routes>
    </BrowserRouter>
  )
}
