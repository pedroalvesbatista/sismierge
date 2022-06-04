import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, CardContent, Card } from "@mui/material";


import { Area } from "./styles";
import Escopo1 from "../../components/Escopo1";


export const HomePage = () => {

  const storage = JSON.parse(localStorage.getItem("@sismierge/data"));

  const [loading, setLoading] = useState(true);
  const [mouseOnCard, setMouseOnCard] = useState(false);
  const [openStartInvet, setOpenStartInvet] = useState(false);
  const [ selectedScope, setSelectedScope] = useState("")
  const [idxCard, setIdxCard] = useState("");

 const scopeOption = ["Escopo 1", "Escopo 2", "Escopo 3"];

  const handleInventariacao = (e) => {
    e.stopPropagation();
    selectedScope === 0 && setOpenStartInvet(true);
  };

  return (
    <Area>
      {!loading ? (
        "Carregando..."
      ) : (
        <>
          <div className="d-flex justify-content-around justify-content-center mt-5 mb-5">
            {scopeOption?.map((item, index) => {
              return (
                <div>
                  <Card
                    className="d-flex  justify-content-center align-items-center"
                    style={{
                      width: 200,
                      backgroundColor: "#9c348c",
                      cursor: "pointer",
                    }}
                  >
                    <CardContent
                      onMouseEnter={() => {
                        setMouseOnCard(true);
                        setIdxCard(index);
                        setSelectedScope(index);
                      }}
                    >
                      <h1 className="text-light fs-3">{item}</h1>
                    </CardContent>
                  </Card>
                  {idxCard == index && mouseOnCard && (
                    <div
                      className="d-flex flex-column justify-content-between align-items-center mt-3"
                      onMouseLeave={() => setMouseOnCard(false)}
                    >
                      <Button
                        className="mt-1 mb-1"
                        variant="contained"
                        size="small"
                        color="success"
                      >
                        Baixar todas as NF
                      </Button>
                      <Button
                        onClick={handleInventariacao}
                        className="mt-1 mb-1"
                        variant="contained"
                        size="small"
                        color="success"
                      >
                        Iniciar Cálculo Inventariação
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <hr />
          <div className="d-flex justify-content-around mt-3">
            <Button variant="outlined" size="small" color="success">
              Dados Rastreáveis
            </Button>
            <Button variant="outlined" size="small" color="success">
              Fatores de Emissão
            </Button>
          </div>
         
            <Escopo1
              openStartInvet={openStartInvet}
              setOpenStartInvet={setOpenStartInvet}
            />
        </>
      )}
    </Area>
  );
};