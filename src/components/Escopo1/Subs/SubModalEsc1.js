import React, {useState} from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Button,
  Typography,
  Modal,
  CardContent,
  Card,
  TextField,
} from "@mui/material";
import { style } from "../../../utils/util";
import {
  optionLandfilClassification,
  optionBiogasDestination,
  shippingYearData,
} from "../selectionData";

import RinkingCard from "./RinkingCard";


const SubModalEsc1 = ({
  shippingYear,
  setShippingYear,
  enterCompostData,
  setEnterCompostData,
  setEnterPercentageResidue,
  enterPercentageResidue,
  setEnterIncinerationData,
  enterIncinerationData,
  setCalculationOtherTools,
  calculationOtherTools,
}) => {
  const [subShippingYear, setSubShippingYear] = useState("");
  const [rinkinkPaperCA, setRinkinkPaperCA] = useState("");
  const [rinkinkPaperDB, setRinkinkPaperDB] = useState("");
  const [rinkinkWasteCA, setRinkinkWasteCA] = useState("");
  const [rinkinkWasteDB, setRinkinkWasteDB] = useState("");
  const [rinkinkWoodCA, setRinkinkWoodCA] = useState("");
  const [rinkinkWoodDB, setRinkinkWoodDB] = useState("");
  const [rinkinkGardenCA, setRinkinkGardenCA] = useState("");
  const [rinkinkGardenDB, setRinkinkGardenDB] = useState("");
  const [rinkinkRubberCA, setRinkinkRubberCA] = useState("");
  const [rinkinkRubberDB, setRinkinkRubberDB] = useState("");
  const [rinkinkSewageCA, setRinkinkSewageCA] = useState("");
  const [rinkinkSewageDB, setRinkinkSewageDB] = useState("");
  const [rinkinkFoodsCA, setRinkinkFoodsCA] = useState("");
  const [rinkinkFoodsDB, setRinkinkFoodsDB] = useState("");
  const [rinkinkDiapersCA, setRinkinkDiapersCA] = useState("");
  const [rinkinkDiapersDB, setRinkinkDiapersDB] = useState("");



  const handleChangeSubShippingYear = (event) => {
    setSubShippingYear(event.target.value);
  };
  const handleChangeRinkinkPaperCA = (event) => {
    setRinkinkPaperCA(event.target.value);
  };
  const handleChangeRinkinkPaperDB = (event) => {
    setRinkinkPaperDB(event.target.value);
  };
  const handleChangeRinkinkWasteCA = (event) => {
    setRinkinkWasteCA(event.target.value);
  };
  const handleChangeRinkinkWasteDB = (event) => {
    setRinkinkWasteDB(event.target.value);
  };
  const handleChangeRinkinkWoodCA = (event) => {
    setRinkinkWoodCA(event.target.value);
  };
  const handleChangeRinkinkWoodDB = (event) => {
    setRinkinkWoodDB(event.target.value);
  };
  const handleChangeRinkinkGardenCA = (event) => {
    setRinkinkGardenCA(event.target.value);
  };
  const handleChangeRinkinkGardenDB = (event) => {
    setRinkinkGardenDB(event.target.value);
  };
  const handleChangeRinkinkRubberCA = (event) => {
    setRinkinkRubberCA(event.target.value);
  };
  const handleChangeRinkinkRubberDB = (event) => {
    setRinkinkRubberDB(event.target.value);
  };
  const handleChangeRinkinkSewageCA = (event) => {
    setRinkinkSewageCA(event.target.value);
  };
  const handleChangeRinkinkSewageDB = (event) => {
    setRinkinkSewageDB(event.target.value);
  };
  const handleChangeRinkinkFoodsCA = (event) => {
    setRinkinkFoodsCA(event.target.value);
  };
  const handleChangeRinkinkFoodsDB = (event) => {
    setRinkinkFoodsDB(event.target.value);
  };
  const handleChangeRinkinkDiapersCA = (event) => {
    setRinkinkDiapersCA(event.target.value);
  };
  const handleChangeRinkinkDiapersDB = (event) => {
    setRinkinkDiapersDB(event.target.value);
  };


  return (
    <>
      <Modal
        open={shippingYear}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-between mb-5 pt-3">
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Primeiro Escopo
              </Typography>

              <h2 className="mt-3 pb-2">Ano de Envio de Residuo</h2>
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
                onClick={() => {
                  setShippingYear(!shippingYear);
                }}
              >
                Voltar
              </Button>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between mb-4">
            {shippingYearData.map((elem, idx) => (
              <div className="m-2" id={idx}>
                <h3>{elem.title}</h3>
                <TextField
                  id={`year-${elem.id}`}
                  label={elem.placeholder}
                  variant="outlined"
                />
              </div>
            ))}
          </div>
          <div>
            <Button variant="contained" size="large">
              Salvar
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={enterCompostData}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-between mb-5 pt-3">
            <div>
              <Card>
                <CardContent
                  style={{
                    backgroundColor: "#2cb29e",
                    color: "#fff",
                  }}
                >
                  Destino do Biogas
                </CardContent>
              </Card>
            </div>
            <div>
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  setEnterCompostData(!enterCompostData);
                }}
              >
                Voltar
              </Button>
            </div>
          </div>
          <div className="d-flex  justify-content-between mb-4">
            <div className="d-flex  justify-content-between">
              <div>
                <div className="m-4 d-flex  justify-content-between">
                  <p
                    className="d-flex align-items-center"
                    style={{ width: 290 }}
                  >
                    Quantidade de resíduo destinado a compostagem (caso não haja
                    compostagem, deixe esta seção em branco)
                  </p>
                  <div className="m-4">
                    <h3>Masssa de Resíduo</h3>
                    <TextField
                      id="massa-residuo"
                      label="Digite a massa"
                      variant="outlined"
                    />
                  </div>
                </div>
                <div className="m-4 d-flex  justify-content-between">
                  <p className="d-flex align-items-center">
                    Fator de emissão de CH4
                  </p>
                  <div className="m-4 ">
                    <h3>[gCH4/kgresíduo]</h3>
                    <TextField
                      id="kg-residuo"
                      label="Digite o fator"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="d-flex  justify-content-between">
                <p className="d-flex align-items-center">Recuperação de CH4</p>

                <div className="m-4">
                  <h3>[tCH4/ano]</h3>
                  <TextField
                    id="tch4-ano"
                    label="Digite o Ano de Envio"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="d-flex  justify-content-between">
                <p className="d-flex align-items-center">
                  Fator de emissão de N2O
                </p>

                <div className="m-4">
                  <h3>[gN2O/kgresíduo]</h3>
                  <TextField
                    id="gn20-kgresiduo"
                    label="Digite o Ano de Envio"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="d-flex  justify-content-between">
                <p className="d-flex align-items-center">Recuperação de CH4</p>

                <div className="m-4 ">
                  <h3>[tCH4/ano]</h3>
                  <TextField
                    id="tch4-ano-2"
                    label="Digite a Quantidade"
                    variant="outlined"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex  justify-content-center">
            <Button variant="contained" size="large" className="m-3">
              Salvar
            </Button>
            <Button variant="contained" size="large" className="m-3">
              Novo
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={enterIncinerationData | calculationOtherTools}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-between mb-5 pt-3">
            <div>
              <Card>
                <CardContent
                  style={{
                    backgroundColor: "#2cb29e",
                    color: "#fff",
                  }}
                >
                  <h3>Emissões totais de resíduos tratados por incineração</h3>
                  {calculationOtherTools && (
                    <p style={{ color: "red" }}>
                      Apartir de outras Ferramentas de cálculo
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
            <div>
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  calculationOtherTools &&
                    setCalculationOtherTools(!calculationOtherTools);
                  enterIncinerationData &&
                    setEnterIncinerationData(!enterIncinerationData);
                }}
              >
                Voltar
              </Button>
            </div>
          </div>
          <div className="d-flex  justify-content-center mb-4">
            <div>
              <div className="m-4">
                <h3>Registro de Fonte</h3>
                <TextField
                  id="massa-registro"
                  label="Digite a massa"
                  variant="outlined"
                />
              </div>
              <div className="m-4">
                <h3>Emissão CO2(t)</h3>
                <TextField
                  id="emissao-co2"
                  label="Digite a quantidade"
                  variant="outlined"
                />
              </div>
            </div>
            <div>
              <div className="m-4">
                <h3>Emissão CH4(t)</h3>
                <TextField
                  id="emissao-ch4"
                  label="Digite a Quantidade"
                  variant="outlined"
                />
              </div>
              <div className="m-4">
                <h3>Tipo de Residuo</h3>
                <TextField
                  id="tipo-residuo"
                  label="Digite o fator"
                  variant="outlined"
                />
              </div>
            </div>
            <div>
              <div className="m-4">
                <h3>Emissão N2O(t)</h3>
                <TextField
                  id="emissao-n2o"
                  label="Digite a Quantidade"
                  variant="outlined"
                />
              </div>
              <div className="m-4">
                <h3>Emissão CO2 Biogenico(t)</h3>
                <TextField
                  id="emissao-co2-biogenico"
                  label="Digite a quantidade"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
          <div className="d-flex  justify-content-around">
            {enterIncinerationData && (
              <p style={{ width: 400, color: "red" }}>
                Recomenda-se que os dados de emissões por incineração de
                resíduos sejam obtidos diretamente com o operador do incinerador
                ou que sejam calculados com o uso de métodos reconhecidos como
                os do IPCC (2006).
              </p>
            )}
            <div>
              <Button variant="contained" size="large" className="m-3 ">
                Salvar
              </Button>

              <Button variant="contained" size="large" className="m-3">
                Novo
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={enterPercentageResidue}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-between mb-5 pt-3">
            <div>
              <h2>Classificação</h2>
            </div>
            <div>
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  setEnterPercentageResidue(!enterPercentageResidue);
                }}
              >
                Voltar
              </Button>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <div>
              <div>
                <h3>Ano de Envio</h3>
                <FormControl sx={{ m: 1, minWidth: 80 }} required>
                  <InputLabel id="ano-envio">Ano</InputLabel>
                  <Select
                    labelId="ano-envio"
                    id="anoEnvio"
                    value={subShippingYear}
                    onChange={handleChangeSubShippingYear}
                    autoWidth
                    label="Selecione o Ano"
                  >
                    {shippingYearData.map((elem) => (
                      <MenuItem value={20 + elem.id}>20{elem.id}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="m-4">
                <h3>% de Disposição do Resíduo no Ano</h3>
                <TextField
                  id="residuo-ano"
                  label="Digite o Ano de Referência"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h3 style={{ width: 400, color: "red" }}>
                Qualidade do local de Disposição dos Resíduos
              </h3>
              <div className="d-flex  justify-content-center">
                <p className="m-4">
                  <span style={{ color: "red" }}>A:</span>Se não possui a
                  classificação do aterro
                </p>
                <p className="m-4">
                  <span style={{ color: "red" }}>B:</span>Se aterro com
                  profundidade {`<`}5m{" "}
                </p>
              </div>
              <div className="d-flex  justify-content-center">
                <p className="m-4">
                  <span style={{ color: "red" }}>C:</span>Se aterro com
                  profundidade {`>=`}5m
                </p>
                <p className="m-4">
                  <span style={{ color: "red" }}>D:</span>Se aterro Sanitário
                </p>
              </div>
              <div>
                <p>
                  <span style={{ color: "red" }}>E:</span>Se aterro semi-aeróbio
                  manejado
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex  justify-content-center mb-4">
            <div>
              <div className="m-4">
                <h3>Papés/Papelão</h3>
                <RinkingCard
                  title={"Classificação do Aterro"}
                  value={rinkinkPaperCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkPaperCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkPaperDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkPaperDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
              <div className="m-4">
                <h3>Resíduos têxteis</h3>
                <RinkingCard
                  title={"Classificação do Aterro"}
                  value={rinkinkWasteCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkWasteCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkWasteDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkWasteDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
            </div>
            <div>
              <div className="m-4">
                <h3>Madeira</h3>
                <RinkingCard
                  title={"Clacificação do Aterro"}
                  value={rinkinkWoodCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkWoodCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkWoodDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkWoodDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
              <div className="m-4">
                <h3>Resíduos de jardim e parque</h3>
                <RinkingCard
                  title={"Classificação do Aterro"}
                  value={rinkinkGardenCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkGardenCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkGardenDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkGardenDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
            </div>
            <div>
              <div className="m-4">
                <h3>Borracha e couro</h3>
                <RinkingCard
                  title={"Classificação do Aterro"}
                  value={rinkinkRubberCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkRubberCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkRubberDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkRubberDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
              <div className="m-4">
                <h3>Logo de esgoto</h3>
                <RinkingCard
                  title={"Clacificação do Aterro"}
                  value={rinkinkSewageCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkSewageCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkSewageDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkSewageDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
            </div>
            <div>
              <div className="m-4">
                <h3>Resíduos alimentares</h3>
                <RinkingCard
                  title={"Clacificação do Aterro"}
                  value={rinkinkFoodsCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkFoodsCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkFoodsDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkFoodsDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
              <div className="m-4">
                <h3>Fraldas</h3>
                <RinkingCard
                  title={"Clacificação do Aterro"}
                  value={rinkinkDiapersCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkDiapersCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkDiapersDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkDiapersDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
            </div>
          </div>
          <div className="d-flex  justify-content-center">
            <Button variant="contained" size="large" className="m-3 ">
              Salvar
            </Button>

            <Button variant="contained" size="large" className="m-3">
              Novo
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default SubModalEsc1;