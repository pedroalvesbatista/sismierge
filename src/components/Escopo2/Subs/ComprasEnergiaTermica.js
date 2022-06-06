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
import { anoInventariadoCET } from "../selectionData";

const ComprasEnergiaTermica = ({nextEsco1Button, handleChangeEsco2 }) => {
    const [anoInventariado, setAnoInventariado] = useState("");

    const handleChangeAnoInventariado =(e) =>{
        setAnoInventariado(e.target.value)
    }
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

            <h2 className="mt-3 pb-2">Compras de Energia Térmica</h2>
            <hr
              style={{
                width: 90,
                height: 8,
                backgroundColor: "#2cb29e",
              }}
            />
          </div>
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
                    Selecione O Ano Inventariado
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
          <div>
            <Button
              variant="contained"
              size="large"
              onClick={handleChangeEsco2}
            >
              Voltar
            </Button>
          </div>
        </div>
        <div className="d-flex flex-column align-items-start">
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
            <div className="m-2">
              <h3>Combustível Utilizado</h3>
              <TextField
                id="comb-utilizado"
                label="Digite aqui..."
                variant="outlined"
              />
            </div>
          </div>
          <div className="d-flex  justify-content-between mb-3 ">
            <div className="m-2">
              <h3>Eficiencia do Fervedor</h3>
              <TextField
                id="efi-fervedor"
                label="Digite aqui..."
                variant="outlined"
              />
            </div>
            <div className="m-2">
              <h3>Vapor Comprado</h3>
              <TextField
                id="vapor-comprado"
                label="Digite aqui..."
                variant="outlined"
              />
            </div>
            <div className="m-2">
              <h3>Emissão de CO2 Biogenio (t)</h3>
              <TextField
                id="emissao-biogenio"
                label="Digite aqui..."
                variant="outlined"
              />
            </div>
            <div className="m-2">
              <h3> Remoções de CO2 Biogenio (t)</h3>
              <TextField
                id="remissao-biogenio"
                label="Digite aqui..."
                variant="outlined"
              />
            </div>
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

export default ComprasEnergiaTermica;