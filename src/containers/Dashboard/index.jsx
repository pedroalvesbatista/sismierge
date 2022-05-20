import React, { useState } from "react";
import { escopo, inicial } from "../../constants/app/";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import  {Select, MenuItem, SelectChangeEvent, InputLabel, FormControl } from '@mui/material';

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

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100">
      {!loading ? (
        "Carregando..."
      ) : (
        <>
          <h1 className="text-center fs-1">Dashbord - Ambiente!</h1>

          {/* <h3 className="text-center p-3">Indicadores</h3> */}
          <div className="d-flex justify-content-around flex-wrap">
            <div style={{ width: 530 }}  className="m-4">
              <FormControl style={{ width: 130 }}>
               <InputLabel id="demo-simple-select-label">Indicador</InputLabel>
              <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
           <MenuItem value={10}>Área total construída da empresa</MenuItem>
          <MenuItem value={20}>Número de funcionários da empresa no ano inventariado</MenuItem>
          <MenuItem value={31}>Escolha o ano do inventário (abrir lista contendo ano(s) que foi inventariado)</MenuItem>
          <MenuItem value={32}>Produção total do ano inventariado</MenuItem>
          <MenuItem value={33}>Consumo de energia e suas quantidades por equipamentos </MenuItem>
          <MenuItem value={34}>Meta de redução para o escopo 1 </MenuItem>
          <MenuItem value={35}>Meta de redução para o escopo 2 </MenuItem>
          <MenuItem value={36}>Meta de redução para o escopo 3 </MenuItem>
        </Select>
        </FormControl>
              <BarChart chartData={totalEmpreData} />
            </div>
            <div style={{ width: 330 }} className="m-4">
              <PieChart chartData={totalEmpreData} />
            </div>
            <div style={{ width: 530 }}  className="m-4">
              <BarChart chartData={consumo} />
            </div>
  
            <div style={{ width: 530 }} className="m-4">
              <LineChart chartData={funcionariosData} />
            </div>
  
          </div>
        </>
      )}
    </div>
  );
};
