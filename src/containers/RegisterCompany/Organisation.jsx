import React, { useEffect, useState } from 'react'
import InputMask from "react-input-mask";
import styled from 'styled-components'
import { toast } from 'react-toastify'

import { authService } from '../../services'
import { 
  Text, 
  Button, 
} from './styles'
import Input from '../../components/Input'
import SelectArea from '../../components/Select/MultiSelect'
import MoreItems from '../../components/Modal/Company/MoreItems'
import { useDispatch, useSelector } from 'react-redux'
import InputTag from '../../components/Input/InputTag'
import { companyActions, othersActions } from '../../actions'
import InputChoose from '../../components/Input/InputChoose'

export const Organisation = ({dataCompany, setPage}) => {
    const dispatch= useDispatch()
    const { loadingCreateCompany, sucessCreateCompany, companies, company } = useSelector(state => state.company)
    const { dataEscopo, escopoSheetData } = useSelector(state => state.sheet)
    const { loadingCep, sucessCep, dataCep } = useSelector(state => state.others)

    const dataLocal= JSON.parse(localStorage.getItem("@sismiegee/auth"))
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        email: "",
        cnpj: "",
        cpf: "",
        nome_do_responsavel: "",
        nome_fantasia: "",
        telefone: "",
        razao_social: "",
        endereco: {
            cep: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            estado: ""
        },
        setor_economico: "",
        subsetor: "",
        setor_atividade: dataEscopo[1],
        escopos: dataEscopo[0],
        users: JSON.stringify([dataLocal?.user.id])
    })
    const [haveUnidade, setHaveUnidade] = useState("")

  const handleSubmit= (e) => {
    e.preventDefault()
    const { email, razao_social, escopos, users, cnpj, nome_do_responsavel, subsetor, cpf, nome_fantasia, endereco, setor_economico, setor_atividade } =  data
    const newData = {
        email,
        razao_social,
        escopos: dataEscopo[0],
        users,
        cnpj,
        nome_do_responsavel,
        subsetor,
        // cpf,
        nome_fantasia,
        endereco,
        setor_economico,
        setor_atividade: dataEscopo[1]
    }
    dispatch(companyActions.createCompany({
        email,
        razao_social,
        escopos,
        users,
        id_user_create: dataLocal?.user?.id?.toString(),
        cnpj,
        nome_do_responsavel,
        subsetor,
        // cpf,
        nome_fantasia,
        endereco,
        setor_economico,
        setor_atividade: dataEscopo[1]
    }))
  }

  useEffect(() => {
    let cep = data.endereco.cep.split("-")[0]+data.endereco.cep.split("-")[1]
    cep = cep.split('_')[0]
    // console.log(dataCep);
    if (sucessCreateCompany) {
        setPage("welcome")
    }
    if (cep.length == 8) {
        dispatch(othersActions.loadCep(cep))
    }
  }, [sucessCreateCompany, data.endereco.cep])

  useEffect(() => {
    setData({...data, escopos: dataEscopo[0]?.filter(i => i.items.length > 0), setor_atividade: dataEscopo[1]})
  }, [dataEscopo])
  

//   console.log(escopoSheetData);
// console.log(JSON.parse(data.users));
  
  
//   console.log(data.setor_economico);

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
                    placeholder="Digite aqui"
                    value={data.razao_social}
                    onChange= {e => setData({...data, razao_social: e.target.value})}
                />
                <Input 
                    label={"Nome fantasia"}
                    placeholder="Digite aqui"
                    value={data.nome_fantasia}
                    spanceLeft={true}
                    onChange= {e => setData({...data, nome_fantasia: e.target.value})}
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    label={"Nome do responsavel"}
                    placeholder="Ex: Alan Silva"
                    // type="number"
                    value={data.nome_do_responsavel}
                    onChange= {e => setData({...data, nome_do_responsavel: e.target.value})}
                />
                <Input 
                    label={"Email corporativo"}
                    placeholder={`Ex: jose@gmail.com`}
                    required={"true"}
                    spanceLeft={true}
                    value={data.email}
                    onChange= {e => setData({...data, email: e.target.value})}
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    label={"CNPJ"}
                    placeholder="Ex: 32.792.884/2021-10"
                    // type="number"
                    value={data.cnpj}
                    onChange= {e => setData({...data, cnpj: e.target.value})}
                    mask="cnpj"
                />
                <Input 
                    label={"CEP"}
                    placeholder={`Ex: 12345-678`}
                    loading={loadingCep}
                    mask="cep"
                    spanceLeft={true}
                    value={data.endereco.cep}
                    onChange= {e => setData({...data, endereco: {...data.endereco, cep: e.target.value}})}
                />
            </AreaInput>
            {sucessCep &&
                <>
                    <AreaInput>
                        <Input 
                            label={"Endereço"}
                            value={dataCep.street}
                            disabled= "true"
                        />
                        <Input 
                            label={"Numero"}
                            placeholder={`Ex: 123`}
                            required={"true"}
                            spanceLeft={true}
                            value={data.endereco.numero}
                            onChange= {e => setData({...data, endereco: {...data.endereco, numero: e.target.value}})}
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Complemento"}
                            placeholder={`Ex: Apto 1202 B`}
                            value={data.endereco.complemento}
                            onChange= {e => setData({...data, endereco: {...data.endereco, complemento: e.target.value}})}
                        />
                        <Input 
                            label={"Bairro"}
                            value={dataCep.neighborhood}
                            disabled= "true"
                            spanceLeft={true}
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Cidade"}
                            value={dataCep.city}
                            disabled= "true"
                        />
                        <Input 
                            label={"Estado"}
                            value={dataCep.state}
                            disabled= "true"
                            spanceLeft={true}
                        />
                    </AreaInput>
                </>
            }
            <AreaInput>
                <InputTag 
                    label={"Setor econômico"}
                    items={e => setData({...data, setor_economico: e})}
                    placeholder="digite aqui"
                />
                <InputTag 
                    label={"Subsetor"}
                    // placeholder="11986522567"
                    spanceLeft={true}
                    items={e => setData({...data, subsetor: e})}
                />
            </AreaInput>
            <AreaInput NoFlex={true}>
                <SelectArea 
                    type = "collections"
                    title={"Escolha os Escopos"} 
                    item={escopoSheetData} 
                    // width= "48%"
                    placeholder="Escolhe escopo..."
                    isMultiple={true}
                    // spaceLeft={"10px"}
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    label={"Logo da empresa"}
                    type="file"
                    id={"file"}
                    // value={data.file}
                    // onChange={e => setData({...data, logo: e.target.value})}
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
            {/* <AreaInput>
                <Input 
                    label={"Quer cadastrar filiais ?"}
                    type="radio"
                    qtd={["Sim", "Não"]}
                    name={"unidades"}
                    notView={true}
                    onChange={e => setHaveUnidade(e.target.value)}
                />
            </AreaInput> */}
        </Form>
        <ConexioArea>
            <Button aria-disabled={loadingCreateCompany ? true : false} onClick={handleSubmit}> 
                {loadingCreateCompany ? "Carregando..." : "Continuar "} 
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