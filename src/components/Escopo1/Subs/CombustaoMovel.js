import React from "react";

import { style } from "../util";
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

const CombustaoMovel = ({
  nextEsco1Button,
  handleChangeEsco1,
  curentIdxEsco1,
  setCurentIdxEsco1,
}) => {
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
              variant="contained"
              size="large"
              onClick={handleChangeEsco1}
            >
              Voltar
            </Button>
          </div>
        </div>
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
          <div>
            <div className="mb-4 p-4 align-items-center">
              <FormControl>
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
            {curentIdxEsco1 === 0 ? (
              <>
                <div className="d-flex  justify-content-around ">
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
                </div>
                <div className="d-flex  justify-content-around mb-3 ">
                  <div className="m-2">
                    <h3>Ano da Frota</h3>
                    <TextField
                      id="ano-frota"
                      label="Digite o Ano da Frota..."
                      variant="outlined"
                    />
                  </div>
                  <div className="m-2">
                    <h3>Tipo da frota de veículos</h3>
                    <TextField
                      disabled
                      id="tipo-frota"
                      label="Digite Tipo da frota de veículos..."
                      variant="outlined"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div>
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
                  <h3>Descrição da Frota</h3>
                  <TextField
                    id="desc-fronta"
                    label="Digite descrição da Frota..."
                    variant="outlined"
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            <div className="mb-4">
              <FormControl>
                <FormLabel id="formLabelEscDetaCon">
                  Escolha o Detalhamento do consumo
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="formLabelEscDetaCon"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="escDetaAnual"
                    control={<Radio />}
                    label="Anual"
                  />
                  <FormControlLabel
                    value="escDetaMensal"
                    control={<Radio />}
                    label=" Mensal"
                  />
                </RadioGroup>
              </FormControl>
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