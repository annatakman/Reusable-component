import React from 'react'
import styled from "styled-components/macro"
import { RadioButton } from "./RadioButton"

const StyledRadioButton = styled(RadioButton)`
color: #ddcbff;
`

const Main = styled.section`
width: fit-content;
margin: auto;
padding: 40px;
border-radius: 18px;
background: #4a1e9e;
`

export const App = () => {
  return (
    <Main>
      < StyledRadioButton
        title="What gender do you identify with?"
        id="female"
        name="gender"
        value="Female"
      />
      < StyledRadioButton
        id="male"
        name="gender"
        value="Male"
      />
      < StyledRadioButton
        id="other"
        name="gender"
        value="Other"
      />
    </Main>
  )
}
