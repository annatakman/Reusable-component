import React from 'react'
import styled from "styled-components/macro"

const Container = styled.div`
margin-top: 12px;
color: ${props => props.color}
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

const HiddenRadio = styled.input.attrs({ type: "radio" })`
position: absolute;
opacity: 0;
`

const VisibleRadio = styled.div`
position: absolute;
top: 0;
left: 0;
height: 22px;
width: 22px;
border-radius: 50%;
cursor: pointer;
background: ${props => props.checked ? props.backgroundChecked : props.background};
`
const RadioButton = ({ title, id, name, value, color, background, backgroundChecked, className, checked, ...props }) => (
  <Container className={className} color={color}>
    {title && <Title>{title}</Title>}
    <Option for={id}> {value}
      <HiddenRadio type="radio" id={id} name={name} value={value} checked={checked} {...props} />
      <VisibleRadio background={background} backgroundChecked={backgroundChecked} checked={checked} />
    </Option>
  </Container>)

export const StyledRadioButton = ({ selectedId, ...props }) => {

  return (
    <RadioButton checked={selectedId === props.id} {...props} />
  )
}