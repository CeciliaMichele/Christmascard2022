/* eslint-disable linebreak-style */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Front } from 'components/Front';
import { Back } from 'components/Back';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/front" element={<Front />} />
        <Route path="/back" element={<Back />} />
      </Routes>
    </BrowserRouter>
  )
}
