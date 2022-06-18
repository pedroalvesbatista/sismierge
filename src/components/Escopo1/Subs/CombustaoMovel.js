import React, { useState } from "react";

import { style } from "../../../utils/util";
import { tipoTransporteEsco1 } from "../selectionData";

import {
  FormControl,
  Box,
  Button,
  Typography,
  Modal,
  CardContent,
  Card,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import ShowInfo from "./ShowInfo";

const CombustaoMovel = ({
  nextEsco1Button,
  handleChangeEsco1,
  curentIdxEsco1,
  setCurentIdxEsco1,
}) => {
  const [showHowToFill, setShowHowToFill] = useState(false);
  const [detailsConsumption, setDetailsConsumption] = useState("");

  const handleDetailsConsumption = (event) => {
    setDetailsConsumption(event.target.value);
  };

  return (
    <Modal
      open={nextEsco1Button}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="d-flex justify-content-between mb-5 pt-3">
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Primeiro Escopo
            </Typography>

            <h2 className="mt-3 pb-2">Combutão Móvel</h2>
            <hr
              style={{
                width: 90,
                height: 8,
                backgroundColor: "#2cb29e",
              }}
            />
          </div>
          <div>
            <Button
              className="m-1"
              variant="outlined"
              size="large"
              onClick={() => {
                setShowHowToFill(!showHowToFill);
              }}
            >
              Como Preencher ?
            </Button>
            <Button
              className="m-1"
              variant="contained"
              size="large"
              onClick={handleChangeEsco1}
            >
              Voltar
            </Button>
          </div>
        </div>
        <ShowInfo
          showHowToFillCM={showHowToFill}
          setShowHowToFillCM={setShowHowToFill}
        />
        <div className="d-flex  justify-content-between mb-4">
          <div
            className="d-flex flex-column align-items-start"
            style={{ maxWidth: 280 }}
          >
            <div className=" mb-5">
              <h3
                style={{ color: "#953fc6" }}
                className="fs-3 font-weight-bold text-uppercase"
              >
                Selecione o tipo de transporte:
              </h3>
            </div>

            {tipoTransporteEsco1?.map((elem, idx) => {
              return (
                <div className="mb-3" id={idx}>
                  <Card
                    className="d-flex  justify-content-center align-items-center"
                    style={{
                      width: 200,
                      backgroundColor:
                        curentIdxEsco1 === idx ? "#4682B4" : "#ccc",
                      cursor: "pointer",
                    }}
                  >
                    <CardContent
                      onClick={() => {
                        setCurentIdxEsco1(idx);
                      }}
                    >
                      <h1 className="text-light fs-3">{elem}</h1>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
          <div className="d-flex flex-column">
            <div className="border border-warning p-2 ml-4 mb-5">
              <div className="mb-4 d-flex  justify-content-between">
                <div>
                  {" "}
                  <FormControl className="m-2">
                    <FormLabel id="formLabelEscTipoCal">
                      Escolha o tipo de Cálculo que deseja realizar
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="formLabelEscTipoCal"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="calTipoFFV"
                        control={<Radio />}
                        label="Cálculo por tipo e ano de fabricação da frota de veículos"
                      />
                      <FormControlLabel
                        value="calTipoC"
                        control={<Radio />}
                        label="Cálculo por tipo de combustível"
                      />
                      <FormControlLabel
                        value="calTipoD"
                        control={<Radio />}
                        label="Cálculo por Distância"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div>
                  <FormControl className="m-2">
                    <FormLabel id="formLabelEscDetaCon">
                      Escolha o Detalhamento do consumo
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="formLabelEscDetaCon"
                      name="row-radio-buttons-group"
                      value={detailsConsumption}
                      onChange={handleDetailsConsumption}
                    >
                      <FormControlLabel
                        value="Anual"
                        control={<Radio />}
                        label="Anual"
                      />
                      <FormControlLabel
                        value="Mensal"
                        control={<Radio />}
                        label=" Mensal"
                      />
                    </RadioGroup>
                  </FormControl>
                  {detailsConsumption === "Anual" && (
                    <div className="m-2">
                      <h3>Ano da Frota</h3>
                      <TextField
                        size="small"
                        id="consu-01"
                        label="Digite o ano da frota..."
                        variant="outlined"
                      />
                    </div>
                  )}
                  {detailsConsumption === "Mensal" && (
                    <div>
                      <div className="d-flex  justify-content-around">
                        <div className="m-2">
                          <h3>Janeiro</h3>
                          <TextField
                            size="small"
                            id="consu-01"
                            label="Digite seu consumo mensal..."
                            variant="outlined"
                          />
                        </div>
                        <div className="m-2">
                          <h3>Fevereiro</h3>
                          <TextField
                            size="small"
                            id="consu-02"
                            label="Digite seu consumo mensal..."
                            variant="outlined"
                          />
                        </div>
                        <div className="m-2">
                          <h3>Março</h3>
                          <TextField
                            size="small"
                            id="consu-03"
                            label="Digite seu consumo mensal..."
                            variant="outlined"
                          />
                        </div>
                        <div className="m-2">
                          <h3>Abril</h3>
                          <TextField
                            size="small"
                            id="consu-04"
                            label="Digite seu consumo mensal..."
                            variant="outlined"
                          />
                        </div>
                        <div className="m-2">
                          <h3>Maio</h3>
                          <TextField
                            size="small"
                            id="consu-05"
                            label="Digite seu consumo mensal..."
                            variant="outlined"
                          />
                        </div>
                        <div className="m-2">
                          <h3>Junho</h3>
                          <TextField
                            size="small"
                            id="consu-06"
                            label="Digite seu consumo mensal..."
                            variant="outlined"
                          />
                        </div>
                      </div>
                      <div className="d-flex  justify-content-around">
                        <div className="m-2">
                          <h3>Julho</h3>
                          <TextField
                            size="small"
                            id="consu-07"
                            label="Digite seu consumo mensal..."
                            variant="outlined"
                          />
                        </div>
                        <div className="m-2">
                          <h3>Agosto</h3>
                          <TextField
                            size="small"
                            id="consu-08"
                            label="Digite seu consumo mensal..."
                            variant="outlined"
                          />
                        </div>
                        <div className="m-2">
                          <h3>Setembro</h3>
                          <TextField
                            size="small"
                            id="consu-09"
                            label="Digite seu consumo mensal..."
                            variant="outlined"
                          />
                        </div>
                        <div className="m-2">
                          <h3>Outubro</h3>
                          <TextField
                            size="small"
                            id="consu-10"
                            label="Digite seu consumo mensal..."
                            variant="outlined"
                          />
                        </div>
                        <div className="m-2">
                          <h3>Novembro</h3>
                          <TextField
                            size="small"
                            id="consu-11"
                            label="Digite seu consumo mensal..."
                            variant="outlined"
                          />
                        </div>
                        <div className="m-2">
                          <h3>Dezembro</h3>
                          <TextField
                            size="small"
                            id="consu-13"
                            label="Digite seu consumo mensal..."
                            variant="outlined"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {curentIdxEsco1 === 0 ? (
                <>
                  <div className="d-flex  justify-content-around  mb-5">
                    <div className="m-2">
                      <h3>Registro da Frota</h3>
                      <TextField
                        id="regist-fronta"
                        label=" Digite o registro da frota..."
                        variant="outlined"
                      />
                    </div>
                    <div className="m-2">
                      <h3>Descrição da Frota</h3>
                      <TextField
                        id="desc-fronta"
                        label="Digite descrição da Frota..."
                        variant="outlined"
                      />
                    </div>
                    <div className="m-2">
                      <h3>Tipo da frota de veículos</h3>
                      <TextField
                        id="tipo-frota"
                        label="Digite Tipo da frota de veículos..."
                        variant="outlined"
                      />
                    </div>
                    <div className="m-2">
                      <h3>Ano da Frota</h3>
                      <TextField
                        id="ano-frota"
                        label="Digite o Ano da Frota..."
                        variant="outlined"
                      />
                    </div>
                  </div>
                </>
              ) : (curentIdxEsco1 === 1) |
                (curentIdxEsco1 === 2) |
                (curentIdxEsco1 === 3) ? (
                <div className="d-flex  justify-content-around">
                  <div className="mb-3">
                    <h3>
                      {curentIdxEsco1 === 1
                        ? "Registro da Frota de TREM"
                        : curentIdxEsco1 === 2
                        ? "Registro da Frota de Hidroviário"
                        : "Registro da Frota de Hidroviário"}
                    </h3>
                    <TextField
                      id="regist-fronta"
                      label="Digite o registro Frota ..."
                      variant="outlined"
                    />
                  </div>
                  <div className="mb-3">
                    <h3>Descrição da Frota</h3>
                    <TextField
                      id="desc-fronta"
                      label="Digite descrição da Frota..."
                      variant="outlined"
                    />
                  </div>
                  <div className="mb-3">
                    <h3>Tipo de Combustível</h3>
                    <TextField
                      id="tipo-combustivel"
                      label="Digite Tipo de Combustível..."
                      variant="outlined"
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="mt-5 mb-5 d-flex flex-column justify-content-end">
              <h3
                style={{ color: "#953fc6" }}
                className="fs-3 font-weight-bold text-uppercase"
              >
                Resultado das Emissões totais por combustão móvel
              </h3>
              <div className="mt-4 d-flex  justify-content-around ">
                <div className="m-2 d-flex align-items-center">
                  <h3>
                    Emissões totais em CO2 equivalente (toneladas métricas)
                  </h3>
                </div>
                <div className="m-2">
                  <h3>Totais em CO2</h3>
                  <TextField
                    disabled
                    id="total-co2"
                    label=""
                    variant="filled"
                  />
                </div>
              </div>
              <div className="mt-4 d-flex  justify-content-around ">
                <div className="m-2 d-flex align-items-center">
                  <h3>Emissões totais em CO2 biogênico (toneladas métricas)</h3>
                </div>
                <div className="m-2">
                  <h3>Totais em CO2</h3>
                  <TextField
                    disabled
                    id="total-co2"
                    label=""
                    variant="filled"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button variant="contained" size="large">
            Salvar
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CombustaoMovel;
