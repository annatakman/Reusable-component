import React from 'react'
import styled from "styled-components/macro"

const Container = styled.div`
margin-top: 12px;
`

const Title = styled.h1`
font-size: 22px;
`
const Option = styled.label`
display: block;
position: relative;
padding-left: 35px;
margin-bottom: 12px;
cursor: pointer;
font-size: 18px;
`

const HiddenRadio = styled.input.attrs({ type: "radiobutton" })`
position: absolute;
opacity: 0;
cursor: pointer;
`

const VisibleRadio = styled.div`
position: absolute;
top: 0;
left: 0;
height: 22px;
width: 22px;
border-radius: 50%;
background-color: #ddcbff;
`


export const RadioButton = ({ title, id, name, value, className }) => {

  return (
    <Container className={className}>
      {title && <Title>{title}</Title>}
      <Option for={id}>{value}
        <HiddenRadio type="radio" id={id} name={name} value={value} />
        <VisibleRadio></VisibleRadio>
      </Option>
    </Container>
  )
}