import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Button,
  Typography,
  Modal,
  Card,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
} from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { ptBR } from "@mui/material/locale";

import { style } from "../../../utils/util";
import { fuelUsedEsco1Item, fatoresEmissaoSetor } from "../selectionData";
import { companyActions, othersActions, sheetActions } from "../../../actions";
// import { initialItemData } from "../selectionData";
import ShowInfo from "./ShowInfo";
import DashboardEscopo from "../../DashboardEscopo";

const DefaultTableRows = ({
  idx,
  dataSubEscopo,
  items,
  indexTable
  // itemSubEscopo,
  // setItemSubEscopo,
  // handleChange,
}) => {
  const dispatch = useDispatch();
  const { initialItemData } = useSelector(state => state.others)
  

  const handleChange = (event) => {
    indexTable(idx)
    const { name, value } = event.target;
    let newList = initialItemData.map((item, index) => {
      if (index === idx) {
        return {...item, [name]: value}
      }
      return item
    })
    // newList = {...newList, [name]: value}

    dispatch(othersActions.handleInicialState(newList));
    // console.log(newList);
  };

  // console.log(itemSubEscopo);

  return (
    <TableRow hover tabIndex={-1} key={idx}>
      <TableCell>
        <TextField
          sx={{ minWidth: 200 }}
          id="regist-font"
          label="Digite aqui..."
          variant="outlined"
          name={"registro_fonte"}
          onChange={handleChange}
          value={initialItemData[idx]?.registro_fonte}
        />
      </TableCell>
      <TableCell>
        <TextField
          sx={{ minWidth: 200 }}
          id="desc-font"
          label="Digite aqui..."
          variant="outlined"
          name={"desc_fonte"}
          onChange={handleChange}
          value={initialItemData[idx]?.desc_fonte}
        />
      </TableCell>
      <TableCell>
        <FormControl sx={{ minWidth: 200 }} required>
          <InputLabel id="fuelUsedEsco1">Combustível Utilizado</InputLabel>
          <Select
            labelId="fuelUsedEsco1"
            id="fuelUsedEsco1"
            value={initialItemData[idx]?.combustivel_utilizado}
            name={"combustivel_utilizado"}
            onChange={handleChange}
            autoWidth
            label="Selecionar Combustível..."
          >
            {fuelUsedEsco1Item?.map((elem) => (
              <MenuItem value={elem}>{elem}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </TableCell>
      <TableCell>
        <TextField
          sx={{ minWidth: 200 }}
          id="quant-consu"
          label="Digite a Quantidade..."
          variant="outlined"
          name={"qtd_consumida"}
          onChange={handleChange}
          value={initialItemData[idx]?.qtd_consumida}
        />
      </TableCell>
      <TableCell>
        <TextField
          sx={{ minWidth: 200 }}
          disabled
          id="unidade"
          label=""
          value={items && items[0]}
          // defaultValue={
          //   dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][4]
          // }
          variant="filled"
        />
      </TableCell>
      <TableCell sx={{ minWidth: 350 }}>
        <div className="d-flex justify-content-around">
          <div>
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[1]}
            </Card>
          </div>
          <div>
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[2]}
            </Card>
          </div>
        </div>
      </TableCell>
      <TableCell sx={{ minWidth: 350 }}>
        <div className=" d-flex justify-content-around">
          <div>
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[3]}
            </Card>
          </div>
          <div>
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[4]}
            </Card>
          </div>
        </div>
      </TableCell>
      <TableCell sx={{ minWidth: 400 }}>
        <div className="d-flex justify-content-around">
          <div className="m-2">
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[5]}
            </Card>
          </div>
          <div className="m-2">
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[6]}
            </Card>
          </div>
          <div className="m-2">
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[7]}
            </Card>
          </div>
        </div>
      </TableCell>
      <TableCell sx={{ minWidth: 400 }}>
        <div className="d-flex justify-content-around">
          <div className="m-2">
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[8]}
            </Card>
          </div>
          <div className="m-2">
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[9]}
            </Card>
          </div>
          <div className="m-2">
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[10]}
            </Card>
          </div>
        </div>
      </TableCell>
      <TableCell sx={{ minWidth: 400 }}>
        <div className="d-flex justify-content-around">
          <div className="m-2">
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[11]}
            </Card>
          </div>
          <div className="m-2">
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[12]}
            </Card>
          </div>
          <div className="m-2">
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[13]}
            </Card>
          </div>
        </div>
      </TableCell>
      <TableCell sx={{ minWidth: 400 }}>
        <div className="d-flex justify-content-around">
          <div className="m-2">
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[14]}
            </Card>
          </div>
          <div className="m-2">
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[15]}
            </Card>
          </div>
          <div className="m-2">
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 130,
                height: 50,
                margin: 20,
                backgroundColor: "#ccc",
              }}
            >
              {items && items[16]}
            </Card>
          </div>
        </div>
      </TableCell>
      <TableCell sx={{ minWidth: 200 }}>
        <Card
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            width: 130,
            height: 50,
            margin: 20,
            backgroundColor: "#ccc",
          }}
        >
          {items && items[17]}
        </Card>
      </TableCell>
      <TableCell sx={{ minWidth: 200 }}>
        <Card
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            width: 130,
            height: 50,
            margin: 20,
            backgroundColor: "#ccc",
          }}
        >
          {items && items[18]}
        </Card>
      </TableCell>
    </TableRow>
  );
};

const CombustaoEstacionaria = ({
  nextEsco1Button,
  handleChangeEsco1,
  itemSubEscopo,
  setItemSubEscopo,
}) => {
  const dispatch = useDispatch();
  const {
    loadingSubEscopo,
    sucessSubEscopo,
    dataSubEscopo,
    sucessCreateSubEscopo,
  } = useSelector((state) => state.sheet);

  const { companies, loadingCreateCompany, sucessCreateCompany } = useSelector( (state) => state.company );
  const { initialItemData } = useSelector(state => state.others)

  const initialStorage = JSON.parse(localStorage.getItem("@sismierge/escopo1/combu_estac"))
  const [isStorage, setIsStorage] = useState(initialStorage ? initialStorage : []);

  const [dataStorage, setDataStorage] = useState([
    {
      registro_fonte: "",
      desc_fonte: "",
      qtd_consumida: "",
      combustivel_utilizado: "",
      result: ["", "","", "", "","","","","","","","","","","","","","",""]
    }
  ]);

  

  const [showHowToFill, setShowHowToFill] = useState(false);
  const [indexTableStorage, setIndexTableStorage] = useState(0);
  const [section1, setSection1] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItemSubEscopo({ ...itemSubEscopo, [name]: value });
  };

  useEffect(() => {


    if (!isStorage) {
      setIsStorage(dataStorage)
      localStorage.setItem("@sismierge/escopo1/combu_estac", JSON.stringify(dataStorage))
      dispatch(othersActions.handleInicialState(dataStorage));
      // console.log(initialItemData);
    } else {
      setIsStorage(JSON.parse(localStorage.getItem("@sismierge/escopo1/combu_estac")))
    }

    if (sucessCreateSubEscopo) {
      console.log(initialItemData[indexTableStorage]?.qtd_consumida);
      if (initialItemData[indexTableStorage]?.qtd_consumida?.length > 1) {
        const { registro_fonte, desc_fonte, qtd_consumida, combustivel_utilizado, } = indexTableStorage && initialItemData[indexTableStorage];
  
        const newData= {
          registro_fonte,
          desc_fonte,
          qtd_consumida,
          combustivel_utilizado,
          result: dataSubEscopo && dataSubEscopo[10] && [ dataSubEscopo[10][4],  dataSubEscopo[10][7], dataSubEscopo[10][8], dataSubEscopo[10][5], dataSubEscopo[10][6], dataSubEscopo[10][9], dataSubEscopo[10][10], dataSubEscopo[10][11], dataSubEscopo[10][12], dataSubEscopo[10][13], dataSubEscopo[10][14], dataSubEscopo[10][18], dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][19], dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][20], dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][15], dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][16], dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][17], dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][21], dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][22]
  
          ]
        }
        let newItem = [...isStorage]
        newItem[indexTableStorage] = newData

        console.log(newItem);
        
        localStorage.setItem("@sismierge/escopo1/combu_estac", JSON.stringify(newItem))
      }
    }
    // console.log(sucessCreateSubEscopo);
  }, [sucessCreateSubEscopo, isStorage]);

  useEffect(() => {
    dispatch(sheetActions.loadSubEscopos(1093763195));
  }, [sucessCreateSubEscopo])
  

  // console.log(sucessCreateSubEscopo);

  useEffect(() => {
    if (initialItemData[indexTableStorage]?.qtd_consumida?.length > 1) {
      // console.log(initialItemData);
      const {
        registro_fonte,
        desc_fonte,
        qtd_consumida,
        combustivel_utilizado,
      } = initialItemData[indexTableStorage];
      dispatch(
        sheetActions.setSubEscopo({
          range: "Combustão estacionária!A11:D11",
          values: [
            registro_fonte,
            desc_fonte,
            combustivel_utilizado,
            qtd_consumida,
          ],
        })
      );
    }
  }, [initialItemData[indexTableStorage]]);

  const headCells = [
    {
      id: "registrodafonte",
      label: "Registro da Fonte",
    },
    {
      id: "descricaoFonte",
      label: "Descrição da Fonte",
    },
    {
      id: "combustivelUtilizado",
      label: "Combustível Utilizado",
    },
    {
      id: "quantidadeConsumida",
      label: "Quantidade Consumida",
    },
    {
      id: "unidademedida",
      label: "Unidades de Medida",
    },
    {
      id: "combustivelformado",
      label: "O combustível utilizado é formado por:",
      sub: ["Combustível Fóssil", "Blocombustível"],
    },
    {
      id: "combustivelconsumido",
      label: "Quantidade de Combustível consumida(por unidade)",
      sub: ["Combustível Fóssil", "Blocombustível"],
    },
    {
      id: "fatoresEmissaofossil",
      label: "Fatores de emissão - combustível fóssil",
      sub: ["CO2(kg/un)", "CH4(kg/un)", "N2O(kg/un)"],
    },
    {
      id: "fatoresEmissaoBiocombustivel",
      label: "Fatores de emissão - Biocombustível",
      sub: ["CO2(kg/un)", "CH4(kg/un)", "N2O(kg/un)"],
    },
    {
      id: "combustiveisFosseis",
      label: "Combustíveis Fósseis",
      sub: ["Emissões CO2(t)", "Emissões CH4(t)", "Emissões N2O(t)"],
    },
    {
      id: "biocombustiveis",
      label: "Biocombustíveis",
      sub: ["Emissões CO2(t)", "Emissões CH4(t)", "Emissões N2O(t)"],
    },
    {
      id: "eftt-tco2e",
      label: "Emissões Fóssel Totais TCO2e",
    },
    {
      id: "eb-tco2e",
      label: "Emissões Biogênicas TCO2e",
    },
  ];

  // const [isStorage, setRows] = useState(isStorage && isStorage);

  const addNewsRows = () => {
    localStorage.setItem("@sismierge/escopo1/combu_estac", JSON.stringify([...isStorage, ...dataStorage]))
    // console.log([...isStorage, ...dataStorage]);
  };

  const theme = useTheme();
  const themeWithLocale = createTheme(theme, ptBR);

  // console.log(isStorage);


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
              className="m-1"
              variant="outlined"
              size="large"
              onClick={() => {
                setShowHowToFill(!showHowToFill);
              }}
            >
              Como Preencher ?
            </Button>
            <Button
              className="m-1"
              variant="outlined"
              size="large"
              onClick={() => {
                setSection1(!section1);
              }}
            >
              Seção 1
            </Button>
            <Button
              className="m-1"
              variant="contained"
              size="large"
              onClick={handleChangeEsco1}
            >
              Voltar
            </Button>
          </div>
        </div>
        <ShowInfo
          showHowToFillCE={showHowToFill}
          setShowHowToFillCE={setShowHowToFill}
          section1={section1}
          setSection1={setSection1}
        />
        <div className=" mb-5" style={{ maxWidth: 380 }}>
          <h3
            style={{ color: "#953fc6" }}
            className="fs-5 font-weight-bold text-uppercase"
          >
            Fatores de emissão para o setor
          </h3>
          <div className="mt-4">
            <h3>Selecione o setor</h3>
            <FormControl sx={{ minWidth: 200 }} required>
              <InputLabel id="fator_emissao_setor">Escolhe aqui...</InputLabel>
              <Select
                labelId="fator_emissao_setor"
                id="fator_emissao_setor"
                value={itemSubEscopo.fator_emissao_setor}
                name={"fator_emissao_setor"}
                onChange={handleChange}
                autoWidth
                label="Escolhe aqui..."
              >
                {companies.setor_atividade?.map((elem) => (
                  <MenuItem value={elem}>{elem}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div
          style={{
            marginTop: 0,
            overflow: "auto",
            width: "98%",
            height: 700,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <ThemeProvider theme={themeWithLocale}>
              <Paper sx={{ width: "100%", mb: 2 }}>
                <div style={{ maxWidth: 580 }}>
                  <h3
                    style={{ color: "#953fc6" }}
                    className="fs-4 font-weight-bold text-uppercase"
                  >
                    Fontes estacionárias de combustão
                  </h3>
                </div>
                <TableContainer>
                  <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size="medium"
                  >
                    <TableHead>
                      <TableRow>
                        {headCells.map((headCell) => (
                          <TableCell
                            key={headCell.id}
                            sx={{ textAlign: "center" }}
                          >
                            {headCell.label}
                            {headCell.sub && (
                              <div className="d-flex justify-content-around pt-1">
                                {headCell.sub.map((elem, idx) => (
                                  <h3 key={idx}>{elem}</h3>
                                ))}
                              </div>
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {isStorage?.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        ).map((item, idx) => {
                          return (
                            <DefaultTableRows
                              idx={idx}
                              // itemSubEscopo={itemSubEscopo}
                              // setItemSubEscopo={setItemSubEscopo}
                              // handleChange={handleChange}
                              indexTable={e => setIndexTableStorage(e)}
                              items={item?.result}
                              dataSubEscopo={dataSubEscopo}
                            />
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[0]}
                  component="div"
                  count={isStorage?.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <div className="d-flex justify-content-end">
                  <Button
                    size="large"
                    title="Adicionar mais linhas"
                    onClick={addNewsRows}
                  >
                    <p className="fs-3">+</p>
                  </Button>
                </div>
              </Paper>
            </ThemeProvider>
          </Box>
          {/* <ShowTable /> */}
        </div>
        
        <div>
          <Button
            onClick={() => {
              let indexEscopo = companies.escopos.findIndex((i) => i.id === 1);
              let indexSubEscopo = companies.escopos[
                indexEscopo
              ].items.findIndex((i) => i.sheetId === 1093763195);
              let filterTypeSubEscopo = companies.escopos[
                indexEscopo
              ].items.filter((i) => i.sheetId === 1093763195)[0];
              filterTypeSubEscopo = {
                ...filterTypeSubEscopo,
                // items: dataSubEscopo,
              };

              let newDataEscopo = { ...companies };
              newDataEscopo.escopos[indexEscopo].items[indexSubEscopo] =
                filterTypeSubEscopo;

              dispatch(
                companyActions.updateCompany(newDataEscopo, companies.id)
              );
            }}
            variant="contained"
            size="large"
          >
            {loadingCreateCompany ? "Salvando..." : "Salvar"}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CombustaoEstacionaria;
