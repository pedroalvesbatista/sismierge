import React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
} from "@mui/material";

import { style } from "../../../utils/util";

const SoloAgriculturaIndustrias = ({
  nextEsco1Button,
  handleChangeEsco1,
  mudancaSolo,
  atividadesAgricultura,
  processosIndustrias,
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

            <h2 className="mt-3 pb-2">
              {atividadesAgricultura
                ? "Atividades Agricolas"
                : processosIndustrias
                ? "Processos Industriais"
                : "Mudanças no uso do solo"}
            </h2>
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
        <div className="d-flex flex-column align-items-start">
          {mudancaSolo && (
            <div>
              <h2>Selecione o tipo de transporte:</h2>
            </div>
          )}

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
              <h3>Descrição da Atividade</h3>
              <TextField
                id="desc-font"
                label="Digite descrição Atividade..."
                variant="outlined"
              />
            </div>
          </div>
          <div className="d-flex  justify-content-between mb-3 ">
            <div className="m-2">
              <h3>Gás de Efeito Estufa (GEE)</h3>
              <TextField
                id="gas-estufa"
                label="Digite aqui..."
                variant="outlined"
              />
            </div>
            <div className="m-2">
              <h3>Emissão (GEE) t</h3>
              <TextField
                id="emissa-gee"
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
              <h3>
                {atividadesAgricultura || processosIndustrias
                  ? "Remoções "
                  : "Remissão "}
                de CO2 Biogenio (t)
              </h3>
              <TextField
                id="remissao-biogenio"
                label="Digite aqui..."
                variant="outlined"
              />
            </div>
          </div>
        </div>
        {processosIndustrias && (
          <p className="m-3">
            Para mais informações sobre emissões de Processos Industriais,
            consulte as Especificações do Programa Brasileiro GHG Protocol
            (https://eaesp.fgv.br/centros/centro-estudos-sustentabilidade/projetos/programa-brasileiro-ghg-protocol)
            e os Inventários Nacionais de Emissões de GEE do Brasil (MCTIC,
            2005; 2010;2016).
          </p>
        )}
        <div className="mt-5">
          <Button variant="contained" size="large" >
            Salvar
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default SoloAgriculturaIndustrias;