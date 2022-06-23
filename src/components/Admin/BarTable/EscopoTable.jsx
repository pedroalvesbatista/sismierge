import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { SiDatabricks } from 'react-icons/si'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { admin } from '../../../constants/tailwind/colors'
import { authActions, companyActions, othersActions } from '../../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { companyConstants } from '../../../constants/redux';

function EscopoTable({item}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { companies, sucessCompany, sucessCreateInventory, inventories, sucessInventory } = useSelector(state => state.company)
    const data = [
        {
          id: 0,
          ano: 2016,
          totalEmpre: parseFloat("2000.34"),
        },
        {
          id: 1,
          ano: 2017,
          totalEmpre: parseFloat("35067.45"),
        },
        {
          id: 2,
          ano: 2016,
          totalEmpre: parseFloat("20690.34"),
        }
    ]
    const [totalEmpreData, setTotalEmpreData] = useState({
        // labels: data.map((data) => data.ano),
        datasets: [
          {
            label: "Área total construída da empresa",
            data: data.map((data) => data.totalEmpre),
            backgroundColor: [
              "#2a5179",
              "#50AF95",
              "#f3ba2f",
            ],
          },
        ],
    });

    // console.log(sucessInventory);
    const [toogle, setToogle] = useState(false)

    const handleEdit = (item) => {
        // dispatch(othersActions.handleOpenModal("Editar Usuário"))
        // dispatch(othersActions.setDataModal(item))
    }

    const handleOpenInventory = (index) => {

        dispatch(othersActions.handleOpenModal(index, true))
    }

    useEffect(() => {
      sucessCreateInventory && dispatch(companyActions.loadInventories(companies?.id))
      if (sucessInventory) {
        setTimeout(() => {
          dispatch({type: companyConstants.CLEAR_INVENTORY})
        }, 500);
      }
    }, [sucessInventory, sucessCreateInventory])
    

  return (
    <Area>
        <Title weight="bold" size="18px">  Resumo das emissões totais </Title>
        <CardArea>
            {companies?.escopos?.map((item, index) => (
                <Card key={index}>
                    <Title top="0px" weight="bold" size="16px"> Emissões por {item.type} </Title>
                    <AreaChart>
                        <Chart>
                            <Pie data={totalEmpreData} />
                        </Chart>
                    </AreaChart>
                    <AreaTitle>
                        <Title top="20px" width="100%" justify="space-between"> 
                            <Title color={"#2a5179"} weight="bold" size="13px">Total de combustível</Title>  
                            <Title  left="10px">200,34</Title> 
                        </Title>
                        <Title top="0px" width="100%" justify="space-between"> 
                            <Title color={"#50AF95"} weight="bold" size="13px">Total de gás</Title>  
                            <Title  left="10px">35067, 45</Title> 
                        </Title>
                        <Title top="0px" width="100%" justify="space-between"> 
                            <Title color={"#f3ba2f"} weight="bold" size="13px">Total de combustível</Title>  
                            <Title  left="10px">200,34</Title> 
                        </Title>
                    </AreaTitle>
                    {inventories.length > 0 ? (
                        <>
                          <BtnStart onClick={() => navigate("/resumo")} seeMore>Ver mais detalhes</BtnStart>
                          <BtnStart onClick={() => handleOpenInventory(index)}>Iniciar cálculo</BtnStart>
                        </>
                      ) : (
                        <BtnStart size="12" seeMore onClick={() => dispatch(othersActions.handleOpenModal("Adicionar Inventariação"))}>
                          Crie uma inventariação pra poder calcular
                        </BtnStart>
                      )
                    }
                </Card>
            ))}
        </CardArea>
    </Area>
  )
}

const Area = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    /* justify-content: space-between; */
    padding: 20px 30px;
`
const CardArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
`
const AreaChart = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    /* padding: 50px; */
`
const Chart = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Card = styled.div`
    width: 250px;
    /* height: 350px; */
    background-color: #fff;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title =  styled.span`
    font-size: ${({size}) => size ?? "none"};
    color: ${({color}) => color ?? admin.dark};
    font-weight: ${({weight}) => weight ?? "none"};
    margin-top: ${({top}) => top ?? "none"};
    /* margin-left: ${({left}) => left ?? "none"}; */
    margin-bottom: ${({bottom}) => bottom ?? "none"};
    margin-right: ${({right}) => right ?? "none"};
    display: flex;
    justify-content: ${({justify}) => justify ?? "center"};
    align-items: center;
    width: ${({width}) => width ?? "none"};
`
const AreaTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* justify-content: center; */
`
const BtnStart = styled.button`
  padding: 2px 10px;
  background-color: ${({seeMore}) => seeMore ? "none" : admin.verde};
  border-radius: 5px;
  color: ${({seeMore}) => seeMore ? admin.roxo : "#fff"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({size}) => size ?? "16"}px;
  margin-bottom: 10px;
  text-decoration: ${({seeMore}) => seeMore ? "underline" : "none"};

  &:hover{
    background-color: ${({seeMore}) => seeMore ? "none" : admin.verde+89};
    opacity: ${({seeMore}) => seeMore ? "0.8" : "1"};
  }
  &:active{
    background-color: ${({seeMore}) => seeMore ? "none" : admin.verde};
    opacity: 1;
  }
`

const IconDoc = styled(SiDatabricks)`
  color: ${admin.verde};
  font-size: 70px;
`

export default EscopoTable