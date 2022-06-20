import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, CardContent, Card, Modal } from "@mui/material";
import ModalInterno from "../../components/Modal"


import { Area } from "./styles";
import Escopo1 from "../../components/Escopo1";
import Escopo2 from "../../components/Escopo2";
import Routes from "./Routes";
import { authActions, othersActions, companyActions } from "../../actions";
import TabsAdmin from "../../components/Tabs";


export const HomePage = () => {

  const dispatch = useDispatch()
  const storage = JSON.parse(localStorage.getItem("@sismierge/data"));
  const storageTab= localStorage.getItem("@sismiegee/admin/tabActive")
  const storageUser = JSON.parse(localStorage.getItem("@sismiegee/auth"));

  const { roles, sucessEditUser, sucessDeleteUser, sucess } = useSelector(state => state.auth)
  const { companies } = useSelector(state => state.company)

  const [loading, setLoading] = useState(true);
  const [mouseOnCard, setMouseOnCard] = useState(false);
  const [openStartInvetEsco1, setOpenStartInvetEsco1] = useState(false);
  const [openStartInvetEsco2, setOpenStartInvetEsco2] = useState(false);
  const [tabActive, setTabActive] = useState('Visão geral')
  const [ selectedScope, setSelectedScope] = useState("")
  const [idxCard, setIdxCard] = useState("");
  
 const tabs= ["Visão geral", "Inventariação", "Usuarios"]

  const handleInventariacao = (e) => {
    e.stopPropagation();
    selectedScope === 0 && setOpenStartInvetEsco1(true);
    selectedScope === 1 && setOpenStartInvetEsco2(true);
  };

  const handleTabActive = e => {
    setTabActive(e)
    localStorage.setItem(`@sismiegee/admin/tabActive`, e)
}

  useEffect(() => {
    dispatch(companyActions.getCompanies())
    if (storageTab) {
      setTabActive(storageTab)
    }

    sucessEditUser && dispatch(othersActions.closeModal())
    sucessDeleteUser && dispatch(othersActions.closeModal())

    dispatch(authActions.loadRoles())
  }, [storageTab, roles, sucess])

  useEffect(() => {
    dispatch(companyActions.getCompanies())
    // console.log(storageUser);
  }, [])
  


  return (
    <Area>
      {!loading ? (
        "Carregando..."
      ) : (
        <>
          <div className="d-flex justify-content-around justify-content-center mt-5 mb-5">
            {!companies.escopos && "Não existe nenhum escopo selecionado"}
            {companies.escopos?.length > 0 && companies.escopos?.map((item, index) => {
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
                        setSelectedScope(index);
                      }}
                    >
                      <h1 className="text-light fs-3">{item.type}</h1>
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

          {/* <hr />
          {companies.escopos?.length > 0 &&
            <div className="d-flex justify-content-around mt-3">
              <Button variant="outlined" size="small" color="success">
                Dados Rastreáveis
              </Button>
              <Button variant="outlined" size="small" color="success">
                Fatores de Emissão
              </Button>
            </div>
          } */}

          <Escopo1
            openStartInvet={openStartInvetEsco1}
            setOpenStartInvet={setOpenStartInvetEsco1}
            data={companies?.escopos?.filter(i => i.id === 1)[0]?.items}
          />
          <Escopo2
            openStartInvet={openStartInvetEsco2}
            setOpenStartInvet={setOpenStartInvetEsco2}
          />
          {storageUser?.user?.role?.type === "master" &&
            <>
              <TabsAdmin onCLick={(e) => handleTabActive(e)} active={tabActive} items={tabs} />
              <Routes tab={tabActive} />
              <ModalInterno />
            </>
          }
        </>
      )}
    </Area>
  );
};