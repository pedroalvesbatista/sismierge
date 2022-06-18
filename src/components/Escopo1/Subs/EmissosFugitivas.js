import React,{useState} from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  CardContent,
  Card,
} from "@mui/material";

import { style } from "../../../utils/util";
import { tipoEmissaoFugitivas } from "../selectionData";
import SubModalEmissosFugitivas from "./SubModalEmissosFugitivas";

const EmissosFugitivas = ({
  curentIdxEsco1,
  nextEsco1Button,
  handleChangeEsco1,
   setCurentIdxEsco1,

}) => {
 const [openSubEmissosFugitivas, setOpenSubEmissosFugitivas] = useState(false);
 const [itemEmissosFugitivas, setItemEmissosFugitivas] = useState({
     id: "",
     abrev: "",
     title: "",
   });

  return (
    <Modal
      open={nextEsco1Button}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="d-flex justify-content-between mb-5 pt-3">
          <div style={{ minWidth: 300 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Primeiro Escopo
            </Typography>

            <h2 className="mt-3 pb-2">Emissões Fugitivas</h2>
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
        <div className="d-flex  justify-content-center" style={{marginTop:"11%"}}>
          {tipoEmissaoFugitivas?.map((elem, idx) => {
            return (
              <div className="m-3 " id={idx}>
                <Card
                  className="d-flex  justify-content-center align-items-center"
                  style={{
                    width: 280,
                    minHeight: 160,
                    backgroundColor:
                      curentIdxEsco1 === idx ? "#4682B4" : "#ccc",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => {
                    setCurentIdxEsco1(idx);
                    setItemEmissosFugitivas({
                      id: idx,
                      abrev: elem.abrev,
                      title: elem.title,
                    });
                  }}
                  onClick={() => {
                    setOpenSubEmissosFugitivas(!openSubEmissosFugitivas);
                  }}
                >
                  <CardContent>
                    <h1 className="text-light fs-3">{elem.abrev}</h1>
                  </CardContent>
                </Card>
              </div>
            );
          })}
          <SubModalEmissosFugitivas
            setOpenSubEmissosFugitivas={setOpenSubEmissosFugitivas}
            openSubEmissosFugitivas={openSubEmissosFugitivas}
            itemEmissosFugitivas={itemEmissosFugitivas}
          />
        </div>
      </Box>
    </Modal>
  );
};

export default EmissosFugitivas;