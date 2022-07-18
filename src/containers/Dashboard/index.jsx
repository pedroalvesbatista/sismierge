import React, { useState } from "react";
import { escopo, inicial } from "../../constants/app/";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import  {Select, MenuItem, SelectChangeEvent, InputLabel, FormControl } from '@mui/material';
import SelectArea from "../../components/Select";
import { Area, CardArea, Container } from "./styles";

const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

const data = [
  {
    id: 0,
    ano: 2016,
    totalEmpre: 8560,
    funcionarios: 83,
    esconlhaAno:2022
  },
  {
    id: 1,
    ano: 2017,
    totalEmpre: 8400,
    funcionarios: 23,
    esconlhaAno:2003
  },
  {
    id: 2,
    ano: 2016,
    totalEmpre: 867500,
    funcionarios: 7723,
    esconlhaAno:2002
  },
  {
    id: 3,
    ano: 2017,
    totalEmpre: 96000,
    funcionarios: 8723,
    esconlhaAno:2020
  },
  {
    id: 4,
    ano: 2018,
    totalEmpre: 56000,
    funcionarios: 923,
    esconlhaAno:2017
  },
  {
    id: 5,
    ano: 2019,
    totalEmpre: 80000,
    funcionarios: 1023,
    esconlhaAno:2014
  },
]

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  const [funcionariosData, setFuncionariosData] = useState({
    labels: data.map((data) => data.ano),
    datasets: [
      {
        label: "Número de funcionários da empresa no ano inventariado",
        data: data.map((data) => data.funcionarios),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#2a5179",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  });
  const [totalEmpreData, setTotalEmpreData] = useState({
    labels: data.map((data) => data.ano),
    datasets: [
      {
        label: "Área total construída da empresa",
        data: data.map((data) => data.totalEmpre),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#2a5179",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  });
  const [consumo, setConsumo] = useState({
    labels: data.map((data) => data.ano),
    datasets: [
      {
        label: "Consumo de energia e suas quantidades por equipamentos",
        data: data.map((data) => data.esconlhaAno),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#2a5179",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  });
const [age, setAge] = React.useState('');
  const handleChange = (event) => {
  setAge(event.target.value);
  };

  const indicadoresData= ["Área total construída da empresa", "Número de funcionários da empresa", "Produção total do ano inventariado", "Consumo de energia e suas quantidades por equipamentos", "Meta de redução para o escopo 1", "Meta de redução para o escopo 2", "Meta de redução para o escopo 3"]

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100">
      {!loading ? (
        "Carregando..."
      ) : (
        <Area>
          <Container >
            <SelectArea 
              title={"Escolha na lista quais indicadores você deseja"}
              item={indicadoresData}
              width="28%"

            />
            <SelectArea 
              title={"Ano inventariado"}
              item={["2019", "2020", "2021", "2022"]}
              width="10%"
              spaceLeft={"20px"}
            />
          </Container>
          <Container align="flex-start"  wrap>
            <Container width="50%" column align="none" wrap>
              <CardArea >
                <LineChart chartData={totalEmpreData} />
              </CardArea>
              <Container align="none" wrap>
                <CardArea width="48%">
                  <BarChart chartData={consumo} />
                </CardArea>
                <CardArea width="48%">
                  <BarChart chartData={consumo} />
                </CardArea>
              </Container>
            </Container>

            <Container  width="50%" column align="none" wrap>
              <CardArea >
                <BarChart chartData={consumo} />
              </CardArea>
              <Container align="none" wrap>
                <CardArea width="48%">
                  <PieChart chartData={funcionariosData} />
                </CardArea>
                <CardArea width="48%">
                  <PieChart chartData={totalEmpreData} />
                </CardArea>
              </Container>
            </Container>
          </Container>
        </Area>
      )}
    </div>
  );
};
