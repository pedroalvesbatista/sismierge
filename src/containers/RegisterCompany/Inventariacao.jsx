import React, { Fragment, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { authService } from '../../services'
import { LoadingAnimation } from '../../components/lottie'
import Input from '../../components/Input'
import { othersActions } from '../../actions'
import { useDispatch } from 'react-redux'
import SelectArea from '../../components/Select'
import Table from '../../components/Table'
import ModelTable from '../../components/Table/ModelTable'
import MoreItems from '../../components/Modal/Company/MoreItems'
import { admin } from '../../constants/tailwind/colors'
import { Text } from './styles'

export const Inventariacao = ({skip, setPage}) => {
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const [list, setList] = useState([1])
    const [indexProduct, setIndexProduct] = useState(0)
    const [produtos, setProdutos] = useState([{
        name: null,
        unidade: null,
        index: 0
    }])
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    informacoes_nstiucionais: null,
    motivo: null,
    verificacao_terceiros: null,
    limite_organizacionais: null,
    abordagem_consolidacao: null,
    funcionario: null,
    producao_total_ano: [],
    meta_reducao: null,
    desc_indicadores_emissao_gee: null,
    descricao_estrategias_gestao_emissoes_gee: null,
    informacoes_contratos_clientes: null,
    informacoes_incertezas: null,
    descricao_acoes_internas: null,
    informacoes_compra_energia_eletrica: null,
    info_autoprod_renovavel: null,
    info_estoque_carb_ton: null,
    compensacao_emissoes: null,
    organizacao_comp_emissoes: null,
    reducoes_emissoes: null,
    organizacao_proj_red_emissoes: null,
    users_permissions_users: null,
    company: null,
    ano: null
    
})
  const [showPassword, setShowPassword] = useState(false)
  const [metaEscopo, setMetaEscopo] = useState(false)

  const storage= JSON.parse(localStorage.getItem("@sismierge/data"))
  const escopos= storage?.company?.escopo.split(" e ")
  const optionsTypes= ["Matriz", "Filial"]
  const optionsIgee= ["Qualificações de fornecedores", "ABNT NBR 14.064", "Faz parte da política"]

  const ref = useRef(null)

  const handleSubmit= (e) => {
    e.preventDefault()
    // setLoading(true)
    // if (data.haveUnidade === "Sim") {
    //     setTimeout(() => {
    //         setLoading(false)
    //         dispatch(othersActions.handleOpenModal("Adicionar unidades"))
    //     }, 500);
    // }else {
    //     dispatch(othersActions.closeModal())
    // }
    // setPage("welcome")
    
  }

    const handleMoreTable= () => {
        setList([...list, list.length + 1])
    }
    const handleProdutos= (item) => {
        const { type, index, event } = item
        // let newProduct = {...data, producao_total_ano: "yes"}
        const pdct = []
        const array = ref?.current?.children
        for (let index = 0; index < array.length; index++) {
            const key= array[index].children[0].children[1].children[0].value
            const value= array[index].children[1].children[1].children[0].value
            pdct.push({produto: key, unidade: value})
            // newProduct = {produto: key, unidade: value}
        }
        const filterData = pdct?.filter(i => i?.produto.length > 0 && i.unidade.length > 0)
        setData({...data, producao_total_ano:  filterData})

        if (type === "more") {
            setProdutos([...produtos, {name: null, unidade: null, index}])
        } else {
            setProdutos(produtos.splice(0, produtos.length - 1))
        }
    }

    const handlLessTable= () => {
        setList(list.splice(0, list.length - 1))
    }
    
//   console.log(metaEscopo);

  return (
    <Fragment>
        <Text size={18}>
            Inicie o preenchimento do Formulário de Inventariação da sua empresa!
        </Text>
        {loading ? (
            <LoadingAnimation size={150}/>
        ): (
            <Fragment>
                
                <Form onSubmit={handleSubmit}>
                    <AreaInput>
                        <Input 
                            label={"Ano inventariado"}
                            placeholder={``}
                            // type="date"
                            mask="ano"
                            value={data.ano}
                            onChange={e => setData({...data, ano: e.target.value})}
                        />
                        <Input 
                            label={"Motivo pelo qual decidiu elaborar o IGEE"}
                            placeholder="Digite aqui"
                            spanceLeft={true}
                            type="text"
                            value={data.motivo}
                            onChange={e => setData({...data, motivo: e.target.value})}
                        />
                    </AreaInput>
                    <AreaInput>
                        <SelectArea 
                            // onChange={e => setData({...data, typeUnidade: e.target.value})} 
                            // value={data.typeUnidade} 
                            title={"O inventário será verificado por terceira parte"} 
                            item={["sim", "Não"]} 
                            width= "100%"
                            placeholder="Escolhe aqui..."
                            value={data.verificacao_terceiros}
                            onChange={e => setData({...data, verificacao_terceiros: e.target.value})}

                        />
                        <SelectArea 
                            title={"Limites Organizacionais"} 
                            item={["Matriz C Controlada", "U Unidade"]} 
                            placeholder="Escolhe aqui..."
                            width= "100%"
                            spaceLeft
                            value={data.limite_organizacionais}
                            onChange={e => setData({...data, limite_organizacionais: e.target.value})}
                        />
                    </AreaInput>
                    <AreaInput>
                        <SelectArea 
                            title={"Qual abordagem de consolidação foi utilizado no inventario?"} 
                            item={["Abordagem  de Controle operacional", "Abordagem de xxx"]} 
                            placeholder="Escolhe aqui..."
                            width= "50%"
                            // spaceLeft
                            value={data.abordagem_consolidacao}
                            onChange={e => setData({...data, abordagem_consolidacao: e.target.value})}
                        />
                        <Input 
                            label={"Numero de funcionário no ano inventariado"}
                            placeholder="ex: 10"
                            spanceLeft={true}
                            type="numeric"
                            value={data.funcionario}
                            onChange={e => setData({...data, funcionario: e.target.value})}
                        />
                    </AreaInput>
                    <AreaInput NoFlex={true}>
                        <Title>Produção total do ano inventariado (em unidades, kg, m, m2, m3..) por tipo de produto</Title>
                        <ContainerAreaInput style={{display: "flex"}}>
                            <WrapperAreaInput ref={ref}>
                                {produtos.map((item, index) => (
                                    <ContentAreaInput key={index}>
                                        <Input
                                            // label={"Numero de funcionário no ano inventariado"}
                                            placeholder="Produto"
                                            type="text"
                                            // value={produtos[index].name}
                                            onChange={e => {
                                                let newProd= {...produtos[index]}
                                                newProd.name = e.target.value
                                                // setProdutos([newProd ])
                                                setIndexProduct(index)
                                            }}
                                        />
                                        <Input 
                                            // label={"Numero de funcionário no ano inventariado"}
                                            placeholder="Unidade"
                                            spanceLeft={true}
                                            type="numeric"
                                            // value={produtos[index].unidade}
                                            onChange={e => {
                                                let newProd= {...produtos[index]}
                                                newProd.unidade = e.target.value
                                                // setProdutos([newProd ])
                                                setIndexProduct(index)
                                            }}
                                        />
                                    </ContentAreaInput>
                                ))}
                            </WrapperAreaInput>
                            <MoreItems 
                                onClickLess={(e) => handleProdutos({type: "less", index: produtos.length, event: e})} 
                                onClickMore={(e) => handleProdutos({type: "more", index: produtos.length, event: e})}  
                                item={produtos} 
                            />
                        </ContainerAreaInput>
                    </AreaInput>
                    <AreaInput NoFlex={true}>
                        <Title>Sua empresa já tem alguma meta de redução para o escopo</Title>
                        <SelectArea 
                            // title={"Sua empresa já tem alguma meta de redução para o escopo"} 
                            item={["Sim", "Não"]} 
                            placeholder="escolhe aqui..."
                            width= "40%"
                            onChange={e => setMetaEscopo(e.target.value === "Sim" ? true : false)}
                            // spaceLeft
                        />
                        {metaEscopo &&
                            <ContainerAreaInput style={{display: "flex"}}>
                                <WrapperAreaInput>
                                    {list.map(item => (
                                        <ContentAreaInput key={item}>
                                            <SelectArea 
                                                // title={"Sua empresa já tem alguma meta de redução para o escopo"} 
                                                item={escopos} 
                                                placeholder="escolhe escopo..."
                                                width= "50%"
                                                value={data.company}
                                                onChange={e => setData({...data, company: e.target.value})}
                                            />
                                            <Input 
                                                // label={"Numero de funcionário no ano inventariado"}
                                                placeholder="Por intensidade"
                                                spanceLeft={true}
                                                type="numeric"
                                                // width={"100%"}
                                                fontSize={12}
                                                value={data.company}
                                                onChange={e => setData({...data, company: e.target.value})}
                                            />
                                            <Input 
                                                // label={"Numero de funcionário no ano inventariado"}
                                                placeholder="Por absoluta"
                                                spanceLeft={true}
                                                type="numeric"
                                                fontSize={12}
                                                value={data.company}
                                                onChange={e => setData({...data, company: e.target.value})}
                                                // width={"100%"}
                                            />
                                        </ContentAreaInput>
                                    ))}
                                </WrapperAreaInput>
                                <MoreItems onClickLess={handlLessTable} onClickMore={handleMoreTable}  item={list} />
                            </ContainerAreaInput>
                        }
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Descrição de indicadores de emissão de GEE para as atividades da organização."}
                            placeholder={`Por exemplo, tCO2e/produtos fabricados.`}
                            type="text"
                            value={data.desc_indicadores_emissao_gee}
                            onChange={e => setData({...data, desc_indicadores_emissao_gee: e.target.value})}
                        />
                        <Input 
                            label={"Descrição de estratégias e projetos para a gestão de emissões de GEE."}
                            placeholder=""
                            spanceLeft={true}
                            // type="numeric" 
                            value={data.descricao_estrategias_gestao_emissoes_gee}
                            onChange={e => setData({...data, descricao_estrategias_gestao_emissoes_gee: e.target.value})}  
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Informações sobre contratos com clientes e fornecedores que incluam cláusulas vinculadas à elaboração de inventários de GEE e/ou ao envio de informações relacionadas."}
                            placeholder={`digite aqui...`}
                            type="text"
                            value={data.informacoes_contratos_clientes}
                            onChange={e => setData({...data, informacoes_contratos_clientes: e.target.value})}
                        />
                        <Input 
                            label={"Informações sobre incertezas, exclusões de fontes de dados e outras características da elaboração do inventário."}
                            placeholder=""
                            spanceLeft={true}
                            // type="numeric" 
                            value={data.informacoes_incertezas}
                            onChange={e => setData({...data, informacoes_incertezas: e.target.value})}  
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Descrição sobre ações internas para melhoria da qualidade do inventário de GEE. "}
                            placeholder={`digite aqui...`}
                            type="text"
                            value={data.descricao_acoes_internas}
                            onChange={e => setData({...data, descricao_acoes_internas: e.target.value})}
                        />
                        <Input 
                            label={"Informações sobre a compra de energia elétrica oriunda de fonte renovável."}
                            placeholder=""
                            spanceLeft={true}
                            // type="numeric"
                            value={data.informacoes_compra_energia_eletrica}
                            onChange={e => setData({...data, informacoes_compra_energia_eletrica: e.target.value})}   
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Informações sobre autoprodução de energia oriunda de fonte renovável para consumo próprio."}
                            placeholder={`digite aqui...`}
                            type="text"
                            value={data.info_autoprod_renovavel}
                            onChange={e => setData({...data, info_autoprod_renovavel: e.target.value})}
                        />
                        <Input 
                            label={"Informações sobre o estoque de carbono, em toneladas, de sua organização em 31 de dezembro do ano inventariado."}
                            placeholder=""
                            spanceLeft={true}
                            // type="numeric"
                            value={data.info_estoque_carb_ton}
                            onChange={e => setData({...data, info_estoque_carb_ton: e.target.value})}   
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Compensação de emissões"}
                            placeholder={`digite aqui...`}
                            type="text"
                            value={data.compensacao_emissoes}
                            onChange={e => setData({...data, compensacao_emissoes: e.target.value})}
                        />
                        <Input 
                            label={"A organização possui projetos de compensação de emissões?"}
                            placeholder=""
                            spanceLeft={true}
                            // type="numeric"
                            value={data.organizacao_comp_emissoes}
                            onChange={e => setData({...data, organizacao_comp_emissoes: e.target.value})}   
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Reduções de emissões"}
                            placeholder={`digite aqui...`}
                            type="text"
                            value={data.reducoes_emissoes}
                            onChange={e => setData({...data, reducoes_emissoes: e.target.value})}
                        />
                        <Input 
                            label={"A organização possui projetos de redução de emissões?"}
                            placeholder=""
                            spanceLeft={true}
                            // type="numeric"
                            value={data.organizacao_proj_red_emissoes}
                            onChange={e => setData({...data, organizacao_proj_red_emissoes: e.target.value})}   
                        />
                    </AreaInput>
                </Form>
            </Fragment>
        )}
        <ConexioArea skip={skip}>
            {skip && <TextSkip onClick={() => navigate('/')}> Ou ignore esta etapa por enquanto. </TextSkip>}
            <Button aria-disabled={loading ? true : false} onClick={handleSubmit}> 
                {loading ? "Carregando..." : "Continuar "} 
                &#8674;
            </Button>
        </ConexioArea>
    </Fragment>
  )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    /* max-height: 600px; */
    /* justify-content: space-between; */
    /* height: 200px; */
    overflow-y: auto;
    overflow-x: hidden;
`
const AreaInput = styled.form`
    display: ${({NoFlex}) => NoFlex ? "block" : "flex"};
    width: 600px;
    margin-right: 10px;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const ContentAreaInput = styled.div`
    display: flex;
    width: 100%;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const WrapperAreaInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
const ConexioArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${({skip}) => skip ? "space-between" : "flex-end"};
    align-items: flex-end;
    margin-top: 10px;
`

const TextSkip = styled.span`
    font-size: 12px;
    cursor: pointer;
    
    &:hover{
        text-decoration: underline;
    }
`

const InputFile = styled.input`
    display: flex;
    width: 600px;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const Title = styled.div`
    font-weight: 600;
    color: ${admin.dark};
    display: flex;
    padding: 5px;
    font-size: ${({size}) => size ?? "14"}px;
    /* margin-bottom: px; */
`
const Button = styled.div`
    cursor: pointer;
    padding: 5px 20px;
    background-color: ${admin.verde};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    border-radius: 20px;
    font-weight: 600;

    &:hover {
        opacity: 0.7;
    }
    &:active {
        opacity: 1;
    }
`