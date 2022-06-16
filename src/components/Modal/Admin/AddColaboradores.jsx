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
import { authConstants, mailConstants } from '../../../constants/redux'

export function AddColaboradores({ openModal }) {
    const dispatch = useDispatch()
    const { loading, signupSuccess, user, roles, sucessEditUser } = useSelector(state => state.auth)
    const { loadingSendConvite, sucessSendConvite, errorSendConvite, dataConvite } = useSelector(state => state.mail)
    const [data, setData] = useState({
        name: '',
        email: '',
    })
    const { username, password } = randPassUser(data.email, data.name)

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
            dispatch(authActions.editUser(user.user?.id, {role: roles?.filter(i => i.type === "authenticated")[0]}))
        }

        if (sucessEditUser) {
            dispatch(othersActions.closeModal())
            setData({
                name: '',
                email: '',
            })
            dispatch({ 
                type: mailConstants.CLEAR_All
            })
        }

    }, [sucessSendConvite, sucessEditUser])
    
    
  return (
    <Area onSubmit={onSubmit}>
        <Form>
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
        <AreaButton>
            <Button isDisable={loading || loadingSendConvite} disabled={loading || loadingSendConvite} onClick={onSubmit}> 
                {loading ?  "Adicionando..." : loadingSendConvite ? "Enviando o link..." : "Adicionar colaborador"} 
            </Button>
        </AreaButton>
    </Area>
  )
}

const Area = styled.form`
`
const Form = styled.div`
    display: flex;
    justify-content: space-between;
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