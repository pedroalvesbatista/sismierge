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

export const AddUnidade = ({dataCompany, setPage}) => {
    const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    file: "",
    haveUnidade: ""
})
  const [showPassword, setShowPassword] = useState(false)


  const storage= JSON.parse(localStorage.getItem("@sismiegee/auth"))

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
  
  

  return (
    <Fragment>
        {loading ? (
            <LoadingAnimation size={150}/>
        ): (
            <Fragment>
                <Form onSubmit={handleSubmit}>
                <AreaInput>
                    <Input 
                        label={"Nome da unidade"}
                        placeholder="Unidade leste"
                    />
                    <Input 
                        label={"CNPJ da empresa"}
                        placeholder="32.792.884/2021-10"
                        spanceLeft={true}
                        type="number"
                    />
                </AreaInput>
                <AreaInput>
                    <Input 
                        label={"Nome completo do responsável"}
                        placeholder={`Milena rocha`}
                    />
                    <Input 
                        label={"CPF do responsável"}
                        placeholder="327.928.842.02"
                        spanceLeft={true}
                        type="number"
                    />
                </AreaInput>
                <AreaInput>
                    <Input 
                        label={"Email corporativo"}
                        placeholder={`jumboltda@jumbo.com`}
                        type="email"
                    />
                    <Input 
                        label={"Telefone de contato com DDD"}
                        placeholder="11986522567"
                        spanceLeft={true}
                        type="tel"
                    />
                </AreaInput>
                <AreaInput>
                    <Input 
                        label={"Cargo"}
                        placeholder={`Diretor Financeiro`}
                        type="email"
                    />
                    <Input 
                        label={"Comprovante de vinculaçâo"}
                        spanceLeft={true}
                        type="file"
                        id={"file"}
                    />
                </AreaInput>
                <AreaInput>
                    <Input 
                        label={"Possui outras unidades organizacionais s serem inventariadas?"}
                        type="radio"
                        qtd={["Sim", "Não"]}
                        name={"unidades"}
                        notView={true}
                        onChange={e => setData({...data, haveUnidade: e.target.value})}
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
