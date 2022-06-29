import React,{useState} from "react";import {
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
import { subEffluentTypeItem, optionBiogasDestination } from "../selectionData";
import DashboardEscopo from "../../DashboardEscopo";


const Efluentes = ({nextEsco1Button, handleChangeEsco1 }) => {
    const [subSequentEffluents, setSubSequentEffluents] = useState("");
    const [subEffluentType, setSubEffluentType] = useState("");
    const [subBiogasDestination, setSubBiogasDestination] = useState("");


    const handleChangeSubSequentEffluents = (event) => {
      setSubSequentEffluents(event.target.value);
    };
    const handleChangeSubEffluentType = (event) => {
      setSubEffluentType(event.target.value);
    };
    const handleChangeSubBiogasDestination = (event) => {
      setSubBiogasDestination(event.target.value);
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

            <h2 className="mt-3 pb-2 text-uppercase">Efluentes</h2>
            <hr
              style={{
                width: 90,
                height: 8,
                backgroundColor: "#2cb29e",
              }}
            />
          </div>

          <div>
            {/* <h3 style={{ color: "#953fc6" }} className="fs-3 font-weight-bold text-uppercase">
              Emissões totais por combustão móvel
            </h3> */}
            <DashboardEscopo 
              numBio={"1278,89"}
              numEqui={"4567,67"}
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
            <h3
              style={{ color: "#953fc6" }}
              className="fs-3 font-weight-bold text-uppercase"
            >
              Efluentes Liquidos:
            </h3>
            <p className="m-3">
              São aplicados, sequencialmente, dois tipos de tratamentos
              anaeróbicos ao efluente gerado?
            </p>

            <Card
              className=" m-3 "
              style={{
                width: 200,
                backgroundColor: "#4682B4",
                cursor: "pointer",
              }}
            >
              <CardContent>
                <h1 className="text-light fs-4 p-2">EFLUENTES SEQUENCIAIS</h1>
                <FormControl sx={{ m: 1, minWidth: 80 }} required>
                  <InputLabel id="sequentEffluents">
                    Efluentes Sequenciais
                  </InputLabel>
                  <Select
                    className="text-light"
                    labelId="sequentEffluents"
                    id="sequentEffluents"
                    value={subSequentEffluents}
                    onChange={handleChangeSubSequentEffluents}
                    autoWidth
                    label="efluentes sequencias"
                  >
                    <MenuItem value="SIM">SIM</MenuItem>
                    <MenuItem value="NAO">NÃO</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>

            <p className="m-3">
              Quantidade de efluente líquido gerada no ano do inventário
            </p>

            <div className="m-2">
              <h3>
                Dados Anuais M<sup>3</sup>
              </h3>
              <TextField
                id="dados-anuais"
                label=" Digite o registro da frota"
                variant="outlined"
              />
            </div>
            <p className="m-3">
              Escolha se a unidade do dado é DBO (Demanda Biológica de Oxigênio)
              ou DQO (Demanda Bioquímica de Oxigênio).
            </p>
            <div className="m-2">
              <h3>
                Composição Organica M<sup>3</sup>
              </h3>
              <TextField
                id="compo-organica"
                label=" Digite o registro da frota"
                variant="outlined"
              />
            </div>
          </div>
          <div className="d-flex flex-column align-items-end">
            <Card
              className=" m-4 "
              style={{
                width: 500,
                backgroundColor: "#4682B4",
                cursor: "pointer",
              }}
            >
              <CardContent>
                <h3 className="text-light fs-4 p-2 text-uppercase">
                  Tipo de tratamento aplicado ao efluente
                </h3>
                <FormControl sx={{ m: 1, minWidth: 180 }} required>
                  <InputLabel id="effluentType">Tipo efluente</InputLabel>
                  <Select
                    className="text-light"
                    labelId="effluentType"
                    id="effluentType"
                    value={subEffluentType}
                    onChange={handleChangeSubEffluentType}
                    autoWidth
                    label="Tipo efluente"
                  >
                    {subEffluentTypeItem.map((elem) => (
                      <MenuItem value={elem}>{elem}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CardContent>{" "}
            </Card>

            <div className="d-flex  justify-content-between ">
              <p className="p-3">
                Preencha o fator de emissão de N2O do efluente.
              </p>
              <p className="p-3" style={{ maxWidth: 300 }}>
                Se não possuir um fator de emissão de N2O específico, deixe em
                branco. Será utilizado o default sugerido por IPCC (2006).
              </p>
              <p className="p-3">Quantidade de CH4 recuperada do tratamento</p>
            </div>

            <div className="d-flex  justify-content-around ">
              <p
                style={{ maxWidth: 300 }}
                className="m-2 d-flex align-items-center"
              >
                Quantidade de Nitrogênio no efluente gerado
              </p>
              <div className="m-2">
                <h3>[kgN/m3]</h3>
                <TextField
                  id="regist-fronta-kgn"
                  label=" Digite o registro da frota..."
                  variant="outlined"
                />
              </div>
              <div className="m-2">
                <h3>Recuperação de CH4</h3>
                <TextField
                  id="desc-fronta-rch4"
                  label="Digite descrição da Frota..."
                  variant="outlined"
                />
              </div>
            </div>
            <div className="d-flex  justify-content-around m-3">
              <p
                style={{ maxWidth: 300 }}
                className="m-2 d-flex align-items-center"
              >
                Fator de emissão de N2O pela descarga de efluente
              </p>
              <div className="m-2">
                <h3>[kgN20-N/kgN]</h3>
                <TextField
                  id="regist-fronta-kgn20"
                  label=" Digite o registro da frota..."
                  variant="outlined"
                />
              </div>
              <p
                style={{ maxWidth: 200 }}
                className="m-2 d-flex align-items-center"
              >
                No ano do inventário, qual o destino do biogás recuperado?
              </p>
            </div>
            <div className="d-flex  justify-content-around mt-3 ">
              <p
                style={{ maxWidth: 300 }}
                className=" d-flex align-items-center"
              >
                Nitrogênio removido com o lodo no ano do inventário
              </p>
              <div className="m-2 d-flex  align-items-center">
                <div>
                  <h3>[kgN/ano]</h3>
                  <TextField
                    id="regist-fronta-kgnano"
                    label=" Digite o registro da frota..."
                    variant="outlined"
                  />
                </div>
              </div>

              <div>
                <Card
                  className=" m-4 d-flex justify-content-center "
                  style={{
                    width: 200,
                    backgroundColor: "#4682B4",
                    cursor: "pointer",
                  }}
                >
                  <CardContent>
                    <h3 className="text-light  p-2 text-uppercase">
                      Destino do Biogas
                    </h3>
                    <FormControl sx={{ m: 1, minWidth: 70 }} required>
                      <InputLabel id="biogasDestination">
                        Destino do Biogas
                      </InputLabel>
                      <Select
                        className="text-light"
                        labelId="biogasDestination"
                        id="biogasDestination"
                        value={subBiogasDestination}
                        onChange={handleChangeSubBiogasDestination}
                        autoWidth
                        label="Destino do Biogas"
                      >
                        {optionBiogasDestination.map((elem) => (
                          <MenuItem value={elem}>{elem}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </CardContent>
                </Card>
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

export default Efluentes;