import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { contabilizarActions, othersActions } from "../../actions";
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
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { escopo, inicial } from "../../constants/app/";
import Board from "../../components/Board";

import { Area, TextArea, HeaderArea } from "./styles";
import { Container, Ul, Li } from "../Admin/../../components/Tabs/styles";
import TabsAdmin from "../../components/Tabs";
// import Modal from "../../components/Modal";
import Routes from "./Routes";

const style = {
  position: "absolute",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1350,
  height: 700,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

const optionBiogasDestination = ["Queima Em Flare", "Geração de Energia"];

const RinkingCard = ({ title, label, id, value, handleChangeFunc, option }) => {
  return (
    <>
      <Card className="m-4">
        <CardContent
          style={{
            backgroundColor: "#2cb29e",
            color: "#fff",
          }}
        >
          <h3>{title}</h3>
          <FormControl sx={{ m: 1, minWidth: 80 }} required>
            <InputLabel id={id}>Selecione {label}</InputLabel>
            <Select
              style={{
                color: "#fff",
              }}
              labelId={id}
              id={id}
              value={value}
              onChange={handleChangeFunc}
              autoWidth
              label={label}
            >
              {option?.map((elem) => (
                <MenuItem value={elem}>{elem}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
};

const SubModalEmissosFugitivas = ({
  itemEmissosFugitivas,
  openSubEmissosFugitivas,
  setOpenSubEmissosFugitivas,
}) => {
  const [curentIdxSubEsco1, setCurentIdxSubEsco1] = useState();

  const tipoTransporteSubEsco1 = [
    "Transporte Rodoviario",
    "Transporte Ferroviário",
    "Transporte Hidroviário",
    "Trasnporte Aereo",
  ];
  return (
    <>
      <Modal
        open={openSubEmissosFugitivas}
        // onClose={handleClose}
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
                {tipoTransporteSubEsco1?.map((elem, idx) => {
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

const SubModalEsc1 = (props) => {
  console.log(props);
  const {
    shippingYear,
    setShippingYear,
    enterCompostData,
    setEnterCompostData,
    setEnterPercentageResidue,
    enterPercentageResidue,
    setEnterIncinerationData,
    enterIncinerationData,
    setCalculationOtherTools,
    calculationOtherTools,
  } = props;

  const [subShippingYear, setSubShippingYear] = useState("");
  const [rinkinkPaperCA, setRinkinkPaperCA] = useState("");
  const [rinkinkPaperDB, setRinkinkPaperDB] = useState("");
  const [rinkinkWasteCA, setRinkinkWasteCA] = useState("");
  const [rinkinkWasteDB, setRinkinkWasteDB] = useState("");
  const [rinkinkWoodCA, setRinkinkWoodCA] = useState("");
  const [rinkinkWoodDB, setRinkinkWoodDB] = useState("");
  const [rinkinkGardenCA, setRinkinkGardenCA] = useState("");
  const [rinkinkGardenDB, setRinkinkGardenDB] = useState("");
  const [rinkinkRubberCA, setRinkinkRubberCA] = useState("");
  const [rinkinkRubberDB, setRinkinkRubberDB] = useState("");
  const [rinkinkSewageCA, setRinkinkSewageCA] = useState("");
  const [rinkinkSewageDB, setRinkinkSewageDB] = useState("");
  const [rinkinkFoodsCA, setRinkinkFoodsCA] = useState("");
  const [rinkinkFoodsDB, setRinkinkFoodsDB] = useState("");
  const [rinkinkDiapersCA, setRinkinkDiapersCA] = useState("");
  const [rinkinkDiapersDB, setRinkinkDiapersDB] = useState("");

  const shippingYearData = [
    {
      id: 0,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 1,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 3,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 4,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 5,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 6,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 7,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 8,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 9,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 10,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 11,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 12,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 13,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 14,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 15,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 16,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 17,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 18,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 19,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 20,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 21,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 22,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 23,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 24,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 25,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 26,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 27,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 28,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 29,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
    {
      id: 30,
      title: "Ano de envio",
      placeholder: "Digite o ano de envio",
    },
  ];

  const handleChangeSubShippingYear = (event) => {
    setSubShippingYear(event.target.value);
  };
  const handleChangeRinkinkPaperCA = (event) => {
    setRinkinkPaperCA(event.target.value);
  };
  const handleChangeRinkinkPaperDB = (event) => {
    setRinkinkPaperDB(event.target.value);
  };
  const handleChangeRinkinkWasteCA = (event) => {
    setRinkinkWasteCA(event.target.value);
  };
  const handleChangeRinkinkWasteDB = (event) => {
    setRinkinkWasteDB(event.target.value);
  };
  const handleChangeRinkinkWoodCA = (event) => {
    setRinkinkWoodCA(event.target.value);
  };
  const handleChangeRinkinkWoodDB = (event) => {
    setRinkinkWoodDB(event.target.value);
  };
  const handleChangeRinkinkGardenCA = (event) => {
    setRinkinkGardenCA(event.target.value);
  };
  const handleChangeRinkinkGardenDB = (event) => {
    setRinkinkGardenDB(event.target.value);
  };
  const handleChangeRinkinkRubberCA = (event) => {
    setRinkinkRubberCA(event.target.value);
  };
  const handleChangeRinkinkRubberDB = (event) => {
    setRinkinkRubberDB(event.target.value);
  };
  const handleChangeRinkinkSewageCA = (event) => {
    setRinkinkSewageCA(event.target.value);
  };
  const handleChangeRinkinkSewageDB = (event) => {
    setRinkinkSewageDB(event.target.value);
  };
  const handleChangeRinkinkFoodsCA = (event) => {
    setRinkinkFoodsCA(event.target.value);
  };
  const handleChangeRinkinkFoodsDB = (event) => {
    setRinkinkFoodsDB(event.target.value);
  };
  const handleChangeRinkinkDiapersCA = (event) => {
    setRinkinkDiapersCA(event.target.value);
  };
  const handleChangeRinkinkDiapersDB = (event) => {
    setRinkinkDiapersDB(event.target.value);
  };

  const optionLandfilClassification = ["A", "B", "C", "D", "E"];

  return (
    <>
      <Modal
        open={shippingYear}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-between mb-5 pt-3">
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Primeiro Escopo
              </Typography>

              <h2 className="mt-3 pb-2">Ano de Envio de Residuo</h2>
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
                onClick={() => {
                  setShippingYear(!shippingYear);
                }}
              >
                Voltar
              </Button>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between mb-4">
            {shippingYearData.map((elem, idx) => (
              <div className="m-2" id={idx}>
                <h3>{elem.title}</h3>
                <TextField
                  id={`year-${elem.id}`}
                  label={elem.placeholder}
                  variant="outlined"
                />
              </div>
            ))}
          </div>
          <div>
            <Button variant="contained" size="large">
              Salvar
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={enterCompostData}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-between mb-5 pt-3">
            <div>
              <Card>
                <CardContent
                  style={{
                    backgroundColor: "#2cb29e",
                    color: "#fff",
                  }}
                >
                  Destino do Biogas
                </CardContent>
              </Card>
            </div>
            <div>
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  setEnterCompostData(!enterCompostData);
                }}
              >
                Voltar
              </Button>
            </div>
          </div>
          <div className="d-flex  justify-content-between mb-4">
            <div className="d-flex  justify-content-between">
              <div>
                <div className="m-4 d-flex  justify-content-between">
                  <p
                    className="d-flex align-items-center"
                    style={{ width: 290 }}
                  >
                    Quantidade de resíduo destinado a compostagem (caso não haja
                    compostagem, deixe esta seção em branco)
                  </p>
                  <div className="m-4">
                    <h3>Masssa de Resíduo</h3>
                    <TextField
                      id="massa-residuo"
                      label="Digite a massa"
                      variant="outlined"
                    />
                  </div>
                </div>
                <div className="m-4 d-flex  justify-content-between">
                  <p className="d-flex align-items-center">
                    Fator de emissão de CH4
                  </p>
                  <div className="m-4 ">
                    <h3>[gCH4/kgresíduo]</h3>
                    <TextField
                      id="kg-residuo"
                      label="Digite o fator"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="d-flex  justify-content-between">
                <p className="d-flex align-items-center">Recuperação de CH4</p>

                <div className="m-4">
                  <h3>[tCH4/ano]</h3>
                  <TextField
                    id="tch4-ano"
                    label="Digite o Ano de Envio"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="d-flex  justify-content-between">
                <p className="d-flex align-items-center">
                  Fator de emissão de N2O
                </p>

                <div className="m-4">
                  <h3>[gN2O/kgresíduo]</h3>
                  <TextField
                    id="gn20-kgresiduo"
                    label="Digite o Ano de Envio"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="d-flex  justify-content-between">
                <p className="d-flex align-items-center">Recuperação de CH4</p>

                <div className="m-4 ">
                  <h3>[tCH4/ano]</h3>
                  <TextField
                    id="tch4-ano-2"
                    label="Digite a Quantidade"
                    variant="outlined"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex  justify-content-center">
            <Button variant="contained" size="large" className="m-3">
              Salvar
            </Button>
            <Button variant="contained" size="large" className="m-3">
              Novo
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={enterIncinerationData | calculationOtherTools}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-between mb-5 pt-3">
            <div>
              <Card>
                <CardContent
                  style={{
                    backgroundColor: "#2cb29e",
                    color: "#fff",
                  }}
                >
                  <h3>Emissões totais de resíduos tratados por incineração</h3>
                  {calculationOtherTools && (
                    <p style={{ color: "red" }}>
                      Apartir de outras Ferramentas de cálculo
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
            <div>
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  calculationOtherTools &&
                    setCalculationOtherTools(!calculationOtherTools);
                  enterIncinerationData &&
                    setEnterIncinerationData(!enterIncinerationData);
                }}
              >
                Voltar
              </Button>
            </div>
          </div>
          <div className="d-flex  justify-content-center mb-4">
            <div>
              <div className="m-4">
                <h3>Registro de Fonte</h3>
                <TextField
                  id="massa-registro"
                  label="Digite a massa"
                  variant="outlined"
                />
              </div>
              <div className="m-4">
                <h3>Emissão CO2(t)</h3>
                <TextField
                  id="emissao-co2"
                  label="Digite a quantidade"
                  variant="outlined"
                />
              </div>
            </div>
            <div>
              <div className="m-4">
                <h3>Emissão CH4(t)</h3>
                <TextField
                  id="emissao-ch4"
                  label="Digite a Quantidade"
                  variant="outlined"
                />
              </div>
              <div className="m-4">
                <h3>Tipo de Residuo</h3>
                <TextField
                  id="tipo-residuo"
                  label="Digite o fator"
                  variant="outlined"
                />
              </div>
            </div>
            <div>
              <div className="m-4">
                <h3>Emissão N2O(t)</h3>
                <TextField
                  id="emissao-n2o"
                  label="Digite a Quantidade"
                  variant="outlined"
                />
              </div>
              <div className="m-4">
                <h3>Emissão CO2 Biogenico(t)</h3>
                <TextField
                  id="emissao-co2-biogenico"
                  label="Digite a quantidade"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
          <div className="d-flex  justify-content-around">
            {enterIncinerationData && (
              <p style={{ width: 400, color: "red" }}>
                Recomenda-se que os dados de emissões por incineração de
                resíduos sejam obtidos diretamente com o operador do incinerador
                ou que sejam calculados com o uso de métodos reconhecidos como
                os do IPCC (2006).
              </p>
            )}
            <div>
              <Button variant="contained" size="large" className="m-3 ">
                Salvar
              </Button>

              <Button variant="contained" size="large" className="m-3">
                Novo
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={enterPercentageResidue}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-between mb-5 pt-3">
            <div>
              <h2>Classificação</h2>
            </div>
            <div>
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  setEnterPercentageResidue(!enterPercentageResidue);
                }}
              >
                Voltar
              </Button>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <div>
              <div>
                <h3>Ano de Envio</h3>
                <FormControl sx={{ m: 1, minWidth: 80 }} required>
                  <InputLabel id="ano-envio">Ano</InputLabel>
                  <Select
                    labelId="ano-envio"
                    id="anoEnvio"
                    value={subShippingYear}
                    onChange={handleChangeSubShippingYear}
                    autoWidth
                    label="Selecione o Ano"
                  >
                    {shippingYearData.map((elem) => (
                      <MenuItem value={20 + elem.id}>20{elem.id}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="m-4">
                <h3>% de Disposição do Resíduo no Ano</h3>
                <TextField
                  id="residuo-ano"
                  label="Digite o Ano de Referência"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h3 style={{ width: 400, color: "red" }}>
                Qualidade do local de Disposição dos Resíduos
              </h3>
              <div className="d-flex  justify-content-center">
                <p className="m-4">
                  <span style={{ color: "red" }}>A:</span>Se não possui a
                  classificação do aterro
                </p>
                <p className="m-4">
                  <span style={{ color: "red" }}>B:</span>Se aterro com
                  profundidade {`<`}5m{" "}
                </p>
              </div>
              <div className="d-flex  justify-content-center">
                <p className="m-4">
                  <span style={{ color: "red" }}>C:</span>Se aterro com
                  profundidade {`>=`}5m
                </p>
                <p className="m-4">
                  <span style={{ color: "red" }}>D:</span>Se aterro Sanitário
                </p>
              </div>
              <div>
                <p>
                  <span style={{ color: "red" }}>E:</span>Se aterro semi-aeróbio
                  manejado
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex  justify-content-center mb-4">
            <div>
              <div className="m-4">
                <h3>Papés/Papelão</h3>
                <RinkingCard
                  title={"Classificação do Aterro"}
                  value={rinkinkPaperCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkPaperCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkPaperDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkPaperDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
              <div className="m-4">
                <h3>Resíduos têxteis</h3>
                <RinkingCard
                  title={"Classificação do Aterro"}
                  value={rinkinkWasteCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkWasteCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkWasteDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkWasteDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
            </div>
            <div>
              <div className="m-4">
                <h3>Madeira</h3>
                <RinkingCard
                  title={"Clacificação do Aterro"}
                  value={rinkinkWoodCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkWoodCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkWoodDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkWoodDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
              <div className="m-4">
                <h3>Resíduos de jardim e parque</h3>
                <RinkingCard
                  title={"Classificação do Aterro"}
                  value={rinkinkGardenCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkGardenCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkGardenDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkGardenDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
            </div>
            <div>
              <div className="m-4">
                <h3>Borracha e couro</h3>
                <RinkingCard
                  title={"Classificação do Aterro"}
                  value={rinkinkRubberCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkRubberCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkRubberDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkRubberDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
              <div className="m-4">
                <h3>Logo de esgoto</h3>
                <RinkingCard
                  title={"Clacificação do Aterro"}
                  value={rinkinkSewageCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkSewageCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkSewageDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkSewageDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
            </div>
            <div>
              <div className="m-4">
                <h3>Resíduos alimentares</h3>
                <RinkingCard
                  title={"Clacificação do Aterro"}
                  value={rinkinkFoodsCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkFoodsCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkFoodsDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkFoodsDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
              <div className="m-4">
                <h3>Fraldas</h3>
                <RinkingCard
                  title={"Clacificação do Aterro"}
                  value={rinkinkDiapersCA}
                  option={optionLandfilClassification}
                  handleChangeFunc={handleChangeRinkinkDiapersCA}
                  label={"Classificar Aterro"}
                  id={"classi-aterro"}
                />
                <RinkingCard
                  title={"Destino do Biogas"}
                  value={rinkinkDiapersDB}
                  option={optionBiogasDestination}
                  handleChangeFunc={handleChangeRinkinkDiapersDB}
                  label={"Destino do Biogas"}
                  id={"destino-biogas"}
                />
              </div>
            </div>
          </div>
          <div className="d-flex  justify-content-center">
            <Button variant="contained" size="large" className="m-3 ">
              Salvar
            </Button>

            <Button variant="contained" size="large" className="m-3">
              Novo
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export const HomePage = () => {
  const { data } = useSelector((state) => state.contabilizar);
  const { isOpenModal } = useSelector((state) => state.others);
  const [tabActive, setTabActive] = useState("Visão geral");
  const [dataModal, setDataModal] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storage = JSON.parse(localStorage.getItem("@sismierge/data"));
  const [loading, setLoading] = useState(true);
  const [mouseOnCard, setMouseOnCard] = useState(false);
  const [idxCard, setIdxCard] = useState("");
  const [openStartInvet, setOpenStartInvet] = useState(false);
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
  const [itemEmissosFugitivas, setItemEmissosFugitivas] = useState({
    id: "",
    abrev: "",
    title: "",
  });
  const [nextEsco1Button, setnextEsco1Button] = useState(false);
  const [openSubEmissosFugitivas, setOpenSubEmissosFugitivas] = useState(false);

  const [curentIdxEsco1, setCurentIdxEsco1] = useState();
  const [fuelUsedEsco1, setFuelUsedEsco1] = useState();
  const [shippingYear, setShippingYear] = useState(false);
  const [enterCompostData, setEnterCompostData] = useState(false);
  const [enterPercentageResidue, setEnterPercentageResidue] = useState(false);
  const [enterIncinerationData, setEnterIncinerationData] = useState(false);
  const [calculationOtherTools, setCalculationOtherTools] = useState(false);
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

  const handleClose = () => setOpenStartInvet(false);

  const handleChangeFuelUsedEsco1 = (event) => {
    setFuelUsedEsco1(event.target.value);
  };

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

  const handleShippingYear = () => {
    setShippingYear(!shippingYear);
  };

  const handleEnterCompostData = () => {
    setEnterCompostData(!enterCompostData);
  };

  const handleEnterPercentageResidue = () => {
    setEnterPercentageResidue(!enterPercentageResidue);
  };
  const handleEnterIncinerationData = () => {
    setEnterIncinerationData(!enterIncinerationData);
  };
  const handleCalculationOtherTools = () => {
    setCalculationOtherTools(!calculationOtherTools);
  };

  const escopos = storage?.company.escopo.split(" e ");

  const [dataBoard, setdataBoard] = useState([
    "Escopo 1",
    "Escopo 2",
    "Escopo 3",
  ]);

  const subItemEscopo1 = [
    "Combustão Estacionária",
    "Combustão móvel",
    "Mudanças no uso do solo",
    "Emissões Fugitivas",
    "Atividades de Agricultura",
    "Efluentes",
    "Resíduos sólidos",
    "Processos Industriais",
  ];

  const fuelUsedEsco1Item = [
    "Coque de Carvão Mineral",
    "Carvão Vegetal",
    "Carvão Vapor sem Espeficicação",
    "Carvão Vapor 6000 kcal/kg",
    "Carvão Vapor 5900 kcal/kg",
    "Carvão Vapor 5200 kcal/kg",
    "Carvão Vapor 4700 kcal/kg",
    "Carvão Vapor 4500 kcal/kg",
    "Carvão Vapor 4200 kcal/kg",
    "Carvão Vapor 3700 kcal/kg",
    "Carvão Vapor 3300 kcal/kg",
    "Carvão Vapor 3100 kcal/kg",
    "Carvão Metalúrgico Nacional",
    "Carvão Metalúrgico Importado",
    "Caldo de cana",
    "Biogás",
    "Biodiesel (B100)",
    "Bagaço de cana",
    "Asfaltos",
    "Alcatrão",
    "Acetileno",
  ];

  const subEffluentTypeItem = [
    "Digestor Anaerobico",
    "Lodo Ativado",
    "Fossa Séptica",
    "Reator Anaerobico",
    "Lagoa Facultativo",
    "Lagoa Mista",
    "Lançamento Em Curso D´Agua Sem Coleta",
    "Tratamentos Sequenciais",
  ];

  // setTimeout(() => {
  //   setLoading(true)
  // }, 3000);

  // useEffect(() => {
  //   dispatch(contabilizarActions.loadData())
  //   dispatch(contabilizarActions.setDataStorage(escopo))

  // }, [storage, data, contabilizarActions.setDataStorage, loading])

  const handleInventariacao = (e) => {
    e.stopPropagation();
    setOpenStartInvet(true);
    // dispatch(othersActions.handleOpenModal("Formulário de Inventariação"));
  };

  const handleTabActive = (e) => {
    setTabActive(e);
    localStorage.setItem(`@sismiegee/tabActive`, e);
  };

  // useEffect(() => {
  //   if (storage?.company?.user.length === 1) {
  //     dispatch(othersActions.handleOpenModal("Adicionar colaboradores"));
  //   }
  //   // console.log(storage?.company.user.length);
  // }, []);

  const tipoTransporteEsco1 = [
    "Transporte Rodoviario",
    "Transporte Ferroviário",
    "Transporte Hidroviário",
    "Trasnporte Aereo",
  ];

  const tipoEmissaoFugitivas = [
    {
      abrev: "Emissões Eq.Refr. e Ar RAC e Extintores",
      title:
        "Emissões de Equipamentos de Refrigeração e Ar Condicionado (RAC) e Extintores de Incêndio",
    },
    {
      abrev: "Emissões utl. Exofre (SF6) e (NF3)",
      title:
        "Emissões por utilização de hexafluoreto de enxofre (SF6) e trifluoreto de nitrogênio (NF3)",
    },
    {
      abrev: "Relatório outras Ferramentas",
      title:
        "Relato de emissões de GEE estimadas a partir de outras ferramentas de cálculo",
    },
  ];

  return (
    <Area>
      {!loading ? (
        "Carregando..."
      ) : (
        <>
          {/* <HeaderArea>
            {dataBoard.map((item, index) => (
              <Board key={index} {... item} />
            ))}
          </HeaderArea> */}
          <div className="d-flex justify-content-around justify-content-center mt-5 mb-5">
            {dataBoard?.map((item, index) => {
              return (
                <div>
                  <Card
                    className="d-flex  justify-content-center align-items-center"
                    style={{
                      width: 200,
                      backgroundColor: "#9c348c",
                      cursor: "pointer",
                    }}
                  >
                    <CardContent
                      onMouseEnter={() => {
                        setMouseOnCard(true);
                        setIdxCard(index);
                      }}
                    >
                      <h1 className="text-light fs-3">{item}</h1>
                    </CardContent>
                  </Card>
                  {idxCard == index && mouseOnCard && (
                    <div
                      className="d-flex flex-column justify-content-between align-items-center mt-3"
                      onMouseLeave={() => setMouseOnCard(false)}
                    >
                      <Button
                        className="mt-1 mb-1"
                        variant="contained"
                        size="small"
                        color="success"
                      >
                        Baixar todas as NF
                      </Button>
                      <Button
                        onClick={handleInventariacao}
                        className="mt-1 mb-1"
                        variant="contained"
                        size="small"
                        color="success"
                      >
                        Iniciar Cálculo Inventariação
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <hr />
          <div className="d-flex justify-content-around mt-3">
            <Button variant="outlined" size="small" color="success">
              Dados Rastreáveis
            </Button>
            <Button variant="outlined" size="small" color="success">
              Fatores de Emissão
            </Button>
          </div>

          <div>
            <Modal
              open={openStartInvet}
              // onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="d-flex  justify-content-between mb-4">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
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
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleChangeEsco1}
                >
                  Próximo
                </Button>
              </Box>
            </Modal>
          </div>

          {showSubEsco1.combustao_estacionaria && (
            <Modal
              open={nextEsco1Button}
              // onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="d-flex justify-content-between mb-5 pt-3">
                  <div>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
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
                          <h3 className="mb-3">
                            Fatores de emissão - Biocombustível
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
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleChangeEsco1}
                  >
                    Salvar
                  </Button>
                </div>
              </Box>
            </Modal>
          )}

          {showSubEsco1.combustao_movel && (
            <Modal
              open={nextEsco1Button}
              // onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="d-flex justify-content-between mb-5 pt-3">
                  <div>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Primeiro Escopo
                    </Typography>

                    <h2 className="mt-3 pb-2">Combutão Móvel</h2>
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
                        Selecione o tipo de transporte:
                      </h3>
                    </div>
                    {tipoTransporteEsco1?.map((elem, idx) => {
                      return (
                        <div className="mb-3" id={idx}>
                          <Card
                            className="d-flex  justify-content-center align-items-center"
                            style={{
                              width: 200,
                              backgroundColor:
                                curentIdxEsco1 === idx ? "#4682B4" : "#ccc",
                              cursor: "pointer",
                            }}
                          >
                            <CardContent
                              onClick={() => {
                                setCurentIdxEsco1(idx);
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
                    <div className="mb-4 p-4 align-items-center">
                      <FormControl>
                        <FormLabel id="formLabelEscTipoCal">
                          Escolha o tipo de Cálculo que deseja realizar
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="formLabelEscTipoCal"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="calTipoFFV"
                            control={<Radio />}
                            label="Cálculo por tipo e ano de fabricação da frota de veículos"
                          />
                          <FormControlLabel
                            value="calTipoC"
                            control={<Radio />}
                            label="Cálculo por tipo de combustível"
                          />
                          <FormControlLabel
                            value="calTipoD"
                            control={<Radio />}
                            label="Cálculo por Distância"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    {curentIdxEsco1 === 0 ? (
                      <>
                        <div className="d-flex  justify-content-around ">
                          <div className="m-2">
                            <h3>Registro da Frota</h3>
                            <TextField
                              id="regist-fronta"
                              label=" Digite o registro da frota..."
                              variant="outlined"
                            />
                          </div>
                          <div className="m-2">
                            <h3>Descrição da Frota</h3>
                            <TextField
                              id="desc-fronta"
                              label="Digite descrição da Frota..."
                              variant="outlined"
                            />
                          </div>
                        </div>
                        <div className="d-flex  justify-content-around mb-3 ">
                          <div className="m-2">
                            <h3>Ano da Frota</h3>
                            <TextField
                              id="ano-frota"
                              label="Digite o Ano da Frota..."
                              variant="outlined"
                            />
                          </div>
                          <div className="m-2">
                            <h3>Tipo da frota de veículos</h3>
                            <TextField
                              disabled
                              id="tipo-frota"
                              label="Digite Tipo da frota de veículos..."
                              variant="outlined"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div>
                        <div className="mb-3">
                          <h3>
                            {curentIdxEsco1 === 1
                              ? "Registro da Frota de TREM"
                              : curentIdxEsco1 === 2
                              ? "Registro da Frota de Hidroviário"
                              : "Registro da Frota de Hidroviário"}
                          </h3>
                          <TextField
                            id="regist-fronta"
                            label="Digite o registro Frota ..."
                            variant="outlined"
                          />
                        </div>
                        <div className="mb-3">
                          <h3>Descrição da Frota</h3>
                          <TextField
                            id="desc-fronta"
                            label="Digite descrição da Frota..."
                            variant="outlined"
                          />
                        </div>
                        <div className="mb-3">
                          <h3>Descrição da Frota</h3>
                          <TextField
                            id="desc-fronta"
                            label="Digite descrição da Frota..."
                            variant="outlined"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="mb-4">
                      <FormControl>
                        <FormLabel id="formLabelEscDetaCon">
                          Escolha o Detalhamento do consumo
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="formLabelEscDetaCon"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="escDetaAnual"
                            control={<Radio />}
                            label="Anual"
                          />
                          <FormControlLabel
                            value="escDetaMensal"
                            control={<Radio />}
                            label=" Mensal"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleChangeEsco1}
                  >
                    Salvar
                  </Button>
                </div>
              </Box>
            </Modal>
          )}

          {(showSubEsco1.mudanca_solo ||
            showSubEsco1.atividades_agricultura ||
            showSubEsco1.processos_industrias) && (
            <Modal
              open={nextEsco1Button}
              // onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="d-flex justify-content-between mb-5 pt-3">
                  <div>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Primeiro Escopo
                    </Typography>

                    <h2 className="mt-3 pb-2">
                      {showSubEsco1.atividades_agricultura
                        ? "Atividades Agricolas"
                        : showSubEsco1.processos_industrias
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
                  {showSubEsco1.mudanca_solo && (
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
                        {showSubEsco1.atividades_agricultura ||
                        showSubEsco1.processos_industrias
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
                {showSubEsco1.processos_industrias && (
                  <p className="m-3">
                    Para mais informações sobre emissões de Processos
                    Industriais, consulte as Especificações do Programa
                    Brasileiro GHG Protocol
                    (https://eaesp.fgv.br/centros/centro-estudos-sustentabilidade/projetos/programa-brasileiro-ghg-protocol)
                    e os Inventários Nacionais de Emissões de GEE do Brasil
                    (MCTIC, 2005; 2010;2016).
                  </p>
                )}
                <div className="mt-5">
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleChangeEsco1}
                  >
                    Salvar
                  </Button>
                </div>
              </Box>
            </Modal>
          )}

          {showSubEsco1.emissos_fugitivas && (
            <Modal
              open={nextEsco1Button}
              // onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="d-flex justify-content-between mb-5 pt-3">
                  <div style={{ minWidth: 300 }}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
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
                  {/* <div className="d-flex align-items-end">
                    <h2
                      style={{ color: "#953fc6" }}
                      className="fs-3 font-weight-bold text-uppercase"
                    >
                      Emissões de Equipamentos de Refrigeração e Ar Condicionado
                      (RAC) e Extintores de Incêndio
                    </h2>
                  </div> */}
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
                <div>
                  {tipoEmissaoFugitivas?.map((elem, idx) => {
                    return (
                      <div
                        className="mb-3 d-flex  justify-content-between"
                        id={idx}
                      >
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
                            setOpenSubEmissosFugitivas(
                              !openSubEmissosFugitivas
                            );
                          }}
                        >
                          <CardContent>
                            <h1 className="text-light fs-3">{elem.abrev}</h1>
                          </CardContent>
                        </Card>
                        <h2
                          style={{ color: "#953fc6", width: 800 }}
                          className="fs-3 font-weight-bold text-uppercase d-flex align-items-center"
                        >
                          {elem.title}
                        </h2>
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
          )}

          {showSubEsco1.residuos_solidos && (
            <Modal
              open={nextEsco1Button}
              // onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="d-flex justify-content-between mb-5 pt-3">
                  <div>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Primeiro Escopo
                    </Typography>

                    <h2 className="mt-3 pb-2">Residuos Sólidos</h2>
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
                <div className="d-flex  justify-content-between">
                  <div
                    className="d-flex flex-column align-items-start"
                    style={{ maxWidth: 300 }}
                  >
                    <div className="d-flex align-items-end">
                      <h2
                        style={{ color: "#953fc6" }}
                        className="fs-3 font-weight-bold text-uppercase mb-3"
                      >
                        Residuos Aterrados
                      </h2>
                    </div>

                    <div className="mb-3">
                      <p className="p-3">
                        Quantidade de residuos enviados ao aterro no ano
                        (Apartir da data de inventariação levar em consideração
                        os 30 anos anteriores) INSERIR ANOS
                      </p>
                      <Button
                        onClick={handleShippingYear}
                        className="p-3"
                        variant="contained"
                        size="medium"
                      >
                        Anos de Envio
                      </Button>
                      <SubModalEsc1
                        setShippingYear={setShippingYear}
                        shippingYear={shippingYear}
                        enterCompostData={enterCompostData}
                        setEnterCompostData={setEnterCompostData}
                        setEnterPercentageResidue={setEnterPercentageResidue}
                        enterPercentageResidue={enterPercentageResidue}
                        setEnterIncinerationData={setEnterIncinerationData}
                        enterIncinerationData={enterIncinerationData}
                        setCalculationOtherTools={setCalculationOtherTools}
                        calculationOtherTools={calculationOtherTools}
                      />
                      <ul>
                        <li className="p-3">
                          Preencha a composição do resíuo gerado pela
                          organização. Preencha apenas para os anos em que houve
                          disposição de resíduos.
                        </li>
                        <li className="p-3">
                          Preencha com a porcentagem, de 0 à 100, correspondente
                          a cada tipo de resíduo, em relação ao resíuo total.
                        </li>
                      </ul>
                      <Button
                        className="p-3"
                        variant="contained"
                        size="medium"
                        onClick={handleEnterPercentageResidue}
                      >
                        Inserir Porcentagem de Residuo
                      </Button>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-start">
                    <div className=" mb-3">
                      <h2>Dados do Local de disposição Final do Resíduo</h2>
                      <div className="d-flex  justify-content-around">
                        <div className="m-2">
                          <h3>UF</h3>
                          <TextField
                            id="uf"
                            label="Digite Aqui..."
                            variant="outlined"
                          />
                        </div>
                        <div className="m-2">
                          <h3>Município</h3>
                          <TextField
                            id="municipio"
                            label="Digite Aqui..."
                            variant="outlined"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className=" mb-3">Compostagem anaeróbica</h3>
                      <Button
                        className="p-3 m-3"
                        variant="contained"
                        size="medium"
                        onClick={handleEnterCompostData}
                      >
                        Inserir Dados de Compostagem
                      </Button>
                      <Button
                        className="p-3 m-3"
                        variant="contained"
                        size="medium"
                        onClick={handleEnterIncinerationData}
                      >
                        Inserir Dados de Incineração
                      </Button>
                      <Button
                        className="p-3 m-3"
                        variant="contained"
                        size="medium"
                        onClick={handleCalculationOtherTools}
                      >
                        Cálculo por outras ferramentas
                      </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleChangeEsco1}
                  >
                    Salvar
                  </Button>
                </div>
              </Box>
            </Modal>
          )}

          {showSubEsco1.efluentes && (
            <Modal
              open={nextEsco1Button}
              // onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="d-flex justify-content-between mb-5 pt-3">
                  <div>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
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
                        <h1 className="text-light fs-4 p-2">
                          EFLUENTES SEQUENCIAIS
                        </h1>
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
                      Escolha se a unidade do dado é DBO (Demanda Biológica de
                      Oxigênio) ou DQO (Demanda Bioquímica de Oxigênio).
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
                          <InputLabel id="effluentType">
                            Tipo efluente
                          </InputLabel>
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
                        Se não possuir um fator de emissão de N2O específico,
                        deixe em branco. Será utilizado o default sugerido por
                        IPCC (2006).
                      </p>
                      <p className="p-3">
                        Quantidade de CH4 recuperada do tratamento
                      </p>
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
                        No ano do inventário, qual o destino do biogás
                        recuperado?
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
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleChangeEsco1}
                  >
                    Salvar
                  </Button>
                </div>
              </Box>
            </Modal>
          )}
        </>
      )}
    </Area>
  );
};
