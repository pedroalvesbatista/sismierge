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

const EletricidadeEscCompra = ({ nextEsco1Button, handleChangeEsco2 }) => {
  const [anoInventariado, setAnoInventariado] = useState("");
  const [btn_IERA, setBtn_IERA] = useState(false);

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

            <h2 className="mt-3 pb-2">Energia Eletrica Escolha de Compra</h2>
            {btn_IERA && (
              <h2 className="mt-3 pb-2">Cálculo de energia não rastreada</h2>
            )}

            <hr
              style={{
                width: 90,
                height: 8,
                backgroundColor: "#2cb29e",
              }}
            />
          </div>
          {!btn_IERA && (
            <div>
              <Card
                className="d-flex  justify-content-center align-items-center"
                style={{
                  width: 150,
                  minHeight: 100,
                  backgroundColor: "#2cb29e",
                  cursor: "pointer",
                }}
              >
                <CardContent>
                  <h3 className="text-light fs-3">Fator de Emissão</h3>
                  {/* <FormControl sx={{ m: 1, minWidth: 200 }} required>
                  <InputLabel id="tipoenergia">
                    Selecione o tipo de Geração de Energia
                  </InputLabel>
                  <Select
                    className="text-light"
                    labelId="tipoenergia"
                    id="tipoenergia"
                    value={anoInventariado}
                    onChange={handleChangeAnoInventariado}
                    autoWidth
                    label="Selecione o tipo de Geração de Energia..."
                  >
                    {anoInventariadoCET?.map((elem) => (
                      <MenuItem value={elem}>{elem}</MenuItem>
                    ))}
                  </Select>
                </FormControl> */}
                </CardContent>
              </Card>
            </div>
          )}
          {!btn_IERA && (
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
                    Selecione o tipo de Geração de Energia
                  </h3>
                  <FormControl sx={{ m: 1, minWidth: 200 }} required>
                    <InputLabel id="tipoenergia">
                      Selecione o tipo de Geração de Energia
                    </InputLabel>
                    <Select
                      className="text-light"
                      labelId="tipoenergia"
                      id="tipoenergia"
                      value={anoInventariado}
                      onChange={handleChangeAnoInventariado}
                      autoWidth
                      label="Selecione o tipo de Geração de Energia..."
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
          {btn_IERA && (
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
                btn_IERA
                  ? () => {
                      setBtn_IERA(!btn_IERA);
                    }
                  : handleChangeEsco2
              }
            >
              Voltar
            </Button>
          </div>
        </div>
        {/* <div className="d-flex flex-column align-items-start"> */}

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
            {!btn_IERA && (
              <>
                <div className="d-flex  justify-content-between align-items-end">
                  <div className="m-2">
                    <h3 className="pb-3">Combustível</h3>
                    <TextField
                      id="combustivel"
                      label=" Digite o tipo de combúsivel..."
                      variant="outlined"
                    />
                  </div>
                  <div className="m-2">
                    <h3 className="pb-3">Eficiencia da planta geradora (%)</h3>
                    <TextField
                      id="eficiencia"
                      label="Digite o porcentual..."
                      variant="outlined"
                    />
                  </div>
                  <div className="m-2">
                    <h3 className="pb-3">Emissão de CO2 (tCO2 / MWh)</h3>
                    <TextField
                      id="emissao-tco2"
                      label="Digite tipo da frota de veículos..."
                      variant="outlined"
                    />
                  </div>
                </div>
                <div className="d-flex  justify-content-between align-items-end">
                  <div className="m-2">
                    <h3 className="pb-3">Fator de emissão CH4 (tCH4 / MWh)</h3>
                    <TextField
                      id="fator-emissao"
                      label=" Digite o ano da frota..."
                      variant="outlined"
                    />
                  </div>
                  <div className="m-2">
                    <h3 className="pb-3">Fator de emissão N2O (tN2O / MWh)</h3>
                    <TextField
                      id="fator-emissao-N2O"
                      label=" Digite o ano da frota..."
                      variant="outlined"
                    />
                  </div>
                  <div className="m-2">
                    <h3 className="pb-3">
                      Fator de emissão CO2 biogênico (tCO4 / MWh)
                    </h3>
                    <TextField
                      id="fator-biogenico"
                      label=" Digite o ano da frota..."
                      variant="outlined"
                    />
                  </div>
                </div>
              </>
            )}
            {!btn_IERA && (
              <div className="d-flex  justify-content-between mt-3 ">
                <Button
                  className="p-5"
                  variant="contained"
                  size="large"
                  onClick={() => {
                    setBtn_IERA(!btn_IERA);
                  }}
                >
                  Inserir Energia Não rastreada no ano
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <Button variant="contained" size="large">
            Salvar
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default EletricidadeEscCompra;
