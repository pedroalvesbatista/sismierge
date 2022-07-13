import React, { useState } from "react";
import { escopo, inicial } from "../../constants/app/";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

import { Area, Container, Card, Text } from './styles'


export const Dashboard = () => {

  const totalAno = [
    {
      escopo: "Escopo 1",
      emission: [
        {ano: 2021, valor: 106174},
        {ano: 2022, valor: 58237},
      ]
    },
    {
      escopo: "Escopo 2",
      emission: [
        {ano: 2021, valor: 30324},
        {ano: 2022, valor: 48100},
      ]
    },
    {
      escopo: "Escopo 3",
      emission: [
        {ano: 2021, valor: 36462},
        {ano: 2022, valor: 25172},
      ]
    }
  ]

  const handlePercentYear = (data) => {
    const isCrease = data[0]?.valor > data[1]?.valor
    if (isCrease) {
      
    } else {
      
    }
  }

  return (
    <Area>
      <Container column>
        <Text weight="600" size="18" mb="10px"> Somatório total das emissões de escopo </Text>
        <Container>
          {totalAno.map((item, index) => (
            <Card width="200px" column key={index}>  
              <Text size="16"> {item.escopo} </Text>
              <Text weight="600" size="24"> {item.emission[1].valor.toLocaleString()} </Text>
            </Card>
          ))}
        </Container>
      </Container>
    </Area>
  );
};
