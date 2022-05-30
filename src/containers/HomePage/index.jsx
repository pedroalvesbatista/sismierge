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
  const [nextEsco1Button, setnextEsco1Button] = useState(false);

  const [curentIdxEsco1, setCurentIdxEsco1] = useState();
  const [fatorEmSetorEsco1, setFatorEmSetorEsco1] = useState();

  const handleClose = () => setOpenStartInvet(false);

  const handleChangeFatorEmSetor1 = (event) => {
    setFatorEmSetorEsco1(event.target.value);
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
  console.log(showSubEsco1);

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

  console.log(curentIdxEsco1);
  // const [dataBoard, setdataBoard] = useState([
  //   {id: 1, title: "Custo total do uso", icon: "", number: "12 032"},
  //   {id: 2, title: "Consumo total de eletricidade", icon: "", number: "7 361 800"},
  //   {id: 1, title: "Produção fotovoltaica total", icon: "", number: "9.7M"},
  //   {id: 1, title: "Consumo total de energia", icon: "", number: "194.3"}
  // ])

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

  useEffect(() => {
    if (storage?.company?.user.length === 1) {
      dispatch(othersActions.handleOpenModal("Adicionar colaboradores"));
    }
    // console.log(storage?.company.user.length);
  }, []);

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

  const tipoTransporteEsco1 = [
    "Transporte Rodoviario",
    "Transporte Ferroviário",
    "Transporte Hidroviário",
    "Trasnporte Aereo",
  ];

  const tipoEmissaoFugitivas = [
    "Balanço de Materiais estagio de Ciclo de vida",
    "Balanço de massa",
    "Método de triagem de fontes",
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
          {/* <TabsAdmin onCLick={(e) => handleTabActive(e)} active={tabActive} items={tabs} /> */}
          {/* <Container>
            <Ul>
              <Li active={true}>Relatórios</Li>
            </Ul> */}
          {/* <ul className="mt-2 pb-3">
              <li>
                <button type="button" class="btn btn-outline-success btn-sm w-100" title="Inventário Completo">Inventário Completo</button>
                
              </li>
              <li>
                <button type="button" class="btn btn-outline-success btn-sm w-100" title="PDF final - modelo enviado por e-mail">PDF final - modelo enviado por e-mail</button>
                
              </li>
              <li>
                <button type="button" class="btn btn-outline-success btn-sm w-100" title="Clique aqui para enviar por e-mail ou whatsapp">Clique aqui para enviar por e-mail ou whatsapp</button>
                
              </li>
              <li>
                <button type="button" class="btn btn-outline-success btn-sm w-100" title="Clique aqui para imprimir">Clique aqui para imprimir</button>
                
              </li>
              <li>
                <button type="button" class="btn btn-outline-success btn-sm w-100" title="Inventário Resumido">Inventário Resumido</button>
                
              </li>
              <li>
                <button type="button" class="btn btn-outline-success btn-sm w-100" title="Só os cálculos - botão verde da planilha excel">Só os cálculos - botão verde da planilha excel</button>
                
              </li>
              <li>
                <button type="button" class="btn btn-outline-success btn-sm w-100" title="Clique aqui para imprimir">Clique aqui para imprimir</button>
              </li>
              <li>
                <button type="button" class="btn btn-outline-success btn-sm w-100" title="Clique aqui para incluir seu relatário/selo de auditoria">Clique aqui para incluir seu relatário/selo de auditoria</button>
                 {/* somente para o login do auditor!*/}
          {/* </li>
            </ul>  */}
          {/* </Container> */}
          {/* <Routes openModal={(e) => setDataModal(e)} tab={tabActive} /> */}
          {/* <Modal /> */}

          {openStartInvet && (
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
          )}

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
                    <div className="mb-3">
                      <h3>Fatores de Emissão para o setor:</h3>

                      <FormControl sx={{ m: 1, minWidth: 200 }} required>
                        <InputLabel id="fatorEmSetor">
                          Fatores de Emissão para o setor:
                        </InputLabel>
                        <Select
                          labelId="fatorEmSetor"
                          id="fatorEmSetor"
                          value={fatorEmSetorEsco1}
                          onChange={handleChangeFatorEmSetor1}
                          autoWidth
                          label="Selecionar fator..."
                        >
                          <MenuItem value={2015}>2015</MenuItem>
                          <MenuItem value={2010}>2010</MenuItem>
                          <MenuItem value={2020}>2020</MenuItem>
                        </Select>
                      </FormControl>
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
                        <InputLabel id="fatorEmSetor">
                          Combustível Utilizado
                        </InputLabel>
                        <Select
                          labelId="fatorEmSetor"
                          id="fatorEmSetor"
                          value={fatorEmSetorEsco1}
                          onChange={handleChangeFatorEmSetor1}
                          autoWidth
                          label="Selecionar Combustível..."
                        >
                          <MenuItem value={2015}>2015</MenuItem>
                          <MenuItem value={2010}>2010</MenuItem>
                          <MenuItem value={2020}>2020</MenuItem>
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
                  <div className="d-flex align-items-end">
                    <h2
                      style={{ color: "#953fc6" }}
                      className="fs-3 font-weight-bold text-uppercase"
                    >
                      Emissões de Equipamentos de Refrigeração e Ar Condicionado
                      (RAC) e Extintores de Incêndio
                    </h2>
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
                  <div className="d-flex flex-column align-items-start">
                    {tipoEmissaoFugitivas?.map((elem, idx) => {
                      return (
                        <div className="mb-3" id={idx}>
                          <Card
                            className="d-flex  justify-content-center align-items-center"
                            style={{
                              width: 280,
                              minHeight: 160,
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
                    {curentIdxEsco1 === 0 ? (
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
                    ) : curentIdxEsco1 === 1 ? (
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
                    ) : (
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
                    )}
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
                      <Button className="p-3" variant="contained" size="medium">
                        Anos de Envio
                      </Button>
                      <ul>
                        <li className="p-3">
                          Preencha a composição do resíuo gerado pela
                          oerganização. Preencha apenas para os anos em que
                          houve disposição de resíduos.
                        </li>
                        <li className="p-3">
                          Preencha com a porcentagem, de 0 à 100, correspondente
                          a cada tipo de resíduo, em relação ao resíuo total.
                        </li>
                      </ul>
                      <Button className="p-3" variant="contained" size="medium">
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
                      <Button lassName="p-3" variant="contained" size="medium">Inserir Porcentagem de residuo</Button>
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
