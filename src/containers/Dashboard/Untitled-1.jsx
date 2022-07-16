import React, { useState } from "react";
import { TiArrowUpThick, TiArrowDownThick } from 'react-icons/ti'
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
      ],
      categories: [
        {
          title: "Combustão móvel",
          items: [
            {key: "Emissões (tCO²e)", value: "1512.773"},
            {key: "Emissões de CO² biogênico (t)", value: "1512.773"}
          ]
        }
      ]
    },
    {
      escopo: "Escopo 2",
      emission: [
        {ano: 2021, valor: 30324},
        {ano: 2022, valor: 48100},
      ],
      categories: [
        {
          title: "Combustão móvel",
          items: [
            {key: "Emissões (tCO2e)", value: "1512773"}
          ]
        }
      ]
    },
    {
      escopo: "Escopo 3",
      emission: [
        {ano: 2021, valor: 36462},
        {ano: 2022, valor: 25172},
      ],
      categories: [
        {
          title: "Combustão móvel",
          items: [
            {key: "Emissões (tCO2e)", value: "1512773"}
          ]
        }
      ]
    }
  ]

  const handlePercentYear = (data) => {
    const isCrease = data[1]?.valor > data[0]?.valor
    if (isCrease) {
      let result = ((data[1]?.valor - data[0]?.valor) / data[0]?.valor) * 100
      return <Text size="12" padding={5} bg="#FFF0EF" color="#F2424C"> <TiArrowUpThick /> +{result.toFixed(0)}% </Text>
    } else {
      let result = ((data[1]?.valor - data[0]?.valor) / data[0]?.valor) * 100
      return <Text size="12" padding={5} bg="#ECFBF6" color="#1ECF9F"> <TiArrowDownThick /> {result.toFixed(0)}% </Text>
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
              {handlePercentYear(item.emission)}
              <Text size="12" color="#5e889e"> Comparando ao ano atenrior </Text>
            </Card>
          ))}
        </Container>
      </Container>
    </Area>
  );
};
