import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { companyService, mailService, conviteService } from '../../../services'
import { admin } from '../../../constants/tailwind/colors'
import Input from '../../Input'
import SelectArea from '../../Select'
import { authActions, othersActions } from '../../../actions'
import { LoadingAnimation } from '../../lottie'
import { useDispatch, useSelector } from 'react-redux'

export function EditUser({ openModal }) {
    const dispatch = useDispatch()
    const { dataModal } = useSelector(state => state.others)
    const { roles, loadingEditUser, sucessEditUser } = useSelector(state => state.auth)
    const [data, setData] = useState({
        TypePermission: dataModal?.role.name,
        typeUnidade: "",
        blocked: dataModal?.blocked,
        email: dataModal?.email,
        id: dataModal?.id,
        name: dataModal?.name,
        role: dataModal?.role.name,
        username: dataModal?.username
    })
    const [loading, setLoading] = useState(false)
    const [sucess, setSucess] = useState(false)
    const [msgCargo, setMsgCargo] = useState(``)
    const optionCargo= ["Master", "Colaborador", "Diretor(a)", "Auditor(a)", "Analista"]

    // console.log(dataModal);

    const handleSubmit = () => {
        // console.log(roles.filter(i => i.name === data.TypePermission)[0]);
        const newData= {
            role: roles.filter(i => i.name === data.TypePermission)[0],
            blocked: data?.blocked,
            email: data?.email,
            name: data?.name,
            username: data?.username
        }
        dispatch(authActions.editUser(dataModal.id, newData))
    }

    useEffect(() => {
      if (data.TypePermission === "Diretor(a)") {
        setMsgCargo(`
        Não podem atterar nenhum dado nem cadastrar novos usuários,
        somente podem ver o Dasboard por escopo, ver os relatórios de
        gases de efeito estufa (completo e simplificado), e ver as informações.
        (que foram incluídas (planilhas e documentos), indicadores.
        `)
      }
      if (data.TypePermission === "Auditor(a)") {
        setMsgCargo(`Relatório de auditoria contendo os documentos base (contas, NF,
            certificados, RECS...), o memorial de cálculo, os fatores de emissão
            utilizados, o GWP, a rastreabilidade, controle de acessos (históricos).
        `)
      }
      if (data.TypePermission === "Analista") {
        setMsgCargo(`Sem alterar escopos, criar usuários e conceder permissões,
        mas irá realizar a alimentação dos dados.
        `)
      }
      if (data.TypePermission === "Master") {
        setMsgCargo(`O dono da empresa.
        `)
      }
      if (data.TypePermission === "Colaborador") {
        setMsgCargo(`Pessoas para trabalhar com você na Sismierge.
        `)
      }
    }, [data.TypePermission])
    
    
    // console.log(roles);
    
  return (
    loading ? (
        <LoadingAnimation size={150} />
    ): (
        <Area>
            <Form onSubmit={handleSubmit}>
                <AreaInput>
                    <Input
                        label={'Nome'} 
                        // placeholder={'Juliana Ferreira'}
                        required={true}
                        onChange={(e) => setData({...data, name: e.target.value})}
                        value={data.name}
                    />
                    <Input
                        type='email'
                        required={true}
                        label={'Email'} 
                        // placeholder={'julianaferreira@sismierge.com'}
                        onChange={(e) => setData({...data, email: e.target.value})}
                        spanceLeft={true}
                        value={data.email}
                    />
                </AreaInput>
                <AreaInput>
                    <Input 
                        label={"Senha"}
                        // placeholder="11986522567"
                        // spanceLeft={true}
                        type="password"
                    />
                    <Input
                        label={'Usuario'} 
                        // placeholder={'Juliana Ferreira'}
                        required={true}
                        onChange={(e) => setData({...data, username: e.target.value})}
                        value={data.username}
                        spanceLeft={true}
                    />
                    
                </AreaInput>
                <AreaInput>
                    <Input 
                        label={"Telefone"}
                        // placeholder="11986522567"
                        // spanceLeft={true}
                        type="tel"
                    />
                    <Input 
                        label={"CPF"}
                        // placeholder="327.928.842.02"
                        type="number"
                        spanceLeft={true}
                    />
                </AreaInput>
                {/* <AreaInput>
                    <Input 
                        label={"Nivel"}
                        // placeholder={`Gerente`}
                        // type="email"
                        width={"50%"}
                        // spanceRight={true}
                        // spanceLeft={true}
                        value={data.role}
                    />
                </AreaInput> */}
                <AreaInput>
                    <SelectArea 
                        onChange={e => setData({...data, TypePermission: e.target.value})} 
                        value={data.TypePermission} 
                        title={"Tipos de permissão"} 
                        // type={"collections"}
                        item={roles.map(i => [i.name])} 
                        width= "49%"
                        placeholder={"Escolhe tipos de permissão..."}
                    />
                    <MsgCargo> {msgCargo} </MsgCargo>
                </AreaInput>
                <AreaInput>
                    <Input 
                        label={"Bloquear"}
                        type="radio"
                        qtd={["Sim", "Não"]}
                        name={"blocked"}
                        notView={true}
                        onChange={e => setData({...data, blocked: e.target.value === "Sim" ? true : false})}
                    />
                </AreaInput>
            </Form>
            <AreaButton>
                <Button isDisable={loadingEditUser} disabled={loadingEditUser} onClick={handleSubmit}> 
                    {loadingEditUser ? "Carregando..." : "Salvar"} 
                </Button>
            </AreaButton>
        </Area>
    )
  )
}

const Area = styled.div`
    width: 100%;
`
const MsgCargo = styled.span`
    margin-left: 20px;
    font-size: 10px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    /* padding: 15px; */
    color: ${admin.dark}90;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const AreaInput = styled.form`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-end;
    /* height: 200px; */
`
const AreaButton = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Button = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    background-color: ${({isDisable}) => isDisable ? admin.verde+89 : admin.verde};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    margin-top: 10px;
    opacity: ${({isDisable}) => isDisable ? "0.7" : 1};;

    &:hover {
        opacity: ${({isDisable}) => isDisable ? "0.7" : "0.7"};
    }
    &:active {
        opacity: ${({isDisable}) => isDisable ? "0.7" : "1"};
    }
`
const ButtonMore = styled(Button)`
    background-color: ${admin.verde}18;
    border: 1px solid ${admin.verde}78;
    color: ${admin.verde};
    font-weight: 400;
    padding: 10px;
    margin-right: 10px;
`