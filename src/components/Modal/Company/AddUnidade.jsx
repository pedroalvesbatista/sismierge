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

export const AddUnidade = ({dataCompany, setPage}) => {
    const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    file: "",
    haveUnidade: "",
    typeUnidade: ""
})
  const [showPassword, setShowPassword] = useState(false)

  const storage= JSON.parse(localStorage.getItem("@sismiegee/auth"))
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
  
  

  return (
    <Fragment>
        {loading ? (
            <LoadingAnimation size={150}/>
        ): (
            <Fragment>
                <Form onSubmit={handleSubmit}>
                    {/* <AreaInput>
                        <SelectArea 
                            onChange={e => setData({...data, typeUnidade: e.target.value})} 
                            value={data.typeUnidade} 
                            title={"Qual unidade de negocio deseja inventariar?"} item={optionsTypes} 
                            width= "100%"
                            placeholder="Escolhe um tipo..."
                        />
                    </AreaInput> */}
                    <AreaInput>
                        {/* <SelectArea 
                            // onChange={e => setData({...data, typeUnidade: e.target.value})} 
                            // value={data.typeUnidade} 
                            title={"Filiais"} item={[""]} 
                            width= "48%"
                            placeholder="Escolhe aqui..."
                        /> */}
                        <SelectArea 
                            title={"Motivos pela qual está fazendo IGEE"} item={optionsIgee} 
                            placeholder="Escolhe aqui..."
                            width= "100%"
                            // spaceLeft
                        />
                    </AreaInput>
                    <AreaInput>
                        <SelectArea 
                            title={"Qual abordagem de consolidação foi utilizado no inventario?"} 
                            item={["Controle operacional"]} 
                            placeholder="Escolhe aqui..."
                            width= "70%"
                            // spaceLeft
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Data do inventario"}
                            placeholder={``}
                            type="date"
                        />
                        <Input 
                            label={"Numero de funcionário no ano inventariado"}
                            placeholder="ex: 10"
                            spanceLeft={true}
                            type="numeric"
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Produtos fabricado / Serviços prestado"}
                            placeholder={`digite aqui...`}
                            type="text"
                            width={"50"}
                        />
                    </AreaInput>
                    <AreaInput>
                        <SelectArea 
                            title={"Produção total do ano inventariado"} 
                            item={["produto"]} 
                            placeholder="Escolhe (em unidades, kg, m, m2, m3...)"
                            width= "40%"
                            // spaceLeft
                        />
                        <Input 
                            label={""}
                            placeholder={`Qtd`}
                            type="numeric"
                            width={"50"}
                            spanceLeft={true}
                            spanceTop={"30px"}
                        />
                        <SelectArea 
                            title={""} 
                            item={["medida"]} 
                            placeholder="uma medida..."
                            width= "30%"
                            spaceLeft
                            spanceTop={"30px"}
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Area total construida da empresa (m2)"}
                            placeholder={`digite aqui...`}
                            type="text"
                            width={"50"}
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Escolha o setor de atividade para que os fatores de emissão corretos possa ser considerados"}
                            type="radio"
                            qtd={["Energia", "Manufatura ou Construção", "Commercial ou Institucional", "Residencial, Agricultura, Florestal ou Pesca"]}
                            name={"setores"}
                            notView={true}
                            // onChange={e => setData({...data, haveUnidade: e.target.value})}
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
