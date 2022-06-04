import React,{useState} from "react";

import {
    Box,
    Button,
    Typography,
    Modal,
    TextField,
} from "@mui/material";

import { style } from "../util";
import SubModalEsc1 from "./SubModalEsc1";

const ResiduosSolidos =({nextEsco1Button, handleChangeEsco1})=>{
  const [shippingYear, setShippingYear] = useState(false);
  const [enterCompostData, setEnterCompostData] = useState(false);
  const [enterPercentageResidue, setEnterPercentageResidue] = useState(false);
  const [enterIncinerationData, setEnterIncinerationData] = useState(false);
  const [calculationOtherTools, setCalculationOtherTools] = useState(false);

    const handleShippingYear = () => {
    setShippingYear(!shippingYear);
  };

  const handleEnterCompostData = () => {
    setEnterCompostData(!enterCompostData);
  };

  const handleEnterPercentageResidue = () => {
    setEnterPercentageResidue(!enterPercentageResidue);
  };
  const handleEnterIncinerationData = () => {
    setEnterIncinerationData(!enterIncinerationData);
  };
  const handleCalculationOtherTools = () => {
    setCalculationOtherTools(!calculationOtherTools);
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

                <h2 className="mt-3 pb-2">Residuos Sólidos</h2>
                <hr
                  style={{
                    width: 90,
                    height: 8,
                    backgroundColor: "#2cb29e",
                  }}
                />
              </div>

              <div className="d-flex align-items-start">
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleChangeEsco1}
                >
                  Voltar
                </Button>
              </div>
            </div>
            <div className="d-flex  justify-content-between">
              <div
                className="d-flex flex-column align-items-start"
                style={{ maxWidth: 300 }}
              >
                <div className="d-flex align-items-end">
                  <h2
                    style={{ color: "#953fc6" }}
                    className="fs-3 font-weight-bold text-uppercase mb-3"
                  >
                    Residuos Aterrados
                  </h2>
                </div>

                <div className="mb-3">
                  <p className="p-3">
                    Quantidade de residuos enviados ao aterro no ano (Apartir da
                    data de inventariação levar em consideração os 30 anos
                    anteriores) INSERIR ANOS
                  </p>
                  <Button
                    onClick={handleShippingYear}
                    className="p-3"
                    variant="contained"
                    size="medium"
                  >
                    Anos de Envio
                  </Button>
                  <SubModalEsc1
                    setShippingYear={setShippingYear}
                    shippingYear={shippingYear}
                    enterCompostData={enterCompostData}
                    setEnterCompostData={setEnterCompostData}
                    setEnterPercentageResidue={setEnterPercentageResidue}
                    enterPercentageResidue={enterPercentageResidue}
                    setEnterIncinerationData={setEnterIncinerationData}
                    enterIncinerationData={enterIncinerationData}
                    setCalculationOtherTools={setCalculationOtherTools}
                    calculationOtherTools={calculationOtherTools}
                  />
                  <ul>
                    <li className="p-3">
                      Preencha a composição do resíuo gerado pela organização.
                      Preencha apenas para os anos em que houve disposição de
                      resíduos.
                    </li>
                    <li className="p-3">
                      Preencha com a porcentagem, de 0 à 100, correspondente a
                      cada tipo de resíduo, em relação ao resíuo total.
                    </li>
                  </ul>
                  <Button
                    className="p-3"
                    variant="contained"
                    size="medium"
                    onClick={handleEnterPercentageResidue}
                  >
                    Inserir Porcentagem de Residuo
                  </Button>
                </div>
              </div>
              <div className="d-flex flex-column align-items-start">
                <div className=" mb-3">
                  <h2>Dados do Local de disposição Final do Resíduo</h2>
                  <div className="d-flex  justify-content-around">
                    <div className="m-2">
                      <h3>UF</h3>
                      <TextField
                        id="uf"
                        label="Digite Aqui..."
                        variant="outlined"
                      />
                    </div>
                    <div className="m-2">
                      <h3>Município</h3>
                      <TextField
                        id="municipio"
                        label="Digite Aqui..."
                        variant="outlined"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className=" mb-3">Compostagem anaeróbica</h3>
                  <Button
                    className="p-3 m-3"
                    variant="contained"
                    size="medium"
                    onClick={handleEnterCompostData}
                  >
                    Inserir Dados de Compostagem
                  </Button>
                  <Button
                    className="p-3 m-3"
                    variant="contained"
                    size="medium"
                    onClick={handleEnterIncinerationData}
                  >
                    Inserir Dados de Incineração
                  </Button>
                  <Button
                    className="p-3 m-3"
                    variant="contained"
                    size="medium"
                    onClick={handleCalculationOtherTools}
                  >
                    Cálculo por outras ferramentas
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <Button
                variant="contained"
                size="large"
                onClick={handleChangeEsco1}
              >
                Salvar
              </Button>
            </div>
          </Box>
        </Modal>
    )
}

export default ResiduosSolidos;