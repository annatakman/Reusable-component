import React, { useState } from 'react'
import styled from "styled-components/macro"
import { StyledRadioButton } from "./StyledRadioButton"

const Main = styled.section`
width: fit-content;
margin: auto;
padding: 40px;
border-radius: 18px;
background: #4a1e9e;
`

export const App = () => {
  const [selectedId, setSelectedId] = useState()

  const handleRadioButtonChange = (event) => {
    setSelectedId(event.target.id)
    console.log(event.target.id)
  }

  return (
    <Main>
      < StyledRadioButton
        title="What gender do you identify with?"
        id="female"
        name="gender"
        value="Female"
        selectedId={selectedId}
        onChange={handleRadioButtonChange}
        background="#ddcbff"
        backgroundChecked="#9e861e"
        color="#ddcbff"
      />
      < StyledRadioButton
        id="male"
        name="gender"
        value="Male"
        selectedId={selectedId}
        onChange={handleRadioButtonChange}
        background="#ddcbff"
        backgroundChecked="#9e861e"
        color="#ddcbff"
      />
      < StyledRadioButton
        id="other"
        name="gender"
        value="Other"
        selectedId={selectedId}
        onChange={handleRadioButtonChange}
        background="#ddcbff"
        backgroundChecked="#9e861e"
        color="#ddcbff"
      />
    </Main>
  )
}
