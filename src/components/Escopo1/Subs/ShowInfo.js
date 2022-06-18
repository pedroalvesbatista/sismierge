import React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
} from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";

import { style } from "../../../utils/util";

const ShowInfo = ({
  showHowToFillCE,
  setShowHowToFillCE,
  showHowToFillCM,
  setShowHowToFillCM,
  showHowToFillSEF,
  setShowHowToFillSEF,
  section1,
  setSection1,
}) => {
  return (
    <>
      <Modal
        open={showHowToFillSEF}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                setShowHowToFillSEF(!showHowToFillSEF);
              }}
            >
              <CloseIcon />
            </Button>
          </div>

          <div className="p-5 d-flex flex-column align-items-start">
            <h2 className="p-5">Emissões fugitivas</h2>
            <h2 className="p-5">Orientações gerais:</h2>
            <ul className="p-5 d-flex flex-column align-items-start">
              <li className="p-3"> (A) Esta seção da ferramenta permite o cálculo de emissões  fugitivas pela utilização de equipamentos de refrigeração e ar  condicionado (RAC), extintores de incêndio, e por utilização de hexafluoreto de enxofre (SF6) e trifluoreto de nitrogênio (NF3).
              </li>
              <li className="p-3">
                (B) Alguns gases utilizados como refrigerantes são, na verdade,
                uma mistura de gases. Nesta ferramenta, eles são chamados de
                compostos.
              </li>
              <li className="p-3">
                (C) No caso dos compostos, esta ferramenta considera apenas a
                parcela referente aos GEE contemplados pelo Protocolo de Quioto.
              </li>
              <li className="p-3">
                (D) Esta ferramenta permite o cálculo de outros gases de efeito
                estufa não contemplados pelo Protocolo de Quioto na aba
                "Fugitivas - GEE não Quioto".
              </li>
              <li className="p-3">
                (E) Preencha somente as células LARANJA CLARO, utilizando as
                unidades corretas.
              </li>
              <li className="p-3">
                (F) Ao final desta seção são apresentadas as emissões fugitivas
                totais, em tCO2e.
              </li>
            </ul>
          </div>
        </Box>
      </Modal>
      <Modal
        open={showHowToFillCM}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                setShowHowToFillCM(!showHowToFillCM);
              }}
            >
              <CloseIcon />
            </Button>
          </div>

          <div className="p-5 d-flex flex-column align-items-start">
            <h2 className="p-5">Emissões por combustão móvel</h2>
            <h2 className="p-5">Orientações gerais:</h2>
            <ul className="p-5 d-flex flex-column align-items-start">
              <li className="p-3">
                {" "}
                (A) Esta seção da ferramenta calcula as emissões de Escopo 1 por
                combustão móvel, referente aos modais rodoviário, ferroviário,
                hidroviário e aéreo.
              </li>
              <li className="p-3">
                {" "}
                (B) Para calcular as emissões decorrentes de viagens a negócios
                em aeronaves comerciais e de terceiros, utilize a aba "Viagens a
                Negócios" (Escopo 3).
              </li>
              <li className="p-3">
                (C) Preencha os dados somente nas células em LARANJA CLARO,
                utilizando as unidades corretas.
              </li>
              <li className="p-3">
                (D) Ao final desta seção são apresentadas as emissões totais por
                combustão móvel (Escopo 1), em tCO2e, na Tabela 8.
              </li>
            </ul>
          </div>
        </Box>
      </Modal>
      <Modal
        open={section1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                setSection1(!section1);
              }}
            >
              <CloseIcon />
            </Button>
          </div>

          <div className="p-5 d-flex flex-column align-items-start">
            <h2 className="p-5">
              Seção 1 - Notas técnicas sobre os fatores de emissão
            </h2>
            <ul className="p-5 d-flex flex-column align-items-start">
              <li className="p-3">
                {" "}
                1 - Na Seção 3.1, Tabela 3, os fatores de emissão de CO2 para o
                uso de gasolina, por tipo de veículo, só contempla as emissões
                da Gasolina A (pura) presente na Gasolina Comum (que também
                contém Etanol Anidro em sua mistura). Já os fatores de emissão
                de CH4 e N2O, por sua vez, levam em conta as emissões da
                Gasolina Comum (mistura de Gasolina A com Etanol Anidro).
              </li>
              <li className="p-3">
                {" "}
                2 - Na Seção 3.1, Tabela 3, os fatores de emissão de CO2, CH4 e
                N2O para o uso de óleo diesel contemplam as emissões da mistura
                de óleo Diesel que é comercializada no Brasil (composta por óleo
                Diesel derivado de petróleo e biodiesel, em proporções definidas
                pela legislação brasileira).
              </li>
              <li className="p-3">
                3 - O fator de emissão para consumo de Gás Liquefeito de
                Petróleo (GLP) disponibilizado nesta ferramenta é referente ao
                consumo de GLP em kg. O GLP em seu estado líquido possui
                densidade igual a 550 kg/m³. Algumas organizações podem obter o
                dado de consumo de GLP em m³, porém, relativo ao volume do GLP
                em seu estado gasoso, que possui densidade igual a 2,2 kg/m³. Ao
                converter os dados de consumo de GLP, deve-se atentar para essas
                conversões e para a característica do combustível (em estado
                líquido ou gasoso) que está sendo relatado.
              </li>
            </ul>
          </div>
        </Box>
      </Modal>
      <Modal
        open={showHowToFillCE}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                setShowHowToFillCE(!showHowToFillCE);
              }}
            >
              <CloseIcon />
            </Button>
          </div>
          <div className="p-5 d-flex flex-column align-items-start">
            <h2 className="p-5">Orientações gerais:</h2>
            <ul className="p-3 d-flex flex-column align-items-start">
              <li>
                (A) Esta seção da ferramenta calcula as emissões por combustão
                estacionária.
              </li>
              <li>
                (B) É imprescindível a escolha do setor da economia para que os
                fatores de emissão corretos sejam considerados.
              </li>
              <li>
                (C) Preencha somente as células LARANJA CLARO da Ferramenta.{" "}
              </li>
              <li>
                (D) Ao final desta seção são apresentadas as emissões totais por
                combustão estacionária.
              </li>
            </ul>
            <p className=" p-4">
              (A) Preencha os dados relativos ao uso de combustível para cada
              fonte de emissão, unidade ou local. Os combustíveis comerciais
              referem-se aos combutíveis vendidos em postos de combustível e,
              portanto, possuem biocombustíveis em sua composição. A Ferramenta
              realiza da separação das parcelas de combutível fóssil e
              biocombustível automaticamente.
            </p>
            <p className="p-4">
              Obs.: Para informações sobre o cálculo de emissões referentes ao
              consumo de Gás Liquefeito de Petróleo (GLP) consulte a Seção 1, da
              aba 'Fatores de Emissão'.
            </p>
            <h3 className="p-4">
              Passo 1. Indique a finalidade das atividades da organização
              inventariante1
            </h3>
            <p className="p-4">
              1 O cálculo é efetuado somente quando selecionado o setor de
              atividade que mais se adequa às atividades da organização. Os
              setores listados seguem o Painel Intergovernamental sobre Mudança
              Climática (IPCC) e o Inventário Nacional. Para mais informações,
              consulte a aba "Fatores de Emissão". Caso a organização atue em
              mais de um setor, selecione aquele que melhor representa a
              atividade exercida pelas fontes de emissão estacionárias. Caso
              existam diversas unidades de operação em setores muito distintos,
              utilize uma planilha para cada unidade.
            </p>
            <h3 className="p-4">
              Passo 2. Indique a quantidade total de combustível consumido para
              cada unidade, local, ou ponto (de acordo com o tipo de
              combustível) na Tabela 1. Se necessário, converta o dado de
              consumo para coincidir com as unidades apresentadas.
            </h3>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ShowInfo;
