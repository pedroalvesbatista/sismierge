import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'

import { authService } from '../../../services'
import { LoadingAnimation } from '../../lottie'
import { 
  Text, 
  Button, 
} from './styles'
import Input from '../../Input'
import { othersActions } from '../../../actions'
import { useDispatch } from 'react-redux'
import SelectArea from '../../Select'
import Table from '../../Table'
import ModelTable from '../../Table/ModelTable'
import MoreItems from './MoreItems'
import { admin } from '../../../constants/tailwind/colors'

export const AddInventariacao = ({dataCompany, setPage}) => {
    const dispatch = useDispatch()
    const [list, setList] = useState([1])
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    file: "",
    haveUnidade: "",
    typeUnidade: "",
    
})
  const [showPassword, setShowPassword] = useState(false)
  const [metaEscopo, setMetaEscopo] = useState(false)

  const storage= JSON.parse(localStorage.getItem("@sismierge/data"))
  const escopos= storage?.company.escopo.split(" e ")
  const optionsTypes= ["Matriz", "Filial"]
  const optionsIgee= ["Qualificações de fornecedores", "ABNT NBR 14.064", "Faz parte da política"]

  const handleSubmit= (e) => {
    e.preventDefault()
    setLoading(true)
    if (data.haveUnidade === "Sim") {
        setTimeout(() => {
            setLoading(false)
            dispatch(othersActions.handleOpenModal("Adicionar unidades"))
        }, 500);
    }else {
        dispatch(othersActions.closeModal())
    }
    
  }

    const handleMoreTable= () => {
        setList([...list, list.length + 1])
    }

    const handlLessTable= () => {
        setList(list.splice(0, list.length - 1))
    }
    
  
  

  return (
    <Fragment>
        {loading ? (
            <LoadingAnimation size={150}/>
        ): (
            <Fragment>
                <Form onSubmit={handleSubmit}>
                    <AreaInput>
                        <Input 
                            label={"Ano inventariado"}
                            placeholder={``}
                            type="date"
                        />
                        <Input 
                            label={"Motivo pelo qual decidiu elaborar o IGEE"}
                            placeholder="ex: 10"
                            spanceLeft={true}
                            type="text"
                        />
                    </AreaInput>
                    <AreaInput>
                        <SelectArea 
                            // onChange={e => setData({...data, typeUnidade: e.target.value})} 
                            // value={data.typeUnidade} 
                            title={"O inventário será verificado por terceira parte"} 
                            item={["sim", "Não"]} 
                            width= "100%"
                            placeholder="Escolhe aqui..."

                        />
                        <SelectArea 
                            title={"Limites Organizacionais"} 
                            item={["Matriz C Controlada", "U Unidade"]} 
                            placeholder="Escolhe aqui..."
                            width= "100%"
                            spaceLeft
                        />
                    </AreaInput>
                    <AreaInput>
                        <SelectArea 
                            title={"Qual abordagem de consolidação foi utilizado no inventario?"} 
                            item={["Abordagem  de Controle operacional", "Abordagem de xxx"]} 
                            placeholder="Escolhe aqui..."
                            width= "50%"
                            // spaceLeft
                        />
                        <Input 
                            label={"Numero de funcionário no ano inventariado"}
                            placeholder="ex: 10"
                            spanceLeft={true}
                            type="numeric"
                        />
                    </AreaInput>
                    <AreaInput NoFlex={true}>
                        <Title>Produção total do ano inventariado (em unidades, kg, m, m2, m3..) por tipo de produto</Title>
                        <ContainerAreaInput style={{display: "flex"}}>
                            <WrapperAreaInput>
                                {list.map(item => (
                                    <ContentAreaInput key={item}>
                                        <Input
                                            // label={"Numero de funcionário no ano inventariado"}
                                            placeholder="Produto"
                                            type="text"
                                        />
                                        <Input 
                                            // label={"Numero de funcionário no ano inventariado"}
                                            placeholder="Unidade"
                                            spanceLeft={true}
                                            type="numeric"
                                        />
                                    </ContentAreaInput>
                                ))}
                            </WrapperAreaInput>
                            <MoreItems onClickLess={handlLessTable} onClickMore={handleMoreTable}  item={list} />
                        </ContainerAreaInput>
                    </AreaInput>
                    <AreaInput NoFlex={true}>
                        <Title>Sua empresa já tem alguma meta de redução para o escopo</Title>
                        <SelectArea 
                            // title={"Sua empresa já tem alguma meta de redução para o escopo"} 
                            item={["Sim", "Não"]} 
                            placeholder="escolhe aqui..."
                            width= "40%"
                            onChange={e => setMetaEscopo(e.target.value === "Sim" ? true : false)}
                            // spaceLeft
                        />
                        {metaEscopo &&
                            <ContainerAreaInput style={{display: "flex"}}>
                                <WrapperAreaInput>
                                    {list.map(item => (
                                        <ContentAreaInput key={item}>
                                            <SelectArea 
                                                // title={"Sua empresa já tem alguma meta de redução para o escopo"} 
                                                item={escopos} 
                                                placeholder="escolhe escopo..."
                                                width= "50%"
                                                // onChange={e => setMetaEscopo(e.target.value === "Sim" ? true : false)}
                                                // spaceLeft
                                            />
                                            <Input 
                                                // label={"Numero de funcionário no ano inventariado"}
                                                placeholder="Por intensidade"
                                                spanceLeft={true}
                                                type="numeric"
                                                // width={"100%"}
                                                fontSize={12}
                                            />
                                            <Input 
                                                // label={"Numero de funcionário no ano inventariado"}
                                                placeholder="Por absoluta"
                                                spanceLeft={true}
                                                type="numeric"
                                                fontSize={12}
                                                // width={"100%"}
                                            />
                                        </ContentAreaInput>
                                    ))}
                                </WrapperAreaInput>
                                <MoreItems onClickLess={handlLessTable} onClickMore={handleMoreTable}  item={list} />
                            </ContainerAreaInput>
                        }
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Descrição de indicadores de emissão de GEE para as atividades da organização."}
                            placeholder={`Por exemplo, tCO2e/produtos fabricados.`}
                            type="text"
                        />
                        <Input 
                            label={"Descrição de estratégias e projetos para a gestão de emissões de GEE."}
                            placeholder=""
                            spanceLeft={true}
                            // type="numeric"   
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Informações sobre contratos com clientes e fornecedores que incluam cláusulas vinculadas à elaboração de inventários de GEE e/ou ao envio de informações relacionadas."}
                            placeholder={`digite aqui...`}
                            type="text"
                        />
                        <Input 
                            label={"Informações sobre incertezas, exclusões de fontes de dados e outras características da elaboração do inventário."}
                            placeholder=""
                            spanceLeft={true}
                            // type="numeric"   
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Descrição sobre ações internas para melhoria da qualidade do inventário de GEE. "}
                            placeholder={`digite aqui...`}
                            type="text"
                        />
                        <Input 
                            label={"Informações sobre a compra de energia elétrica oriunda de fonte renovável."}
                            placeholder=""
                            spanceLeft={true}
                            // type="numeric"   
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Informações sobre autoprodução de energia oriunda de fonte renovável para consumo próprio."}
                            placeholder={`digite aqui...`}
                            type="text"
                        />
                        <Input 
                            label={"Informações sobre o estoque de carbono, em toneladas, de sua organização em 31 de dezembro do ano inventariado."}
                            placeholder=""
                            spanceLeft={true}
                            // type="numeric"   
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Compensação de emissões"}
                            placeholder={`digite aqui...`}
                            type="text"
                        />
                        <Input 
                            label={"A organização possui projetos de compensação de emissões?"}
                            placeholder=""
                            spanceLeft={true}
                            // type="numeric"   
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Reduções de emissões"}
                            placeholder={`digite aqui...`}
                            type="text"
                        />
                        <Input 
                            label={"A organização possui projetos de redução de emissões?"}
                            placeholder=""
                            spanceLeft={true}
                            // type="numeric"   
                        />
                    </AreaInput>
                </Form>
            <ConexioArea>
                <Button aria-disabled={loading ? true : false} onClick={handleSubmit}> 
                    {loading ? "Carregando..." : "Adicionar "} 
                </Button>
            </ConexioArea>
            </Fragment>
        )}
    </Fragment>
  )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 600px;
    margin-top: 10px;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const AreaInput = styled.form`
    display: ${({NoFlex}) => NoFlex ? "block" : "flex"};
    width: 600px;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const ContentAreaInput = styled.div`
    display: flex;
    width: 100%;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const WrapperAreaInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const ContainerAreaInput = styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: flex-end;
    width: 100%;
    justify-content: flex-start;
    /* height: 200px; */
`
const ConexioArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
`

const InputFile = styled.input`
    display: flex;
    width: 600px;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const Title = styled.div`
    font-weight: 600;
    color: ${admin.dark};
    display: flex;
    padding: 5px;
    font-size: ${({size}) => size ?? "14"}px;
    /* margin-bottom: px; */
`