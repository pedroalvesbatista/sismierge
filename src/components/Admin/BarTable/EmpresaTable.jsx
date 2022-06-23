import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { SiDatabricks } from 'react-icons/si'
import { dataEmpresa } from './mocks';
import { admin } from '../../../constants/tailwind/colors'
import { authActions, othersActions } from '../../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonAdd } from '../../Buttons';

function EmpresaTable({item}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { companies, sucessCompany } = useSelector(state => state.company)
    const lengthObject = companies && Object?.keys(companies)?.length
    const space = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
    
    const handleAddCompany = (index) => {
        dispatch(othersActions.handleOpenModal(index, true))
    }

    const handelModal = () => {
        dispatch(othersActions.handleOpenModal("organisation"))
    }

    // console.log(typeof companies?.id !== "undefined" );

    const maskCNPJ = (value) => {
        // event.currentTarget.maxLength = 18;
        return value
          .replace(/\D/g, '')
          .replace(/(\d{2})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1/$2')
          .replace(/(\d{4})(\d{2})/, '$1-$2');
    };

    const handleKey = (key, value, item) => {
        // console.log(value);
        switch (key) {
            case "cnpj":
                return maskCNPJ(value)
        
            default:
                return value
        }
    }

    const handleTitle = (header, value) => {
        switch (header) {
            case "ENDEREÇOS":
                return maskCNPJ(value)
        
            default:
                return value
        }
    }

    const seen = new Set();
    const arr = [
        { id: 1, name: "test1" },
        { id: 2, name: "test2" },
        { id: 2, name: "test3" },
        { id: 3, name: "test4" },
        { id: 4, name: "test5" },
        { id: 5, name: "test6" },
        { id: 5, name: "test7" },
        { id: 6, name: "test8" }
      ];
      
      const uniqueObjects = [...new Map(arr.map(item => [item.id, item])).values()]

      const newEscopo = []
      
      const filt = companies?.escopos?.map(i => {
        const unique = [...new Map(i.items.map(item => [item.sheetId, item])).values()]
        newEscopo.push({
            ...i,
            items: unique
        })
        // return 
      })


    // console.log(newEscopo);

  return (
    <Area>
        {typeof companies?.id !== "undefined" ? (
            <>
                 <Title top="10px" left="10px" width="100%" justify="flex-start" weight="600" size="20px">  
                    Minha empresa 
                </Title>
                {dataEmpresa?.map((item, index) => (
                    <CardArea key={index}>
                        <Header> {item?.header} </Header>
                        <Card>
                            {item.item.map((key, indexKey) => (
                                <AreaTitle key={indexKey}>
                                {/* {console.log(item.header)} */}
                                    <Title weight="600" justify="none" size="10px"> 
                                        {key.title} 
                                    </Title>
                                    <Title borderBottom weight="700" justify="none" size="12px"> 
                                        { companies && item.header === "ENDEREÇOS" 
                                            ? companies.endereco[key.key] 
                                            : companies[key.key]?.length > 0 
                                                ? handleKey(
                                                    key.key, 
                                                    item.header === "ENDEREÇOS" ? companies.endereco[key.key] : companies[key.key], 
                                                    item.header
                                                ) 
                                                : space 
                                        }
                                    </Title>
                                </AreaTitle>
                            ))}
                        </Card>
                    </CardArea>
                ))}
                <Header> <Title onClick={() => navigate("/configuracao")} cursor size="16px" width="100%">Ver mais...</Title> </Header>
            </>
           
        ) : (
            <NotCOntentArea>
                <IconDoc />
                <Text>Não existe nenhuma organização cadastrada</Text>
                <ButtonAdd posTitle={false} title={"Cadastrar uma organização"} onClick={() => navigate('/start-up')}/>
            </NotCOntentArea>
        )}
    </Area>
  )
}

const Area = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    /* justify-content: space-between; */
    
`
const CardArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* background-color: red; */
    /* justify-content: space-between; */
    /* padding: 20px 0px; */
`
const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    padding: 10px;
    font-size: 12px;
    font-weight: 600;
    background-color: #F2F2F2;
    color: ${admin.dark};
`
const Chart = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Card = styled.div`
    width: 100%;
    /* padding: 20px; */
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
const Title =  styled.span`
    font-size: ${({size}) => size ?? "none"};
    color: ${({color}) => color ?? admin.dark};
    font-weight: ${({weight}) => weight ?? "none"};
    margin-top: ${({top}) => top ?? "none"};
    margin-left: ${({left}) => left ?? "none"};
    margin-bottom: ${({bottom}) => bottom ?? "none"};
    margin-right: ${({right}) => right ?? "none"};
    display: flex;
    justify-content: ${({justify}) => justify ?? "center"};
    align-items: center;
    width: ${({width}) => width ?? "none"};
    cursor: ${({cursor}) => cursor ? "pointer" : "default"};
    border-bottom: ${({borderBottom}) => borderBottom ? "1px solid #cecece92" : "none"};

    &:hover{
        text-decoration: ${({cursor}) => cursor ? "underline" : "none"};
    }
`
const AreaTitle = styled.div`
    width: 300px;
    /* flex: 1; */
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    padding: 10px 20px;
    /* flex-wrap: wrap; */
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
  font-size: 16px;
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
const NotCOntentArea = styled.th`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 300px;
`
const Item = styled.span`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: ${({title}) => title ? '600' : '400'};
    flex: 1;
    /* background-color: red; */
`
const Text = styled.span`
  display: flex;
  color: #5b5656;
  margin-top: 10px;
  font-weight: 600;
`


export default EmpresaTable