import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { data } from "./selectionData";
import { style } from "../../utils/util";
import CombustaoEstacionaria from "./Subs/CombustaoEstacionaria";
import CombustaoMovel from "./Subs/CombustaoMovel";
import SoloAgriculturaIndustrias from "./Subs/SoloAgriculturaIndustrias";
import EmissosFugitivas from "./Subs/EmissosFugitivas";
import ResiduosSolidos from "./Subs/ResiduosSolidos";
import Efluentes from "./Subs/Efluentes";
import { sheetActions } from "../../actions";

const Escopo1 = ({ openStartInvet, setOpenStartInvet, data }) => {
  const dispatch = useDispatch()
  const { loadingSubEscopo, sucessCreateSubEscopo, dataSubEscopo } = useSelector(state => state.sheet)
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

  const [showSubEsco1, setShowSubEsco1] = useState("");
  const [nextEsco1Button, setnextEsco1Button] = useState(false);
  const [curentIdxEsco1, setCurentIdxEsco1] = useState();
  const handleClose = () => setOpenStartInvet(false);

  const handleEsco1 = (name, id) => {
    let nameToSwitch = name.toLowerCase();

    switch (nameToSwitch) {
      case "combustão estacionária":
        setShowSubEsco1(name);
        break;
      case "combustão móvel":
        setShowSubEsco1(name);
        break;
      case "mudanças no uso do solo":
        setShowSubEsco1(name);
        break;
      case "emissões fugitivas":
        setShowSubEsco1(name);
        break;
      case "atividades de agricultura":
        setShowSubEsco1(name);
        break;
      case "efluentes":
        setShowSubEsco1(name);
        break;
      case "resíduos sólidos":
        setShowSubEsco1(name);
        break;
      case "processos industriais":
        setShowSubEsco1(name);
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

  // console.log(dataSubEscopo);

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
            {data?.map((elem, idx) => {
              return (
                <Card
                  key={idx}
                  id={idx}
                  style={{
                    width: 200,
                    margin: 20,
                    backgroundColor:
                      curentIdxEsco1 === elem.sheetId ? "#4682B4" : "#ccc",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleEsco1(elem.title);
                    setCurentIdxEsco1(elem.sheetId);
                    // console.log(curentIdxEsco1);
                    dispatch(sheetActions.loadSubEscopos(elem.sheetId))
                  }}
                >
                  <CardContent className="text-light font-weight-bold text-uppercase">
                    {elem.title}
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

      {showSubEsco1 === "Combustão estacionária" && (
        <CombustaoEstacionaria
          nextEsco1Button={nextEsco1Button}
          handleChangeEsco1={handleChangeEsco1}
          // idSheet={data[0].sheetId}
        />
      )}

      {showSubEsco1 === "Combustão móvel" && (
        <CombustaoMovel
          curentIdxEsco1={curentIdxEsco1}
          setCurentIdxEsco1={setCurentIdxEsco1}
          nextEsco1Button={nextEsco1Button}
          handleChangeEsco1={handleChangeEsco1}
        />
      )}

      {(showSubEsco1 === "Mudança no uso do solo" ||
        showSubEsco1 === "Atividades de agricultura" ||
        showSubEsco1 === "Processos industriais") && (
        <SoloAgriculturaIndustrias
          nextEsco1Button={nextEsco1Button}
          handleChangeEsco1={handleChangeEsco1}
          mudancaSolo={showSubEsco1.mudanca_solo}
          atividadesAgricultura={showSubEsco1.atividades_agricultura}
          processosIndustrias={showSubEsco1.processos_industrias}
        />
      )}

      {showSubEsco1 === "Emissões fugitivas" && (
        <EmissosFugitivas
          nextEsco1Button={nextEsco1Button}
          handleChangeEsco1={handleChangeEsco1}
          curentIdxEsco1={curentIdxEsco1}
          setCurentIdxEsco1={setCurentIdxEsco1}
        />
      )}

      {showSubEsco1?.title === "Resíduos sólidos" && (
        <ResiduosSolidos
          nextEsco1Button={nextEsco1Button}
          handleChangeEsco1={handleChangeEsco1}
        />
      )}

      {showSubEsco1 === "Efluentes" && (
        <Efluentes
          nextEsco1Button={nextEsco1Button}
          handleChangeEsco1={handleChangeEsco1}
        />
      )}
    </>
  );
};

export default Escopo1;
