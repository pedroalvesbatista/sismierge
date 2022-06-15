import React,{useEffect, useState} from "react";
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
} from "@mui/material";

import { style } from "../../../utils/util";
import { fuelUsedEsco1Item } from "../selectionData";
import { companyActions, sheetActions } from "../../../actions";

const CombustaoEstacionaria = ({ nextEsco1Button, handleChangeEsco1 }) => {
  const dispatch = useDispatch()
  const { loadingSubEscopo, sucessSubEscopo, dataSubEscopo, sucessCreateSubEscopo } = useSelector(state => state.sheet)
  const { companies, loadingCreateCompany, sucessCreateCompany } = useSelector(state => state.company)
  const [ itemSubEscopo, setItemSubEscopo ] = useState({
    registro_fonte: "",
    desc_fonte: "",
    qtd_consumida: "",
    combustivel_utilizado: "",
    // combustivel_utilizado_formado: {
    //   combustivel_fossil: "",
    //   biocombustivel: ""
    // },
    // qtd_combustivel_consumida_unidade: {
    //   combustivel_fossil: "",
    //   biocombustivel: ""
    // },
    // fator_emissao_comb_fossil: {
    //   co2: "",
    //   ch4: "",
    //   n2o: ""
    // },
    // fator_emissao_comb_biocombustivel: {
    //   co2: "",
    //   ch4: "",
    //   n2o: ""
    // }
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setItemSubEscopo({...itemSubEscopo, [name]: value});
  };

  useEffect(() => {
    dispatch(sheetActions.loadSubEscopos(1093763195))
  }, [sucessCreateSubEscopo])

  useEffect(() => {
    if (itemSubEscopo.qtd_consumida.length > 1) {
      const { registro_fonte, desc_fonte, qtd_consumida, combustivel_utilizado } = itemSubEscopo
      dispatch(sheetActions.setSubEscopo({
        range: "Combustão estacionária!A11:D11",
        values:[registro_fonte, desc_fonte, combustivel_utilizado, qtd_consumida]
      }))
    }
    // if (sucessCreateCompany) {
    //   dispatch(sheetActions.setSubEscopo({
    //     range: "Combustão estacionária!A11:D11",
    //     values:['', '', '', '']
    //   }))
    // }
  }, [itemSubEscopo])
  
  
    
  // console.log(itemSubEscopo);  
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
                  name={"registro_fonte"}
                  onChange={handleChange}
                  value={itemSubEscopo.registro_fonte}
                />
              </div>
              <div className="m-2">
                <h3>Descrição da Fonte</h3>
                <TextField
                  id="desc-font"
                  label="Digite descrição da Fonte..."
                  variant="outlined"
                  name={"desc_fonte"}
                  onChange={handleChange}
                  value={itemSubEscopo.desc_fonte}
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
                  name={"qtd_consumida"}
                  onChange={handleChange}
                  value={itemSubEscopo.qtd_consumida}
                />
              </div>
              <div className="m-2">
                <h3>Unidades de Medida</h3>
                <TextField
                  disabled
                  id="unidade"
                  label=""
                  defaultValue={dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][4]}
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
                  value={itemSubEscopo.combustivel_utilizado}
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
            </div>
          </div>
          <div className="d-flex flex-column align-items-end">
            <div>
              <div className="d-flex justify-content-around">
                <div className="m-2">
                  <h3 className="mb-3">
                    O combustível utilizado é formado por:
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][5]}
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][6]}
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][7]}
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][8]}
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][9]}
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][10]}
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][11]}
                      </Card>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-3">Fatores de emissão - Biocombustível</h3>
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][12]}
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][13]}
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][14]}
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][15]}
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][16]}
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][17]}
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][18]}
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][19]}
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
                        {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][20]}
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
                      {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][21]}
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
                      {dataSubEscopo && dataSubEscopo[10] && dataSubEscopo[10][22]}
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button onClick={() => {
            let indexEscopo= companies.escopos.findIndex(i => i.id === 1)
            let indexSubEscopo= companies.escopos[indexEscopo].items.findIndex(i => i.sheetId === 1093763195)
            let filterTypeSubEscopo= companies.escopos[indexEscopo].items.filter(i => i.sheetId === 1093763195)[0]
            filterTypeSubEscopo= {...filterTypeSubEscopo, items: dataSubEscopo}
            
            let newDataEscopo= {...companies}
            newDataEscopo.escopos[indexEscopo].items[indexSubEscopo] = filterTypeSubEscopo

            dispatch(companyActions.updateCompany(newDataEscopo, companies.id))

          }} 
          variant="contained" size="large"
          >
            {loadingCreateCompany ? "Salvando...": "Salvar"}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};


export default CombustaoEstacionaria;