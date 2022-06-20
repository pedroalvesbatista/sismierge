import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { authService } from '../../services'
import { 
  Text, 
  Button, 
} from './styles'
import Input from '../../components/Input'
import { companyActions, othersActions } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { AddInventariacao } from '../../components/Modal/Company'

export const OrganisationStep2 = ({skip, setPage}) => {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const { loadingCreateCompany, sucessCreateCompany, companies, company, newCompany } = useSelector(state => state.company)
    const { displayModal } = useSelector(state => state.others)

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    historia: null,
    desc_servicos_prestado: null,
    produto_fabricado: null,
    cliente_atendido: null,
    processos_empresa: null,
    subprocesso_empresa: null,
    missao: null,
    visao: null,
    valores: null,
    area_total_m2: null,
    organograma: null
})

  const handleSubmit= (e) => {
    e.preventDefault()
    dispatch(companyActions.updateCompany(data, company.id))
    
  }

  return (
    <>
        <Text size={20}>Continue o cadastro da sua empresa!</Text>
        {/* <Text size={14} color={true} fontSize={400}>
          Agora vamos cadastrar sua organização. <br/>
          Essa etapa é muito importante!
        </Text> */}
        <Form onSubmit={handleSubmit}>
            <AreaInput>
                <Input 
                    type={"textArea"}
                    label={"Relate a história da sua empresa"}
                    placeholder="Conta um pouco sobre a empresa..."
                    value={data.historia}
                    onChange={e => setData({...data, historia: e.target.value})}
                />
                <Input 
                    label={"Descrição sucinta dos serviços prestados"}
                    placeholder="Digite aqui..."
                    spanceLeft={true}
                    type="textArea"
                    value={data.desc_servicos_prestado}
                    onChange={e => setData({...data, desc_servicos_prestado: e.target.value})}
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    type={"textArea"}
                    label={"Produtos fabricados"}
                    placeholder="Digite aqui..."
                    value={data.produto_fabricado}
                    onChange={e => setData({...data, produto_fabricado: e.target.value})}
                />
                <Input 
                    label={"Clientes Atendidos"}
                    placeholder="Digite aqui..."
                    spanceLeft={true}
                    type="textArea"
                    value={data.cliente_atendido}
                    onChange={e => setData({...data, cliente_atendido: e.target.value})}
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    type={"textArea"}
                    label={"Processos da empresa"}
                    placeholder="Conta um pouco sobre o processos..."
                    value={data.processos_empresa}
                    onChange={e => setData({...data, processos_empresa: e.target.value})}
                />
                <Input 
                    label={"Sub-processos da empresa"}
                    placeholder="Conta um pouco sobre o Sub-processos..."
                    spanceLeft={true}
                    type="textArea"
                    value={data.subprocesso_empresa}
                    onChange={e => setData({...data, subprocesso_empresa: e.target.value})}
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    type={"textArea"}
                    label={"Missão da empresa"}
                    placeholder="Conta aqui..."
                    value={data.missao}
                    onChange={e => setData({...data, missao: e.target.value})}
                />
                <Input 
                    label={"Visão da empresa"}
                    placeholder="Conta aqui..."
                    spanceLeft={true}
                    type="textArea"
                    value={data.visao}
                    onChange={e => setData({...data, visao: e.target.value})}
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    type={"textArea"}
                    label={"Valores da empresa"}
                    placeholder="Conta aqui..."
                    value={data.valores}
                    onChange={e => setData({...data, valores: e.target.value})}
                />
                <Input 
                    type={"textArea"}
                    label={" Área total construída (m2)"}
                    placeholder="Digite aqui..."
                    spanceLeft={true}
                    value={data.area_total_m2}
                    onChange={e => setData({...data, area_total_m2: e.target.value})}
                />  
            </AreaInput>
            <AreaInput>
                <Input 
                    label={"Organograma"}
                    spanceLeft={true}
                    type="file"
                    id={"file"}
                />
            </AreaInput>
        </Form>
        <ConexioArea skip={skip}>
            {skip && <TextSkip onClick={() => navigate('/')}> Ou ignore esta etapa por enquanto. </TextSkip>}
            <Button aria-disabled={loading ? true : false} onClick={handleSubmit}> 
                {loading ? "Carregando..." : "Continuar "} 
                &#8674;
            </Button>
        </ConexioArea>
          {displayModal === "Formulário de Inventariação"  && <AddInventariacao openModal={""} />}
    </>
  )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const AreaInput = styled.form`
    display: flex;
    width: 600px;
    margin-right: 10px;
    /* justify-content: space-between; */
    /* height: 100px; */
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