import React from 'react'
import styled from "styled-components/macro"

const Container = styled.div`
margin-top: 12px;

input {
  margin-right: 8px;
}
`
const Option = styled.div`
display: flex;
align-items: center;
`

const Title = styled.h1`
font-size: 16px;
`

export const RadioButton = ({ title, id, name, value, className }) => {
  return (
    <Container className={className}>
      {title && <Title>{title}</Title>}
      <Option>
        <input type="radio" id={id} name={name} value={value}></input>
        <label for={id}>{value}</label>
      </Option>
    </Container>
  )
}