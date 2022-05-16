import React, { useState } from "react";
import { escopo, inicial } from "../../constants/app/";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

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
    esconlhaAno:2016
  },
  {
    id: 1,
    ano: 2017,
    totalEmpre: 8400,
    funcionarios: 23,
    esconlhaAno:2016
  },
  {
    id: 2,
    ano: 2016,
    totalEmpre: 867500,
    funcionarios: 7723,
    esconlhaAno:2016
  },
  {
    id: 3,
    ano: 2017,
    totalEmpre: 96000,
    funcionarios: 8723,
    esconlhaAno:2016
  },
  {
    id: 4,
    ano: 2018,
    totalEmpre: 56000,
    funcionarios: 923,
    esconlhaAno:2016
  },
  {
    id: 5,
    ano: 2019,
    totalEmpre: 80000,
    funcionarios: 1023,
    esconlhaAno:2016
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

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100">
      {!loading ? (
        "Carregando..."
      ) : (
        <>
          <h1 className="text-center fs-1">Dashbord - Ambiente!</h1>

          <h3 className="text-center p-3">Indicadores</h3>
          <div className="d-flex justify-content-around flex-wrap">
            <div style={{ width: 530 }}  className="m-4">
              <BarChart chartData={totalEmpreData} />
            </div>

            <div style={{ width: 530 }} className="m-4">
              <LineChart chartData={funcionariosData} />
            </div>

            <div style={{ width: 530 }} className="m-4">
              <PieChart chartData={totalEmpreData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
