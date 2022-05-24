import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { companyService, mailService, conviteService } from '../../../services'
import { admin } from '../../../constants/tailwind/colors'
import Input from '../../Input'
import SelectArea from '../../Select'
import { othersActions } from '../../../actions'
import { LoadingAnimation } from '../../lottie'
import { useDispatch } from 'react-redux'

export function AddColaboradores({ openModal }) {
    const dispatch = useDispatch()
    const storage = JSON.parse(localStorage.getItem("@sismierge/data"));
    const [data, setData] = useState({
        TypePermission: "",
        typeUnidade: ""
    })
    const [loading, setLoading] = useState(false)
    const [sucess, setSucess] = useState(false)
    const [sucessMail, setSucessMail] = useState(false)
    const [sucessConvite, setSucessConvite] = useState(false)
    const [msgCargo, setMsgCargo] = useState(``)
    const [dataCompany, setDataCompany] = useState({
        type_user: "",
        password: 'sismierge2022', 
        username: "newUser2022", 
        name: null,
        email: null,
        id: storage.company.user.length + 1,
        first: true,
        cargo: null,
        company:  storage.company,
        cpf: null,
        telefone: null
    })
    
    const optionCargo= ["Diretor(a)", "Auditor(a)", "Analista"]
    const optionUnidade= [storage.company.nome, storage.company.filial?.name]

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
            setLoading(true)
            const newData= {...storage, company: {...storage.company, user: [...storage.company.user, dataCompany]}}
            localStorage.setItem("@sismierge/data", JSON.stringify(newData))
            setTimeout(() => {
                toast.success("Adicionando com sucesso")
                setLoading(false)
                dispatch(othersActions.closeModal())
                setTimeout(() => {
                    window.location.reload()
                }, 500);
            }, 500);
          } else {
            toast.warn("Os campos precisa ser preenchido")
          }
    }

    const onAddOther= e => {
        e.preventDefault()
        if (data.TypePermission.length > 0 || data.typeUnidade?.length > 0) {
            setLoading(true)
            // createCompany(dataCompany)
            setData({
                TypePermission: "",
                typeUnidade: ""
            })
            setTimeout(() => {
                setLoading(false)
                dispatch(othersActions.handleOpenModal("Adicionar colaboradores"))
            }, 500);
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
            openModal(false)
            window.location.reload()
            toast.success(`Link foi enviado com sucesso para ${data.user.email}`)
        }
    }, [sucessMail])

    useEffect(() => {
        if (sucessConvite) {
            sendConviteCompany()
        }
    }, [sucessConvite])

    useEffect(() => {
      if (dataCompany.type_user === "Diretor(a)") {
        setMsgCargo(`
        Não podem atterar nenhum dado nem cadastrar novos usuários,
        somente podem ver o Dasboard por escopo, ver os relatórios de
        gases de efeito estufa (completo e simplificado), e ver as informações.
        (que foram incluídas (planilhas e documentos), indicadores.
        `)
      }
      if (dataCompany.type_user === "Auditor(a)") {
        setMsgCargo(`Relatório de auditoria contendo os documentos base (contas, NF,
            certificados, RECS...), o memorial de cálculo, os fatores de emissão
            utilizados, o GWP, a rastreabilidade, controle de acessos (históricos).
        `)
      }
      if (dataCompany.type_user === "Analista") {
        setMsgCargo(`Sem alterar escopos, criar usuários e conceder permissões,
        mas irá realizar a alimentação dos dados.
        `)
      }
    }, [dataCompany.type_user])
    
    
    
    
  return (
    loading ? (
        <LoadingAnimation size={150} />
    ): (
        <Area>
            <Form onSubmit={onSubmit}>
                <AreaInput>
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
                </AreaInput>
                <AreaInput>
                    <Input 
                        label={"CPF do responsável"}
                        placeholder="327.928.842.02"
                        type="number"
                        onChange={(e) => setDataCompany({...dataCompany, cpf: e.target.value})}
                        value={dataCompany.cpf}
                    />
                    <Input 
                        label={"Telefone de contato com DDD"}
                        placeholder="11986522567"
                        spanceLeft={true}
                        type="tel"
                        onChange={(e) => setDataCompany({...dataCompany, telefone: e.target.value})}
                        value={dataCompany.telefone}
                    />
                </AreaInput>
                <AreaInput>
                    <Input 
                        label={"Cargo do responsável"}
                        placeholder={`Gerente`}
                        type="text"
                        width={"100%"}
                        spanceRight={true}
                        onChange={(e) => setDataCompany({...dataCompany, cargo: e.target.value})}
                        value={dataCompany.cargo}
                    />
                    <SelectArea 
                        onChange={e => setData({...data, typeUnidade: e.target.value})} 
                        value={data.typeUnidade} 
                        title={"Quais unidades permitidas"} item={optionUnidade} 
                        width= "50%"
                        placeholder="Escolhe unidade..."
                    />
                </AreaInput>
                <AreaInput>
                    <SelectArea 
                        onChange={e => setDataCompany({...dataCompany, type_user: e.target.value})} 
                        // value={data.TypePermission} 
                        title={"Tipos de permissão"} item={optionCargo} 
                        width= "100%"
                        placeholder={"Escolhe tipos de permissão..."}
                    />
                    <MsgCargo> {msgCargo} </MsgCargo>
                </AreaInput>
            </Form>
            <AreaButton>
                {/* <ButtonMore onClick={onAddOther}> Adicionar mais colaborador </ButtonMore> */}
                <Button isDisable={loading} disabled={loading} onClick={onSubmit}> 
                    {/* {loading ? sucess ? "Enviando o link..." : "Adicionando..." : "Adicionar colaborador"}  */}
                    {loading ? "Adicionando..." : "Adicionar colaborador"}
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
    align-items: flex-end;
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