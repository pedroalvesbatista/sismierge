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
import { companyConstants } from "../../constants/redux";


export const HomePage = () => {

  const dispatch = useDispatch()
  const storage = JSON.parse(localStorage.getItem("@sismierge/data"));
  const storageTab= localStorage.getItem("@sismiegee/admin/tabActive")
  const storageUser = JSON.parse(localStorage.getItem("@sismiegee/auth"));

  const { sucessEditUser, sucessDeleteUser, sucess } = useSelector(state => state.auth)
  const { companies, sucessCompany } = useSelector(state => state.company) 
  const { displayModal } = useSelector(state => state.others)

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
  }, [storageTab, sucess])

  useEffect(() => {
    displayModal === 0 && setOpenStartInvetEsco1(true);
    displayModal === 1 && setOpenStartInvetEsco2(true);
  }, [displayModal])
  
  
  


  return (
    <Area>
      {!loading ? (
        "Carregando..."
      ) : (
        <>
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