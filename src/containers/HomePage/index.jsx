import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import credentials from "../../constants/googleSheets.json"
import { useNavigate } from "react-router-dom";

import { Button, CardContent, Card } from "@mui/material";


import { Area } from "./styles";
import Escopo1 from "../../components/Escopo1";


export const HomePage = () => {

  const storage = JSON.parse(localStorage.getItem("@sismierge/data"));

  const [loading, setLoading] = useState(true);
  const [mouseOnCard, setMouseOnCard] = useState(false);
  const [openStartInvet, setOpenStartInvet] = useState(false);
  const [ selectedScope, setSelectedScope] = useState("")
  const [idxCard, setIdxCard] = useState("");

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

  // const [dataBoard, setdataBoard] = useState([
  //   {id: 1, title: "Custo total do uso", icon: "", number: "12 032"},
  //   {id: 2, title: "Consumo total de eletricidade", icon: "", number: "7 361 800"},
  //   {id: 1, title: "Produção fotovoltaica total", icon: "", number: "9.7M"},
  //   {id: 1, title: "Consumo total de energia", icon: "", number: "194.3"}
  // ])
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
    selectedScope === 0 && setOpenStartInvet(true);
  };

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
             <div className="d-flex justify-content-around justify-content-center mb-5">
           {escopos?.map((item, index) => {
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
         
            <Escopo1
              openStartInvet={openStartInvet}
              setOpenStartInvet={setOpenStartInvet}
            />
        </>
      )}
    </Area>
  );
};