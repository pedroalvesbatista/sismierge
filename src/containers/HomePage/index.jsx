import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { contabilizarActions, othersActions } from "../../actions";
import { escopo, inicial } from "../../constants/app/";
import Board from "../../components/Board";

import { Area, TextArea, HeaderArea, Card } from "./styles";
import { Container, Ul, Li } from "../Admin/../../components/Tabs/styles";
import TabsAdmin from "../../components/Tabs";
import Modal from "../../components/Modal";
import Routes from "./Routes";

export const HomePage = () => {
  const { data } = useSelector((state) => state.contabilizar);
  const { isOpenModal } = useSelector((state) => state.others);
  const [tabActive, setTabActive] = useState("Visão geral");
  const [dataModal, setDataModal] = useState(null);
  // const tabs= ["Visão geral", "Unidades", "Colaboradores"]
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storage = JSON.parse(localStorage.getItem("@sismiegee/data"));
  const [loading, setLoading] = useState(true);

  // const [dataBoard, setdataBoard] = useState([
  //   {id: 1, title: "Custo total do uso", icon: "", number: "12 032"},
  //   {id: 2, title: "Consumo total de eletricidade", icon: "", number: "7 361 800"},
  //   {id: 1, title: "Produção fotovoltaica total", icon: "", number: "9.7M"},
  //   {id: 1, title: "Consumo total de energia", icon: "", number: "194.3"}
  // ])
  const [dataBoard, setdataBoard] = useState([
    { id: 1, title: "Escopo 1", icon: "", number: "12 032" },
    { id: 2, title: "Escopo 2", icon: "", number: "7 361 800" },
    { id: 1, title: "Escopo 3", icon: "", number: "9.7M" },
  ]);

  // setTimeout(() => {
  //   setLoading(true)
  // }, 3000);

  // useEffect(() => {
  //   dispatch(contabilizarActions.loadData())
  //   dispatch(contabilizarActions.setDataStorage(escopo))

  // }, [storage, data, contabilizarActions.setDataStorage, loading])

  const test = () => {
    dispatch(othersActions.handleModal());
    console.log("okey");
  };

  const handleTabActive = (e) => {
    setTabActive(e);
    localStorage.setItem(`@sismiegee/tabActive`, e);
  };

  return (
    <Area>
      {!loading ? (
        "Carregando..."
      ) : (
        <>
          <HeaderArea>
            {dataBoard.map((item, index) => (
              <Board key={index} number={item.number} title={item.title} />
            ))}
          </HeaderArea>
          {/* <TabsAdmin onCLick={(e) => handleTabActive(e)} active={tabActive} items={tabs} /> */}
          <Container>
            <Ul>
              <Li active={true}>Relatórios</Li>
            </Ul>
            <ul className="mt-2 pb-3">
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
              </li>
            </ul>
          </Container>
          {/* <Routes openModal={(e) => setDataModal(e)} tab={tabActive} /> */}
          <Modal />
        </>
      )}
    </Area>
  );
};
