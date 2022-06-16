import React, { useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  Box,
  Button,
  Typography,
  Modal,
  CardContent,
  Card,
} from "@mui/material";
import { style } from "../../../utils/util";
import { anoInventariadoCET, meses } from "../selectionData";

const PerdasTdLocalizacao = ({ nextEsco1Button, handleChangeEsco2 }) => {
  const [anoInventariado, setAnoInventariado] = useState("");
  const [btn_SIA, setBtn_SIA] = useState(false);
  const [btn_OSIA, setBtn_OSIA] = useState(false);

  const handleChangeAnoInventariado = (e) => {
    setAnoInventariado(e.target.value);
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
              Segundo Escopo
            </Typography>

            <h2 className="mt-3 pb-2">Perdas T & D Abordagem de Localização</h2>
            {btn_SIA && (
              <h2 className="mt-3 pb-2">Sistemas Isolado Amazonas</h2>
            )}
            {btn_OSIA && (
              <h2 className="mt-3 pb-2">Outros Sistemas Isolado Amazonas</h2>
            )}
            <hr
              style={{
                width: 90,
                height: 8,
                backgroundColor: "#2cb29e",
              }}
            />
          </div>
          {!btn_OSIA && (
            <div>
              <Card
                className="d-flex  justify-content-center align-items-center"
                style={{
                  width: 480,
                  minHeight: 100,
                  backgroundColor: "#4682B4",
                  cursor: "pointer",
                }}
              >
                <CardContent>
                  <h3 className="text-light fs-3">
                    Selecione O Ano Inventariado
                  </h3>
                  <FormControl sx={{ m: 1, minWidth: 200 }} required>
                    <InputLabel id="anoInventariado">
                      Selecione o Ano Inventariado
                    </InputLabel>
                    <Select
                      className="text-light"
                      labelId="anoInventariado"
                      id="anoInventariado"
                      value={anoInventariado}
                      onChange={handleChangeAnoInventariado}
                      autoWidth
                      label="Selecionar O Ano Inventariado..."
                    >
                      {anoInventariadoCET?.map((elem) => (
                        <MenuItem value={elem}>{elem}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </CardContent>
              </Card>
            </div>
          )}
          <div>
            <Button
              variant="contained"
              size="large"
              onClick={
                btn_SIA
                  ? () => {
                      setBtn_SIA(!btn_SIA);
                    }
                  : btn_OSIA
                  ? () => {
                      setBtn_OSIA(!btn_OSIA);
                    }
                  : handleChangeEsco2
              }
            >
              Voltar
            </Button>
          </div>
        </div>
        {/* <div className="d-flex flex-column align-items-start"> */}
        {!btn_OSIA && (
          <div className="d-flex justify-content-between">
            <div>
              <h2 className="d-flex mb-4">Consumo Mensal</h2>
            <div
              className="d-flex flex-wrap justify-content-between "
              style={{ width: 500 }}
            >
              {meses?.map((elem, idx) => (
                <div className="m-2" id={idx}>
                  <h3>{elem}</h3>
                  <TextField
                    id={`mes-consumo-${idx}`}
                    label=" Digite seu Consumo Mensal"
                    variant="outlined"
                  />
                </div>
              ))}
            </div>
            </div>
            <div className="d-flex flex-column justify-content-between pl-5 pb-5 ">
              <div className="d-flex  justify-content-between align-items-end">
                <div className="m-2">
                  <h3 className="pb-3">Registro da Fonte</h3>
                  <TextField
                    id="regist-font"
                    label=" Digite o registro da fonte..."
                    variant="outlined"
                  />
                </div>
                <div className="m-2">
                  <h3 className="pb-3">Descrição da Fonte</h3>
                  <TextField
                    id="desc-font"
                    label="Digite descrição da Fonte..."
                    variant="outlined"
                  />
                </div>
                <div className="m-2">
                  <h3 className="pb-3">
                    Relate aqui a compra anual de eletricidade(MWh)
                  </h3>
                  <TextField
                    id="relato-eletric"
                    label="Digite o porcentual..."
                    variant="outlined"
                  />
                </div>
              </div>
              {!btn_SIA && (
                <div className="d-flex  justify-content-between mt-3 ">
                  <Button
                    className="p-5"
                    variant="contained"
                    size="large"
                    onClick={() => {
                      setBtn_SIA(!btn_SIA);
                    }}
                  >
                    Sistemas Isolados Amazonas
                  </Button>
                  <Button
                    onClick={() => {
                      setBtn_OSIA(!btn_OSIA);
                    }}
                    className="p-5"
                    variant="contained"
                    size="large"
                  >
                    Outros Sistemas Isolados Amazonas
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
        {btn_OSIA && (
          <div>
            <div className="d-flex  justify-content-center ">
              <div className="m-4">
                <h3>Registro da Fonte</h3>
                <TextField
                  id="regist-font"
                  label=" Digite o registro da fonte..."
                  variant="outlined"
                />
              </div>
              <div className="m-4">
                <h3>Descrição da Fonte</h3>
                <TextField
                  id="desc-font"
                  label="Digite descrição da Fonte..."
                  variant="outlined"
                />
              </div>
              <div className="m-4">
                <h3>Emissão de CO2 (tCO2/ MWh)</h3>
                <TextField
                  id="emissao-tco2"
                  label="Digite aqui..."
                  variant="outlined"
                />
              </div>
            </div>
            <div className="d-flex  justify-content-center mb-3 ">
              <div className="m-4">
                <h3>Fator de emissão CH4 (tCH4 / MWh)</h3>
                <TextField
                  id="fator-emissao-tch4"
                  label="Digite aqui..."
                  variant="outlined"
                />
              </div>
              <div className="m-4">
                <h3>Fator de Emissão N2O (tN20 / Mwh)</h3>
                <TextField
                  id="fator-emissao-tn20"
                  label="Digite aqui..."
                  variant="outlined"
                />
              </div>
              <div className="m-4">
                <h3>Fator de Emissão C2O Biogênico (tCO2 / MWh)</h3>
                <TextField
                  id="fator-c20-biogenico"
                  label="Digite aqui..."
                  variant="outlined"
                />
              </div>
            </div>
          </div>
        )}
        <div className="mt-5">
          <Button variant="contained" size="large">
            Salvar
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default PerdasTdLocalizacao;
