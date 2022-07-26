import React from 'react'
import styled from 'styled-components'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { admin } from '../../constants/tailwind/colors'

export default function DashboardEscopo({ numEqui, numBio }) {
  return (
    <Area>
      <Card>
        <Text> Emissões totais em CO2 equivalente </Text>
        <Text title={true}> {numEqui} </Text>
      </Card>
      <Divs />
      <Card>
        <Text> Emissões totais em CO2 biogênico </Text>
        <Text title={true}> {numBio} </Text>
      </Card>
    </Area>
  )
}

const Area = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${admin.cinza};
  border-radius: 5px;
  padding: 10px;
  width: 40vw;
  height: 10vh;
`
const Divs = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${admin.cinza};
  margin: 0px 10px;
`
const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50px;
  flex: 1;
`
const Text = styled.span`
  font-size: ${({title}) => title ? "1.5" : "1"}vw;
  font-weight: ${({title}) => title ? "bold" : "normal"};
`
