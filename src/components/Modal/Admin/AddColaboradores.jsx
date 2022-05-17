import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { companyService, mailService, conviteService } from '../../../services'
import { othersActions } from '../../../actions'
import { admin } from '../../../constants/tailwind/colors'
import Input from '../../Input'
import { useDispatch } from 'react-redux'

export function AddColaboradores({ openModal }) {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [sucess, setSucess] = useState(false)
    const [sucessMail, setSucessMail] = useState(false)
    const [sucessConvite, setSucessConvite] = useState(false)
    // const [idConvite, setIdConvite] = useState('')
    const [dataCompany, setDataCompany] = useState({
        name: '',
        email: '',
    })

    const createCompany = (data) => {
        setLoading(true)
        setSucess(false)
        companyService.createCompany(data)
            .then(res => {
                setSucess(true)
                setSucessConvite(true)
                setData(res.data)
                console.log(res.data);
            })
            .catch(err => {
                setSucess(false)
                setLoading(false)
                console.log(err);
                if (err.response.data.error.message === "Email is already taken") {
                    toast.error("O e-mail já foi cadastrado")
                }
            })
    }

    const onSubmit= e => {
        e.preventDefault()
        if (dataCompany.nome?.length > 0 || dataCompany.email?.length > 0) {
            createCompany(dataCompany)
          } else {
            toast.warn("Os campos precisa ser preenchido")
          }
    }

    const sendConviteCompany = () => {
        const dataSend= {
            email: data.user.email,
            nome: data.user.name,
            id_convite: data.jwt
        }
        setSucessMail(false)
        mailService.sendConviteCompany(dataSend)
            .then(() => {
                setSucessMail(true)
            })
            .catch(err => {
                console.log(err);
                setSucessMail(false)
                toast.success(`Nâo foi possivel enviar o link `)
            })
    }

    useEffect(() => {
        if (sucessMail) {
            setLoading(false)
            // openModal(false)
            dispatch(othersActions.closeModal())
            window.location.reload()
            toast.success(`Link foi enviado com sucesso para ${data.user.email}`)
        }
    }, [sucessMail])

    useEffect(() => {
        if (sucessConvite) {
            sendConviteCompany()
        }
    }, [sucessConvite])
    
    
    
  return (
    <Area>
        <Form onSubmit={onSubmit}>
            <Input
                label={'Nome do responsável'} 
                placeholder={'Juliana Ferreira'}
                required={true}
                onChange={(e) => setDataCompany({...dataCompany, name: e.target.value})}
                value={dataCompany.name}
            />
            <Input
                type='email'
                required={true}
                label={'Email do responsável'} 
                placeholder={'julianaferreira@sismierge.com'}
                onChange={(e) => setDataCompany({...dataCompany, email: e.target.value})}
                spanceLeft={true}
                value={dataCompany.email}
            />
        </Form>
        <AreaButton>
            <Button isDisable={loading} disabled={loading} onClick={onSubmit}> 
                {loading ? sucess ? "Enviando o link..." : "Adicionando..." : "Adicionar colaborador"} 
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