import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
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
} from "@mui/material";

import { subItemEscopo1 } from "./selectionData";
import { style } from "./util";
import CombustaoEstacionaria from "./Subs/CombustaoEstacionaria";
import CombustaoMovel from "./Subs/CombustaoMovel";
import SoloAgriculturaIndustrias from "./Subs/SoloAgriculturaIndustrias";
import EmissosFugitivas from "./Subs/EmissosFugitivas";
import ResiduosSolidos from "./Subs/ResiduosSolidos";
import Efluentes from "./Subs/Efluentes";

const Escopo1 = ({ openStartInvet, setOpenStartInvet }) => {
  const [invetYear, setInvetYear] = useState("");
  const [setor, setSetor] = useState("");
  let initDataSubEsco1 = {
    combustao_estacionaria: false,
    combustao_movel: false,
    mudanca_solo: false,
    emissos_fugitivas: false,
    atividades_agricultura: false,
    efluentes: false,
    residuos_solidos: false,
    processos_industrias: false,
  };

  const [showSubEsco1, setShowSubEsco1] = useState(initDataSubEsco1);
  const [nextEsco1Button, setnextEsco1Button] = useState(false);
  const [curentIdxEsco1, setCurentIdxEsco1] = useState();
  const handleClose = () => setOpenStartInvet(false);

  const handleEsco1 = (name) => {
    let nameToSwitch = name.toLowerCase();

    switch (nameToSwitch) {
      case "combustão estacionária":
        setShowSubEsco1({
          ...initDataSubEsco1,
          combustao_estacionaria: !initDataSubEsco1.combustao_estacionaria,
        });
        break;
      case "combustão móvel":
        setShowSubEsco1({
          ...initDataSubEsco1,
          combustao_movel: !initDataSubEsco1.combustao_movel,
        });
        break;
      case "mudanças no uso do solo":
        setShowSubEsco1({
          ...initDataSubEsco1,
          mudanca_solo: !initDataSubEsco1.mudanca_solo,
        });
        break;
      case "emissões fugitivas":
        setShowSubEsco1({
          ...initDataSubEsco1,
          emissos_fugitivas: !initDataSubEsco1.emissos_fugitivas,
        });
        break;
      case "atividades de agricultura":
        setShowSubEsco1({
          ...initDataSubEsco1,
          atividades_agricultura: !initDataSubEsco1.atividades_agricultura,
        });
        break;
      case "efluentes":
        setShowSubEsco1({
          ...initDataSubEsco1,
          efluentes: !initDataSubEsco1.efluentes,
        });
        break;
      case "resíduos sólidos":
        setShowSubEsco1({
          ...initDataSubEsco1,
          residuos_solidos: !initDataSubEsco1.residuos_solidos,
        });
        break;
      case "processos industriais":
        setShowSubEsco1({
          ...initDataSubEsco1,
          processos_industrias: !initDataSubEsco1.processos_industrias,
        });
        break;
    }
  };

  const handleChange = (event) => {
    setInvetYear(event.target.value);
  };

  const handleChangeSetor = (event) => {
    setSetor(event.target.value);
  };

  const handleChangeEsco1 = () => {
    setnextEsco1Button(!nextEsco1Button);
    setOpenStartInvet(!openStartInvet);
    setCurentIdxEsco1("");
  };

  return (
    <>
      <Modal
        open={openStartInvet}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex  justify-content-between mb-4">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Primeiro Escopo
            </Typography>

            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </div>
          <div
            className="mt-4"
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Card sx={{ width: 185 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Escolha o Ano Inventariodo
                </Typography>

                <FormControl sx={{ m: 1, minWidth: 80 }} required>
                  <InputLabel id="invetYear-label">Ano</InputLabel>
                  <Select
                    labelId="invetYear-label"
                    id="invetYear"
                    value={invetYear}
                    onChange={handleChange}
                    autoWidth
                    label="Selecione o Ano"
                  >
                    <MenuItem value={2015}>2015</MenuItem>
                    <MenuItem value={2010}>2010</MenuItem>
                    <MenuItem value={2020}>2020</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
            <Card sx={{ width: 285 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Selecione o setor de Atividade
                </Typography>

                <FormControl sx={{ m: 1, minWidth: 80 }} required>
                  <InputLabel id="setor-label">Setor</InputLabel>
                  <Select
                    labelId="setor-label"
                    id="setor"
                    value={setor}
                    onChange={handleChangeSetor}
                    autoWidth
                    label="Selecione o setor de Atividade"
                  >
                    <MenuItem value={"energia"}>Energia</MenuItem>
                    <MenuItem value={"manufatura"}>
                      Manufatura ou Construção
                    </MenuItem>
                    <MenuItem value={"comercial_Inst"}>
                      Comercial ou Institucional
                    </MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </div>
          <div className=" mt-4 mb-5 d-flex align-content-center flex-wrap ">
            {subItemEscopo1?.map((elem, idx) => {
              return (
                <Card
                  id={idx}
                  style={{
                    width: 200,
                    margin: 20,
                    backgroundColor:
                      curentIdxEsco1 === idx ? "#4682B4" : "#ccc",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleEsco1(elem);
                    setCurentIdxEsco1(idx);
                  }}
                >
                  <CardContent className="text-light font-weight-bold text-uppercase">
                    {elem}
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <Button variant="contained" size="large" onClick={handleChangeEsco1}>
            Próximo
          </Button>
        </Box>
      </Modal>

      {showSubEsco1.combustao_estacionaria && (
        <CombustaoEstacionaria
          nextEsco1Button={nextEsco1Button}
          handleChangeEsco1={handleChangeEsco1}
        />
      )}

      {showSubEsco1.combustao_movel && (
        <CombustaoMovel
          curentIdxEsco1={curentIdxEsco1}
          setCurentIdxEsco1={setCurentIdxEsco1}
          nextEsco1Button={nextEsco1Button}
          handleChangeEsco1={handleChangeEsco1}
        />
      )}

      {(showSubEsco1.mudanca_solo ||
        showSubEsco1.atividades_agricultura ||
        showSubEsco1.processos_industrias) && (
        <SoloAgriculturaIndustrias
          nextEsco1Button={nextEsco1Button}
          handleChangeEsco1={handleChangeEsco1}
          mudancaSolo={showSubEsco1.mudanca_solo}
          atividadesAgricultura={showSubEsco1.atividades_agricultura}
          processosIndustrias={showSubEsco1.processos_industrias}
        />
      )}

      {showSubEsco1.emissos_fugitivas && (
        <EmissosFugitivas
          nextEsco1Button={nextEsco1Button}
          handleChangeEsco1={handleChangeEsco1}
          curentIdxEsco1={curentIdxEsco1}
          setCurentIdxEsco1={setCurentIdxEsco1}
        />
      )}

      {showSubEsco1.residuos_solidos && (
        <ResiduosSolidos
          nextEsco1Button={nextEsco1Button}
          handleChangeEsco1={handleChangeEsco1}
        />
      )}

      {showSubEsco1.efluentes && (
        <Efluentes
          nextEsco1Button={nextEsco1Button}
          handleChangeEsco1={handleChangeEsco1}
        />
      )}
    </>
  );
};

export default Escopo1;
