import React, {useState} from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Box,
  Button,
  Typography,
  Modal,
  CardContent,
  Card,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { style} from "../../../utils/util"
import { itemEmissaoEqRefrRAC } from "../selectionData";

const SubModalEmissosFugitivas = ({
  itemEmissosFugitivas,
  openSubEmissosFugitivas,
  setOpenSubEmissosFugitivas,
}) => {
  const [curentIdxSubEsco1, setCurentIdxSubEsco1] = useState();

  return (
    <>
      <Modal
        open={openSubEmissosFugitivas}
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
            <div className="d-flex align-items-end">
              <h2
                style={{ color: "#953fc6" }}
                className="fs-3 font-weight-bold text-uppercase"
              >
                {itemEmissosFugitivas.title}
              </h2>
            </div>
            <div className="d-flex align-items-start">
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  setOpenSubEmissosFugitivas(!openSubEmissosFugitivas);
                }}
              >
                Voltar
              </Button>
            </div>
          </div>
          {itemEmissosFugitivas.id === 0 && (
            <div className="d-flex  justify-content-between">
              <div className="d-flex flex-column align-items-start">
                {itemEmissaoEqRefrRAC?.map((elem, idx) => {
                  return (
                    <div className="mb-3" id={idx}>
                      <Card
                        className="d-flex  justify-content-center align-items-center"
                        style={{
                          width: 280,
                          minHeight: 160,
                          backgroundColor:
                            curentIdxSubEsco1 === idx ? "#4682B4" : "#ccc",
                          cursor: "pointer",
                        }}
                      >
                        <CardContent
                          onClick={() => {
                            setCurentIdxSubEsco1(idx);
                          }}
                        >
                          <h1 className="text-light fs-3">{elem}</h1>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
              <div>
                {curentIdxSubEsco1 === 0 ? (
                  <>
                    <div className="d-flex  justify-content-around mb-3">
                      <div className="d-flex align-items-end">
                        <div className="d-flex justify-content-around">
                          <div className="m-2">
                            <h3>Registro da Fonte</h3>
                            <TextField
                              id="regist-fonta"
                              label=" Digite o registro da fonte..."
                              variant="outlined"
                            />
                          </div>
                          <div className="m-2">
                            <h3>Gás ou Composto</h3>
                            <TextField
                              id="gas-composto"
                              label="Digite Aqui..."
                              variant="outlined"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h2>Unidades Novas</h2>
                        <div className="d-flex  justify-content-around">
                          <div className="m-2">
                            <h3>Carga (kg)</h3>
                            <TextField
                              id="cargaUN"
                              label="Digite Aqui..."
                              variant="outlined"
                            />
                          </div>
                          <div className="m-2">
                            <h3>Capacidade (kg)</h3>
                            <TextField
                              id="capacidadeUN"
                              label="Digite Aqui..."
                              variant="outlined"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex  justify-content-around mt-5">
                      <div>
                        <h3 className=" mb-3">Unidades Existentes</h3>
                        <div className="m-2">
                          <h3>Carga (kg)</h3>
                          <TextField
                            id="cargaUE"
                            label="Digite Aqui..."
                            variant="outlined"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-3">Unidades Dispersadas</h3>
                        <div className="d-flex  justify-content-around mb-3">
                          <div className="m-2">
                            <h3>Capacidade (kg)</h3>
                            <TextField
                              id="capacidadeUD"
                              label="Digite Aqui..."
                              variant="outlined"
                            />
                          </div>
                          <div className="m-2">
                            <h3>Recuperada (kg)</h3>
                            <TextField
                              id="recuperadaUD"
                              label="Digite Aqui..."
                              variant="outlined"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : curentIdxSubEsco1 === 1 ? (
                  <>
                    <div className="d-flex  justify-content-around mb-3">
                      <div className="m-2">
                        <h3>Registro da Fonte</h3>
                        <TextField
                          id="regist-fonte"
                          label=" Digite o registro da fonte..."
                          variant="outlined"
                        />
                      </div>
                      <div className="m-2">
                        <h3>Gás ou Composto</h3>
                        <TextField
                          id="gas-composto"
                          label="Digite Aqui..."
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div className="d-flex  justify-content-around mt-5">
                      <div>
                        <h3 className=" mb-3">Variação no Estoque</h3>
                        <div className="m-2">
                          <h3>VE</h3>
                          <TextField
                            id="variacaoE"
                            label="Digite Aqui..."
                            variant="outlined"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className=" mb-3">Quantidade Transferida</h3>
                        <div className="m-2">
                          <h3>T (kg)</h3>
                          <TextField
                            id="quantTransf"
                            label="Digite Aqui..."
                            variant="outlined"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className=" mb-3">Mudança de Capacidade</h3>
                        <div className="m-2">
                          <h3>MC (kg)</h3>
                          <TextField
                            id="cargaUE"
                            label="Digite Aqui..."
                            variant="outlined"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : curentIdxSubEsco1 === 2 ? (
                  <>
                    <div className="d-flex  justify-content-around mb-3">
                      <div className="m-2">
                        <h3>Registro da Fonte</h3>
                        <TextField
                          id="regist-fonte"
                          label=" Digite o registro da fonte..."
                          variant="outlined"
                        />
                      </div>
                      <div className="m-2">
                        <h3>Gás ou Composto</h3>
                        <TextField
                          id="gas-composto"
                          label="Digite Aqui..."
                          variant="outlined"
                        />
                      </div>
                      <div className="m-2">
                        <h3>Tipo de Equipamento</h3>
                        <TextField
                          id="tipo-equipamento"
                          label="Digite Aqui..."
                          variant="outlined"
                        />
                      </div>
                      <div className="m-2">
                        <h3>Carga das Unidades Novas</h3>
                        <TextField
                          id="carga-UN"
                          label="Digite Aqui..."
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className=" mb-1">Capacidade</h3>
                      <div className="d-flex  justify-content-center ">
                        <div className="m-2">
                          <h3>Unidade de Operação(kg)</h3>
                          <TextField
                            id="uni-Ope"
                            label="Digite Aqui..."
                            variant="outlined"
                          />
                        </div>
                        <div className="m-2">
                          <h3>Unidade Dispensadas(kg)</h3>
                          <TextField
                            id="uni-dis"
                            label="Digite Aqui..."
                            variant="outlined"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          )}
          {itemEmissosFugitivas.id === 1 && (
            <div className="d-flex flex-wrap justify-content-center">
              <div className="m-2">
                <h3>Registro da Fonte</h3>
                <TextField
                  id="regist-fonta"
                  label=" Digite o registro da fronte..."
                  variant="outlined"
                />
              </div>
              <div className="m-2">
                <h3>GÁS</h3>
                <TextField
                  id="gas"
                  label=" Digite o registro da fonte..."
                  variant="outlined"
                />
              </div>
              <div className="m-2">
                <h3>Estoque de Gás inicio do Ano</h3>
                <TextField
                  id="gas-ia"
                  label=" Digite o registro da fonte..."
                  variant="outlined"
                />
              </div>
              <div className="m-2">
                <h3>Estoque de Gás Final do Ano</h3>
                <TextField
                  id="gas-fa"
                  label=" Digite o registro da fonte..."
                  variant="outlined"
                />
              </div>
              <div className="m-2">
                <h3>Quantidade de Gás comprado no Ano</h3>
                <TextField
                  id="gas-qt-ca"
                  label=" Digite o registro da fonte..."
                  variant="outlined"
                />
              </div>
            </div>
          )}
          {itemEmissosFugitivas.id === 2 && (
            <div className="d-flex  justify-content-center">
              <div className="m-2">
                <h3>Registro da Fonte</h3>
                <TextField
                  id="regist-fonta"
                  label=" Digite o registro da fronte..."
                  variant="outlined"
                />
              </div>
              <div className="m-2">
                <h3>Descrição da Fonte</h3>
                <TextField
                  id="desc-fonte"
                  label=" Digite a descrição da fonte.."
                  variant="outlined"
                />
              </div>
              <div className="m-2">
                <h3>Gas de Efeito estufa</h3>
                <TextField
                  id="gas-ee"
                  label=" Digite a descrição da fonte..."
                  variant="outlined"
                />
              </div>
              <div className="m-2">
                <h3>Emissões kg (GEE)</h3>
                <TextField
                  id="emissao-gee"
                  label=" Digite aqui"
                  variant="outlined"
                />
              </div>
            </div>
          )}
          <div className="m-3">
            <Button
              variant="contained"
              size="large"
              // onClick={handleChangeEsco1}
            >
              Salvar
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default SubModalEmissosFugitivas;