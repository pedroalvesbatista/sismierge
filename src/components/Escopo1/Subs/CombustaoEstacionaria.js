import React,{useState} from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Button,
  Typography,
  Modal,
  Card,
  TextField,
} from "@mui/material";

import {style} from "./../util"
import { fuelUsedEsco1Item } from "../selectionData";

const CombustaoEstacionaria = ({ nextEsco1Button, handleChangeEsco1 }) => {
   const [fuelUsedEsco1, setFuelUsedEsco1] = useState();

   const handleChangeFuelUsedEsco1 = (event) => {
       setFuelUsedEsco1(event.target.value);
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

            <h2 className="mt-3 pb-2">Combustão Estacionária</h2>
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
                Fontes Estacionárias
              </h3>
            </div>
            <div className="d-flex  justify-content-between ">
              <div className="m-2">
                <h3>Registro da Fonte</h3>
                <TextField
                  id="regist-font"
                  label=" Digite o registro da fonte..."
                  variant="outlined"
                />
              </div>
              <div className="m-2">
                <h3>Descrição da Fonte</h3>
                <TextField
                  id="desc-font"
                  label="Digite descrição da Fonte..."
                  variant="outlined"
                />
              </div>
            </div>
            <div className="d-flex  justify-content-between mb-3 ">
              <div className="m-2">
                <h3>Quantidade Consumida</h3>
                <TextField
                  id="quant-consu"
                  label="Digite a Quantidade..."
                  variant="outlined"
                />
              </div>
              <div className="m-2">
                <h3>Unidades de Medida</h3>
                <TextField
                  disabled
                  id="unidade"
                  label=""
                  defaultValue="Toneladas"
                  variant="filled"
                />
              </div>
            </div>
            <div>
              <h3>Combustível Utilizado</h3>
              <FormControl sx={{ m: 1, minWidth: 200 }} required>
                <InputLabel id="fuelUsedEsco1">
                  Combustível Utilizado
                </InputLabel>
                <Select
                  labelId="fuelUsedEsco1"
                  id="fuelUsedEsco1"
                  value={fuelUsedEsco1}
                  onChange={handleChangeFuelUsedEsco1}
                  autoWidth
                  label="Selecionar Combustível..."
                >
                  {fuelUsedEsco1Item?.map((elem) => (
                    <MenuItem value={elem}>{elem}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="d-flex flex-column align-items-end">
            <div>
              <div className="d-flex justify-content-around">
                <div className="m-2">
                  <h3 className="mb-3">
                    Quantidade de Combustível consumida(por unidade)
                  </h3>
                  <div className="d-flex justify-content-around">
                    <div>
                      <h4>Combustível Fóssil</h4>

                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        434,3
                      </Card>
                    </div>
                    <div>
                      <h4>Blocombustível</h4>
                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        34,33000
                      </Card>
                    </div>
                  </div>
                </div>
                <div className="m-2">
                  <h3 className="mb-3">
                    Quantidade de Combustível consumida(por unidade)
                  </h3>
                  <div className="d-flex justify-content-around">
                    <div>
                      <h4>Combustível Fóssil</h4>

                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        434,3
                      </Card>
                    </div>
                    <div>
                      <h4>Blocombustível</h4>
                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        34,33000
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-around">
                <div>
                  <h3 className="mb-3">
                    Fatores de emissão - Combustível fóssil
                  </h3>
                  <div className="d-flex justify-content-around">
                    <div className="m-2">
                      <h4>CO2(kg/un)</h4>

                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        434,3
                      </Card>
                    </div>
                    <div className="m-2">
                      <h4>CH4(kg/un)</h4>
                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        34,33000
                      </Card>
                    </div>
                    <div className="m-2">
                      <h4>N2O(kg/un)</h4>
                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        34,33000
                      </Card>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-3">Fatores de emissão - Biocombustível</h3>
                  <div className="d-flex justify-content-around">
                    <div className="m-2">
                      <h4>CO2(kg/un)</h4>

                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        434,3
                      </Card>
                    </div>
                    <div className="m-2">
                      <h4>CH4(kg/un)</h4>
                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        34,33000
                      </Card>
                    </div>
                    <div className="m-2">
                      <h4>N2O(kg/un)</h4>
                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        34,33000
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-around">
                <div>
                  <h3 className="mb-3">Biocombustíveis</h3>
                  <div className="d-flex justify-content-around">
                    <div className="m-2">
                      <h4>Emissões CO2(t)</h4>

                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        434,3
                      </Card>
                    </div>
                    <div className="m-2">
                      <h4>Emissões CH4(t)</h4>
                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        34,33000
                      </Card>
                    </div>
                    <div className="m-2">
                      <h4>Emissões N2O(t)</h4>
                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        34,33000
                      </Card>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-3">Combustíveis Fósseis</h3>
                  <div className="d-flex justify-content-around">
                    <div className="m-2">
                      <h4>Emissões CO2(t)</h4>
                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        434,3
                      </Card>
                    </div>
                    <div className="m-2">
                      <h4>Emissões CH4(t)</h4>
                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        34,33000
                      </Card>
                    </div>
                    <div className="m-2">
                      <h4>Emissões N2O(t)</h4>
                      <Card
                        style={{
                          width: 80,
                          height: 30,
                          margin: 20,
                          backgroundColor: "#ccc",
                        }}
                      >
                        34,33000
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="d-flex justify-content-around">
                  <div className="m-2">
                    <h6>Emissões Fóssel Totais TCO2e</h6>
                    <Card
                      style={{
                        width: 80,
                        height: 30,
                        margin: 20,
                        backgroundColor: "#ccc",
                      }}
                    >
                      434,3
                    </Card>
                  </div>
                  <div className="m-2">
                    <h6>Emissões Biogênicas TCO2e</h6>
                    <Card
                      style={{
                        width: 80,
                        height: 30,
                        margin: 20,
                        backgroundColor: "#ccc",
                      }}
                    >
                      34,33000
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button variant="contained" size="large" onClick={handleChangeEsco1}>
            Salvar
          </Button>
        </div>
      </Box>
    </Modal>
  );
};


export default CombustaoEstacionaria;