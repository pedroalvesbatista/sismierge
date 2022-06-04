import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'

import { authService } from '../../services'
import { 
  Text, 
  Button, 
} from './styles'
import Input from '../../components/Input'
import SelectArea from '../../components/Select'
import MoreItems from '../../components/Modal/Company/MoreItems'
import { useDispatch, useSelector } from 'react-redux'
import InputTag from '../../components/Input/InputTag'

export const Organisation = ({dataCompany, setPage}) => {
    const dispatch= useDispatch()
    const { loadingCreateCompany, sucessCreateCompany, companies, company } = useSelector(state => state.company)
    const dataLocal= JSON.parse(localStorage.getItem("@sismierge/data"))
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        id: 1,
        email: null,
        cnpj: null,
        cpf: null,
        razao_social: null,
        nome_do_responsavel: null,
        nome_fantasia: null,
        telefone: null,
        razao_social: null,
        endereco: null,
        setor_economico: null,
        subsetor: null,
        setor_atividade: null,
        escopo: [],
        filial: null,
        sector_aditivdade: null,
        logo: null,
        comprovante: null,
        user: [dataLocal?.user]
    })
    const [haveUnidade, setHaveUnidade] = useState("")

    const optionsEscopo= [
        {name: "Escopo 1", options: ["Combustão estacionária", "Combustão móvel", "Emissões fugitivas", "Processos industriais", "Atividades agrícolas", "Mudanças no uso do solo", "Resíduos sólidos", "Efluentes"]},
        {name: "Escopo 2", options: ["Combustão estacionária", "Combustão móvel", "Emissões fugitivas", "Processos industriais", "Atividades agrícolas", "Mudanças no uso do solo", "Resíduos sólidos", "Efluentes"]},
        {name: "Escopo 3", options: ["Combustão estacionária", "Combustão móvel", "Emissões fugitivas", "Processos industriais", "Atividades agrícolas", "Mudanças no uso do solo", "Resíduos sólidos", "Efluentes"]}
    ]

    const [list, setList] = useState([1])
    const [showEscopo1Options, setShowEscopo1Options] = useState(false)

    const newUserList= {...dataLocal?.user, company: data}
    const newData= {company: data, user: newUserList}

  const handleSubmit= (e) => {
    e.preventDefault()
    if (haveUnidade.length > 0) {
        if (haveUnidade === "Sim") {
            setPage("unidade")
        }else {
            setPage("welcome")
        }
    }else {
        setPage("welcome")
    }
    
    localStorage.setItem("@sismierge/data", JSON.stringify(newData))
    // setPage("organisationStep2")
  }

    const handleMoreTable= () => {
        setList([...list, list.length + 1])
    }

    const handlLessTable= () => {
        setList(list.splice(0, list.length - 1))
    }

    const handleOnchageEscopo = (e) => {
        const newList= optionsEscopo.filter(i => i.name === e.target.value)
        setData({...data, escopo: [...data.escopo, ...newList]})
    } 

  useEffect(() => {
      const verification= data.escopo.filter(i => i.name === "Escopo 1").length > 0
    if (verification) {
        setShowEscopo1Options(true)
    }else {
        setShowEscopo1Options(false)
    }
    if (data.escopo.length > 0) {
        const uniqueList= [...new Set(data.escopo)]
        setData({...data, escopo: uniqueList })
    }
    // console.log(data.escopo);
  }, [data.escopo])
  
  
  

  return (
    <>
        <Text>Parabéns!</Text>
        <Text size={14} color={true} fontSize={400}>
          Agora vamos cadastrar sua organização. <br/>
          Essa etapa é muito importante!
        </Text>
        <Form onSubmit={handleSubmit}>
            <AreaInput>
                <Input 
                    label={"Razão Social"}
                    // placeholder="Uber"
                    value={data.razao_social}
                    onChange= {e => setData({...data, razao_social: e.target.value})}
                />
                <Input 
                    label={"Nome fantasia"}
                    // placeholder="Uber"
                    value={data.nome_fantasia}
                    spanceLeft={true}
                    onChange= {e => setData({...data, nome_fantasia: e.target.value})}
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    label={"CNPJ"}
                    placeholder="32.792.884/2021-10"
                    type="number"
                    value={data.cnpj}
                    onChange= {e => setData({...data, cnpj: e.target.value})}
                />
                <Input 
                    label={"Endereço completo"}
                    placeholder={`rua, número, complemento, cep, cidade e estado`}
                    spanceLeft={true}
                    value={data.endereco}
                    onChange= {e => setData({...data, endereco: e.target.value})}
                />
            </AreaInput>
            <AreaInput>
                <InputTag 
                    label={"Setor econômico"}
                    items={e => console.log(e)}
                />
                <InputTag 
                    label={"Subsetor"}
                    // placeholder="11986522567"
                    spanceLeft={true}
                    items={e => console.log(e)}
                />
            </AreaInput>
            <AreaInput NoFlex={true}>
                {/* <SelectArea 
                    onChange={e => setData({...data, setor_atividade: e.target.value})} 
                    value={data.setor_atividade} 
                    title={"Escolha o setor de atividade"} 
                    item={optionsTypes} 
                    width= "48%"
                    placeholder="Escolhe um tipo..."
                /> */}
                {/* <SelectArea 
                    onChange={handleOnchageEscopo} 
                    value={data.escopo} 
                    type = "collections"
                    title={"Escolha os Escopos"} 
                    item={optionsEscopo} 
                    width= "48%"
                    placeholder="Escolhe escopo..."
                    // spaceLeft={"10px"}
                /> */}
                {/* {showEscopo1Options && */}
                    <ContainerAreaInput style={{display: "flex"}}>
                        <WrapperAreaInput>
                            {list.map(item => (
                                <ContentAreaInput key={item}>
                                    <SelectArea 
                                        title={"Escolha os Escopos"} 
                                        item={optionsEscopo} 
                                        placeholder="escolhe escopo..."
                                        width= "50%"
                                        type = "collections"
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
                {/* } */}
            </AreaInput>
            <AreaInput>
                <Input 
                    label={"Logo da empresa"}
                    type="file"
                    id={"file"}
                    value={data.file}
                    onChange={e => setData({...data, logo: e.target.value})}
                />
                <Input 
                    label={"Comprovante de vinculaçâo"}
                    spanceLeft={true}
                    type="file"
                    id={"file"}
                    value={data.file}
                    onChange={e => setData({...data, comprovante: e.target.value})}
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    label={"Quer cadastrar filiais ?"}
                    type="radio"
                    qtd={["Sim", "Não"]}
                    name={"unidades"}
                    notView={true}
                    onChange={e => setHaveUnidade(e.target.value)}
                />
            </AreaInput>
        </Form>
        <ConexioArea>
            <Button aria-disabled={loading ? true : false} onClick={handleSubmit}> 
                {loading ? "Carregando..." : "Continuar "} 
                &#8674;
            </Button>
          </ConexioArea>
    </>
  )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 630px;
    margin-top: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const AreaInput = styled.form`
    display: ${({NoFlex}) => NoFlex ? "block" : "flex"};
    width: 600px;
    /* justify-content: space-between; */
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
const ContainerAreaInput = styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: flex-end;
    width: 100%;
    justify-content: flex-start;
    /* height: 200px; */
`
const WrapperAreaInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const ContentAreaInput = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-end;
    /* justify-content: space-between; */
    /* height: 200px; */
`