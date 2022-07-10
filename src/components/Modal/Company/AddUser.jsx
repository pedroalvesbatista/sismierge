import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { companyService, mailService, conviteService } from '../../../services'
import { authActions, othersActions } from '../../../actions'
import { admin } from '../../../constants/tailwind/colors'
import Input from '../../Input'
import { useDispatch, useSelector } from 'react-redux'
import { randPassUser } from '../../../functions'
import { mailActions } from '../../../actions/mail.actions'
import SelectArea from '../../Select'

export function AddUser({ openModal }) {
    const dispatch = useDispatch()
    const { loading, signupSuccess, user, roles, sucessEditUser } = useSelector(state => state.auth)
    const { loadingSendConvite, sucessSendConvite, errorSendConvite, dataConvite } = useSelector(state => state.mail)
    const [data, setData] = useState({
        name: '',
        email: '',
        type_user: ""
    })
    const [msgCargo, setMsgCargo] = useState(``)
    const { username, password } = randPassUser(data.email, data.name)
    const optionCargo= ["Assistente", "Verificador", "Master", "Coordenador geral"]

    const onSubmit= e => {
        e.preventDefault()
        const { name, email } = data
        const newData= {
            name,
            email,
            username,
            password,
            user_first: true,
            confirmed: true
        }
        if (data.name?.length > 0 || data.email?.length > 0) {
            dispatch(authActions.createUser(newData))
          } else {
            toast.warn("Os campos precisa ser preenchido")
          }
    }

    useEffect(() => {

        if (signupSuccess) {
            const dataSend= {
                email: user.user.email,
                nome: user.user.name,
                id_convite: user.jwt
            }
            dispatch(mailActions.sendConvite(dataSend))
        }

    }, [signupSuccess, ])

    useEffect(() => {
        if (sucessSendConvite) {
            dispatch(authActions.editUser(user.user?.id, {role: roles?.filter(i => i.type === data.type_user)[0]}))
            if (sucessEditUser) {
                dispatch(othersActions.closeModal())
                window.location.reload()
            }
            
        }
    }, [sucessSendConvite, sucessEditUser])

    useEffect(() => {
        if (data.type_user === "Assistente") {
            setMsgCargo(`Pessoa que vai editar os dados do inventário`)
        }
        else if (data.type_user === "Verificador") {
            setMsgCargo(` Não pode editar os dados do inventário, somente fazer a leitura dos dados cadastrados.`)
        }
        else if (data.type_user === "Master") {
            setMsgCargo(`Sinergia Engenharia (somente)`)
        }
        else if (data.type_user === "Coordenador geral") {
            setMsgCargo(`É a pessoa que responde pelo inventário. Tem amplo acesso ao sistema.`)
        }
        else {
            setMsgCargo("")
        }
      }, [data.type_user])
    
    
    
  return (
    <Area>
        <Form onSubmit={onSubmit}>
            <Input
                label={'Nome do responsável'} 
                placeholder={'Juliana Ferreira'}
                required={true}
                onChange={(e) => setData({...data, name: e.target.value})}
                value={data.name}
            />
            <Input
                type='email'
                required={true}
                label={'Email do responsável'} 
                placeholder={'julianaferreira@sismierge.com'}
                onChange={(e) => setData({...data, email: e.target.value})}
                spanceLeft={true}
                value={data.email}
            />
        </Form>
        <AreaInput>
            <SelectArea 
                onChange={e => setData({...data, type_user: e.target.value})} 
                // value={data.TypePermission} 
                title={"Tipos de permissão"} item={optionCargo} 
                width= "49%"
                placeholder={"Escolhe tipos de permissão..."}
            />
            <MsgCargo> {msgCargo} </MsgCargo>
        </AreaInput>
        <AreaButton>
            <Button isDisable={loading} disabled={loading} onClick={onSubmit}> 
                {loading ?  "Adicionando..." : loadingSendConvite ? "Enviando o link..." : "Adicionar usuario"} 
            </Button>
        </AreaButton>
    </Area>
  )
}

const Area = styled.div`
`
const Form = styled.form`
    display: flex;
    justify-content: space-between;
`
const AreaButton = styled.div`
    display: flex;
    justify-content: flex-end;
`
const AreaInput = styled.form`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    /* height: 200px; */
`
const MsgCargo = styled.span`
    margin-left: 20px;
    font-size: 10px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: flex-end;
    /* padding: 15px; */
    color: ${admin.dark}90;
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