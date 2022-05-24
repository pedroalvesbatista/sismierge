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

export const Organisation = ({dataCompany, setPage}) => {
    const dataLocal= JSON.parse(localStorage.getItem("@sismierge/data"))
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    id: 1,
    email: null,
    cnpj: null,
    cpf: null,
    nome: null,
    nome_do_responsavel: null,
    nome_fantasia: null,
    telefone: null,
    razao_social: null,
    endereco: null,
    setor_economico: null,
    subsetor: null,
    setor_atividade: null,
    escopo: null,
    filial: null,
    sector_aditivdade: null,
    logo: null,
    comprovante: null,
    user: [dataLocal.user]
  })
  const [haveUnidade, setHaveUnidade] = useState("")

  
  const storage= JSON.parse(localStorage.getItem("@sismiegee/auth"))
  const optionsTypes= ["Energia ", "Manufatura ou Construção", "Comercial ou Institucional", "Residencial, Agricultura, Florestal ou Pesca"]
  const optionsEscopo= [
    "Escopo 1", 
    "Escopo 2", 
    "Escopo 3", 
    "Escopo 1 e Escopo 2", 
    "Escopo 1 e Escopo 3", 
    "Escopo 2 e Escopo 3", 
    "Todos escopos"
]

    const newUserList= {...dataLocal.user, company: data}
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

//   useEffect(() => {
//     if (data.typeCadastral === "Participação acionaria") {
//         setShowTypeCadastral(true)
//     }else {
//         setShowTypeCadastral(false)
//     }
//   }, [data.typeCadastral])
  
  
  

  return (
    <>
        <Text>Parabéns!</Text>
        <Text size={14} color={true} fontSize={400}>
          Agora vamos cadastrar sua organização. <br/>
          Essa etapa é muito importante!
        </Text>
        <Form onSubmit={handleSubmit}>
            {/* <AreaInput>
                <SelectArea 
                    onChange={e => setData({...data, typeCadastral: e.target.value})} 
                    value={data.typeCadastral} 
                    title={"O que deseja cadastrar?"} 
                    item={optionsTypes} 
                    width= "50%"
                    placeholder="Escolhe um tipo..."
                />
                {showTypeCadastral && 
                    <Input 
                        label={"Porcentagem de participação"}
                        placeholder="30%"
                        spanceLeft={true}
                        type="number"
                    />
                }
            </AreaInput> */}
            <AreaInput>
                <Input 
                    label={"Razão Social"}
                    // placeholder="Uber"
                    value={data.nome}
                    onChange= {e => setData({...data, nome: e.target.value})}
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
                <Input 
                    label={"Setor econômico"}
                    // placeholder={``}
                    // type="email"
                    value={data.setor_economico}
                    onChange= {e => setData({...data, setor_economico: e.target.value})}
                />
                <Input 
                    label={"Subsetor"}
                    // placeholder="11986522567"
                    spanceLeft={true}
                    type="text"
                    value={data.subsetor}
                    onChange= {e => setData({...data, subsetor: e.target.value})}
                />
            </AreaInput>
            <AreaInput>
                <SelectArea 
                    onChange={e => setData({...data, setor_atividade: e.target.value})} 
                    value={data.setor_atividade} 
                    title={"Escolha o setor de atividade"} 
                    item={optionsTypes} 
                    width= "48%"
                    placeholder="Escolhe um tipo..."
                />
                <SelectArea 
                    onChange={e => setData({...data, escopo: e.target.value})} 
                    value={data.escopo} 
                    title={"Escolha os Escopos"} 
                    item={optionsEscopo} 
                    width= "48%"
                    placeholder="Escolhe escopo..."
                    spaceLeft={"10px"}
                />
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
    width: 600px;
    margin-top: 10px;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const AreaInput = styled.form`
    display: flex;
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
