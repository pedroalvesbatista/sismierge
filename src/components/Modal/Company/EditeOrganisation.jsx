import React, { useEffect, useState } from 'react'
import InputMask from "react-input-mask";
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { toast } from 'react-toastify'

import { authService } from '../../../services'
import { 
  Text, 
  Button, 
} from './styles'
import Input from '../../Input'
import SelectArea from '../../Select/MultiSelect'
import MoreItems from './MoreItems'
import { useDispatch, useSelector } from 'react-redux'
import InputTag from '../../Input/InputTag'
import { companyActions, othersActions } from '../../../actions'
import InputChoose from '../../Input/InputChoose'
import { admin } from '../../../constants/tailwind/colors';
import { companyConstants } from '../../../constants/redux';

export const EditeOrganisation = ({skip, setPage}) => {
    const navigate= useNavigate()
    const dispatch= useDispatch()
    const { loadingUpdateCompany, sucessUpdateCompany, companies, newCompany } = useSelector(state => state.company)
    const { dataEscopo, escopoSheetData } = useSelector(state => state.sheet)
    const { loadingCep, sucessCep, dataCep } = useSelector(state => state.others)

    // console.log(companies.escopos);

    const dataLocal= JSON.parse(localStorage.getItem("@sismiegee/auth"))
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        email: companies?.email,
        cnpj: companies?.cnpj,
        nome_do_responsavel: companies?.nome_do_responsavel,
        nome_fantasia: companies?.nome_fantasia,
        telefone: companies?.telefone,
        razao_social: companies?.razao_social,
        endereco: {
            cep: companies?.endereco?.cep,
            numero: companies?.endereco?.numero,
            complemento: companies?.endereco?.complemento,
            logradouro: dataCep?.street,
            bairro: dataCep?.neighborhood,
            cidade: dataCep?.city,
            estado: dataCep?.state
        },
        setor_economico: companies?.economico,
        subsetor: companies?.subsetor,
        setor_atividade: null,
        escopos: [],
        // users: companies?.users
    })

    // console.log(dataEscopo[0]);
  const handleSubmit= (e) => {
    e.preventDefault()
    const { email, razao_social, escopos, cnpj, nome_do_responsavel, subsetor, nome_fantasia, endereco, setor_economico, setor_atividade } =  data

    // console.log(subsetor);
    const newData = {
        email,
        razao_social,
        escopos,
        cnpj: data?.cnpj?.length > 0 ? data?.cnpj?.split(/[,.-/-\s]/).join("") : null,
        nome_do_responsavel,
        nome_fantasia,
        endereco,
        setor_atividade: dataEscopo[1],
        setor_economico,
        // subsetor,
    }
    dispatch(companyActions.updateCompany(newData, companies?.id))
    // console.log(newEscopo);

  }

//   console.log(data?.setor_economico)

  useEffect(() => {
    let cep = data.endereco.cep.split("-")[0]+data.endereco.cep.split("-")[1]
    cep = cep.split('_')[0]

    // if (!companies.endereco.cep) {
        if (cep.length == 8) {
            dispatch(othersActions.loadCep(cep))
        }
    // }
  }, [ data.endereco.cep])

  useEffect(() => {
    if (sucessUpdateCompany) {
        dispatch(othersActions.closeModal())
        dispatch({type: companyConstants.CLEAR_COMPANY})
    }
    setData({
        ...data, 
        escopos: JSON.stringify(dataEscopo[0]?.filter(i => i.items.length > 0)), 
        setor_atividade: JSON.stringify(dataEscopo[1])
    })
  }, [dataEscopo, sucessUpdateCompany])
  

//   console.log(escopoSheetData);

  return (
    <>
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
                    dataEdit={companies.setor_economico}
                    items={e => setData({...data, setor_economico: e})}
                    placeholder="digite aqui"
                />
                <InputTag 
                    label={"Subsetor"}
                    dataEdit={companies.subsetor}
                    // placeholder="11986522567"
                    spanceLeft={true}
                    items={e => setData({...data, subsetor: e})}
                />
            </AreaInput>
            <AreaInput NoFlex={true}>
                <SelectArea 
                    type = "collections"
                    title={"Escolha os Escopos"} 
                    item={escopoSheetData && escopoSheetData} 
                    // width= "48%"
                    placeholder="Escolhe escopo..."
                    isMultiple={true}
                    editeData={[companies.escopos, companies.setor_atividade]}
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
        {/* {!notShowButton && */}
            <ConexioArea skip={skip}>
                {skip && <TextSkip onClick={() => navigate('/')}> Ou ignore esta etapa por enquanto. </TextSkip>}
                <Button aria-disabled={loadingUpdateCompany ? true : false} onClick={handleSubmit}> 
                    {loadingUpdateCompany ? "Carregando..." : "Continuar "} 
                    &#8674;
                </Button>
            </ConexioArea>
        {/* } */}
    </>
  )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 650px;
    height: 600px;
    margin-top: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    /* border-top: 1px solid ${admin.cinza}; */
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
    justify-content: ${({skip}) => skip ? "space-between" : "flex-end"};
    align-items: center;
    margin-top: 10px;
`

const InputFile = styled.input`
    display: flex;
    width: 600px;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const TextSkip = styled.span`
    font-size: 12px;
    cursor: pointer;
    
    &:hover{
        text-decoration: underline;
    }
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