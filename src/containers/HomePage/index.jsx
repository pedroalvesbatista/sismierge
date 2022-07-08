import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ModalInterno from "../../components/Modal";
import { Area } from "./styles";
import Escopo1 from "../../components/Escopo1";
import Escopo2 from "../../components/Escopo2";
import Escopo3 from "../../components/Escopo3";
import Routes from "./Routes";
import {
  authActions,
  othersActions,
  companyActions,
  sheetActions,
} from "../../actions";
import TabsAdmin from "../../components/Tabs";
import { companyConstants } from "../../constants/redux";

export const HomePage = () => {
  const dispatch = useDispatch();
  const storage = JSON.parse(localStorage.getItem("@sismierge/data"));
  const storageTab = localStorage.getItem("@sismiegee/admin/tabActive");
  const storageUser = JSON.parse(localStorage.getItem("@sismiegee/auth"));

  const { sucessEditUser, sucessDeleteUser, sucess } = useSelector(
    (state) => state.auth
  );
  const {
    companies,
    sucessUpdateCompany,
    sucessCompany,
    sucessCreateInventory,
  } = useSelector((state) => state.company);
  const { displayModal } = useSelector((state) => state.others);

  const [loading, setLoading] = useState(true);
  const [openStartInvetEsco1, setOpenStartInvetEsco1] = useState(false);
  const [openStartInvetEsco2, setOpenStartInvetEsco2] = useState(false);
  const [openStartInvetEsco3, setOpenStartInvetEsco3] = useState(false);
  const [tabActive, setTabActive] = useState("Minha empresa");

  const tabs = ["Minha empresa", "Inventariação", "Meus escopos", "Usuarios"];

  const handleInventariacao = (e) => {
    e.stopPropagation();
  };

  const handleTabActive = (e) => {
    setTabActive(e);
    localStorage.setItem(`@sismiegee/admin/tabActive`, e);
  };

  useEffect(() => {
    dispatch(companyActions.getCompanies());
    if (storageTab) {
      setTabActive(storageTab);
    }
    sucessEditUser && dispatch(othersActions.closeModal());
    sucessDeleteUser && dispatch(othersActions.closeModal());

    dispatch(authActions.loadRoles());
  }, [storageTab, sucess, sucessCreateInventory, sucessUpdateCompany]);

  useEffect(() => {
    dispatch(sheetActions.loadEscopos());
  }, []);

  useEffect(() => {
    console.log(displayModal);
    displayModal === 0 && setOpenStartInvetEsco1(true);
    displayModal === 1 && setOpenStartInvetEsco2(true);
    displayModal === 2 && setOpenStartInvetEsco3(true);
  }, [displayModal]);

  // console.log(companies);

  return (
    <Area>
      {!loading ? (
        "Carregando..."
      ) : (
        <>
          <Escopo1
            openStartInvet={openStartInvetEsco1}
            setOpenStartInvet={setOpenStartInvetEsco1}
            data={companies?.escopos?.filter((i) => i.id === 1)[0]?.items}
          />
          <Escopo2
            openStartInvet={openStartInvetEsco2}
            setOpenStartInvet={setOpenStartInvetEsco2}
          />
          <Escopo3
            openStartInvet={openStartInvetEsco3}
            setOpenStartInvet={setOpenStartInvetEsco3}
          />
          {storageUser?.user?.role?.type === "master" && (
            <>
              <TabsAdmin
                onCLick={(e) => handleTabActive(e)}
                active={tabActive}
                items={tabs}
              />
              <Routes tab={tabActive} />
              <ModalInterno />
            </>
          )}
        </>
      )}
    </Area>
  );
};
