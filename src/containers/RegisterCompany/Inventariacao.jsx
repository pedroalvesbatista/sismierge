import React, { Fragment, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { LoadingAnimation } from '../../components/lottie'
import Input from '../../components/Input'
import { companyActions, othersActions } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import SelectArea from '../../components/Select'
import MoreItems from '../../components/Modal/Company/MoreItems'
import { admin } from '../../constants/tailwind/colors'
import { Text } from './styles'
import { companyConstants } from '../../constants/redux'
import { initialData, initialMetaReducao, initialProduct } from './initialState'

export const Inventariacao = ({skip, height}) => {
    const dispatch = useDispatch()
    const { companies, loadingCreateInventory, sucessCreateInventory } = useSelector(state => state.company)
    const navigate= useNavigate()
    const [valueProduct, setValueProduct] = useState("")
    const [valueMetaReducao, setValueMetaReducao] = useState("")
    const [produtos, setProdutos] = useState(initialProduct)
    const [metaReducao, setMetaReducao] = useState(initialMetaReducao)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({...initialData, company: companies?.id})
    const [metaEscopo, setMetaEscopo] = useState(false)
    const [verificationTerceiros, setVerificationTerceiros] = useState({status: false, data: [1]})

    const refProduct = useRef(null)
    const refEscopo = useRef(null)

    const listVerifempresa= [
        "Advanced Waste Management Systems,Inc","ABNT-Associação Brasileira de Normas Técnicas","ABS", "ABS QE(ABS Quality Evaluations,Inc)", "ACR", "AENOR"
    ]

    const handleSubmit= (e) => {
        e.preventDefault()
        dispatch(companyActions.createInventory(data))
    }

  useEffect(() => {
    if (sucessCreateInventory) {
        navigate('/')
        dispatch(othersActions.closeModal())
        dispatch({type: companyConstants.CLEAR_INVENTORY})
        setMetaEscopo(false)
        setProdutos(initialProduct)
        setMetaReducao(initialMetaReducao)
        setData({...initialData, company: companies.id})
    }
  }, [sucessCreateInventory])
  

    const handleTable= (item) => {
        const { func, index, type } = item

        if (func === "more") {
            switch (type) {
                case "escopo":
                    setMetaReducao([...metaReducao, {type: null, absoluta: null, intensidade: null, index}])
                
                case "produto":
                    setProdutos([...produtos, {name: null, unidade: null, quantidade: null, index}])
                
                case "verification":
                    setVerificationTerceiros({...verificationTerceiros, data: [...verificationTerceiros.data, [index + 1]]})
            
                default:
                    return false;
            }
        } else {
            if (type === "escopo") {
                setMetaReducao(metaReducao.splice(0, metaReducao.length - 1))
            } else {
                setProdutos(produtos.splice(0, produtos.length - 1)) 
            }
        }
        switch (type) {
            case "escopo":
                setMetaReducao(metaReducao.splice(0, metaReducao.length - 1))
            
            case "produto":
                setProdutos(produtos.splice(0, produtos.length - 1))
            
            case "verification":
                setVerificationTerceiros({...verificationTerceiros, data: verificationTerceiros.data.splice(0, verificationTerceiros.data.length - 1)})
        
            default:
                return false;
        }
    }

    useEffect(() => {
        const pdct = []
        const metaReduc = []
        const productArray = refProduct?.current?.children
        const metaReducaoArray = refEscopo?.current?.children

        for (let index = 0; index < metaReducaoArray?.length; index++) {
            const typeEscopo= metaReducaoArray[index].children[0]?.children[1].value
            const absoluta = metaReducaoArray[index].children[1]?.children[1].children[0].value
            const intensidade = metaReducaoArray[index].children[2]?.children[1].children[0].value
            
            metaReduc.push({type: typeEscopo, absoluta, intensidade, id: index + 1})
        }

        for (let index = 0; index < productArray?.length; index++) {
            const produto= productArray[index].children[0]?.children[1].children[0].value
            const quantidade= parseInt(productArray[index].children[1]?.children[1].children[0].value)
            const unidade= productArray[index].children[2]?.children[1].value
            pdct.push({produto, unidade, quantidade, id: index + 1})
        }

        const meta_reducao = metaReduc?.filter(i => i?.type?.length > 0)
        const producao_total_ano = pdct?.filter(i => i?.produto?.length > 0 && i?.unidade?.length > 0)

        setData({...data, meta_reducao, producao_total_ano})

        // console.log(data.meta_reducao);

    }, [valueProduct, valueMetaReducao])

    
    

  return (
    <Fragment>
        <Text size={18}>
            Inicie o preenchimento do Formulário de Inventariação da sua empresa!
        </Text>
        {loading ? (
            <LoadingAnimation size={150}/>
        ): (
            <Fragment>
                
                <Form height={height} onSubmit={handleSubmit}>
                    <AreaInput>
                        <Input 
                            label={"Ano inventariado"}
                            placeholder={`digite aqui...`}
                            // type="date"
                            mask="ano"
                            width={"20%"}
                            value={data.ano}
                            onChange={e => setData({...data, ano: e.target.value})}
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input 
                            label={"Responsável pela elaboração do inventário"}
                            placeholder="digite aqui..."
                            // value={data.funcionario}
                            // onChange={e => setData({...data, funcionario: e.target.value})}
                        />
                        <Input 
                            label={"E-mail do responsável"}
                            placeholder="digite aqui..."
                            spanceLeft={true}
                            type="email"
                            // value={data.funcionario}
                            // onChange={e => setData({...data, funcionario: e.target.value})}
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input 
                            label={"Motivo pelo qual decidiu elaborar o IGEE"}
                            placeholder="Digite aqui"
                            type="textArea"
                            value={data.motivo}
                            onChange={e => setData({...data, motivo: e.target.value})}
                        />
                    </AreaInput>

                    <AreaInput>
                        <SelectArea 
                            title={"O inventário será verificado por terceira parte"} 
                            item={["Sim", "Não"]} 
                            // width= "100%"
                            placeholder="Escolhe aqui..."
                            value={verificationTerceiros.status === true ? "Sim" : "Não"}
                            onChange={e => setVerificationTerceiros({...verificationTerceiros, status: e.target.value === "Sim" ? true : false})}

                        />
                        <SelectArea 
                            title={"Limites Organizacionais"} 
                            item={["Matriz", "Controlada", "Unidade"]} 
                            placeholder="Escolhe aqui..."
                            // width= "100%"
                            spaceLeft
                            value={data.limite_organizacionais}
                            onChange={e => setData({...data, limite_organizacionais: e.target.value})}
                        />
                    </AreaInput>

                    {verificationTerceiros.status &&
                            <ContainerAreaInput style={{display: "flex"}}>
                                <WrapperAreaInput ref={refEscopo}>
                                    {verificationTerceiros?.data?.map((item, index) => (
                                        <ContentAreaInput key={index}>
                                            <SelectArea 
                                                title={"Organismo verificadom"} 
                                                item={listVerifempresa} 
                                                placeholder="escolhe aqui..."
                                                mbLabel={20}
                                                // width= "50%"
                                                // onChange={e => setValueMetaReducao(e.target.value)}
                                            />
                                            <Input 
                                                label={"Responsável pela verificação"}
                                                placeholder="digite aqui..."
                                                spanceLeft={true}
                                                // type="numeric"
                                                // fontSize={12}
                                                // onChange={e => setValueMetaReducao(e.target.value)}
                                                help="A meta absoluta limita explicitamente uma ação a
                                                algum número ou resultado. Por exemplo: limitar a
                                                emissão de GEE a uma certa quantidade. Essa
                                                meta é importante para definir um limite total de
                                                emissões por uma organização. "
                                            />
                                            <SelectArea 
                                                title={"Nivel de confiança da verificação²"}
                                                placeholder="escolhe aqui..."
                                                spaceLeft
                                                item={["Razoável", "Limitado"]}
                                                help="Nível de confiança razoável: Grau mais alto de confiança.
                                                Nível de confiança limitado: Grau de confiança inferior em relação ao nível razoável. Menor
                                                ênfase no teste detalhado de dados e informações de GEE oferecidos para apoiar a declaração
                                                de GEE. Ambos permitirão que os inventários sejam qualificados como verificados."
                                                limiteTooltip
                                                // onChange={e => setValueMetaReducao(e.target.value)}
                                            />
                                        </ContentAreaInput>
                                    ))}
                                </WrapperAreaInput>
                                <MoreItems 
                                    onClickLess={(e) => handleTable({func: "less", index: verificationTerceiros.data.length, event: e, type: "verification"})} 
                                    onClickMore={(e) => handleTable({func: "more", index: verificationTerceiros.data.length, event: e, type: "verification"})}  
                                    item={verificationTerceiros.data} 
                                />
                            </ContainerAreaInput>
                        }

                    <AreaInput>
                        <SelectArea 
                            title={"Qual abordagem de consolidação foi utilizado no inventario?"} 
                            item={["Abordagem  de Controle operacional"]} 
                            placeholder="Escolhe aqui..."
                            width= "50%"
                            value={data.abordagem_consolidacao}
                            onChange={e => setData({...data, abordagem_consolidacao: e.target.value})}
                            help="Os limites organizacionais
                            abrangem obrigatoriamente o controle operacional e opcionalmente a participação societária. O
                            controle operacional contabiliza 100% das emissões das operações controladas pela instituição, sem
                            incluir operações em que haja apenas sua participação."

                        />
                        <Input 
                            label={"Numero de funcionário no ano inventariado"}
                            placeholder="ex: 10"
                            spanceLeft={true}
                            type="number"
                            value={data.funcionario}
                            onChange={e => setData({...data, funcionario: e.target.value})}
                        />
                    </AreaInput>
                    <AreaInput NoFlex={true}>
                        <Title>Produção total do ano inventariado (em unidades, kg, m, m², m³, etc.) por tipo de produto</Title>
                        <ContainerAreaInput style={{display: "flex"}}>
                            <WrapperAreaInput ref={refProduct}>
                                <AreaInput>
                                    {/* <Label>Produto</Label>
                                    <Label spanceLeft ={"130px"} >Unidade</Label> */}
                                </AreaInput>
                                {produtos.map((item, index) => (
                                    <ContentAreaInput key={index}>
                                        <Input
                                            label={"Produto"}
                                            placeholder="Ex: Carro"
                                            type="text"
                                            fontSize={12}
                                            width={"30%"}
                                            onChange={e => setValueProduct(e.target.value)}
                                        />
                                        <Input 
                                            label={"Quantidade"}
                                            placeholder="digite aqui..."
                                            spanceLeft
                                            type="number"
                                            width= "30%"
                                            fontSize={12}
                                            onChange={e => setValueProduct(e.target.value)}
                                        />
                                        <SelectArea 
                                            title={"Undade"} 
                                            item={["Unidades", "Kg", "Km", "m", "m²", "m³"]} 
                                            placeholder="Escolhe aqui..."
                                            spaceLeft
                                            width={"30%"}
                                            onChange={e => setValueProduct(e.target.value)}
                                        />
                                    </ContentAreaInput>
                                ))}
                            </WrapperAreaInput>
                            <MoreItems 
                                onClickLess={(e) => handleTable({func: "less", index: produtos.length, event: e})} 
                                onClickMore={(e) => handleTable({func: "more", index: produtos.length, event: e})}  
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
                                <WrapperAreaInput ref={refEscopo}>
                                    {metaReducao.map((item, index) => (
                                        <ContentAreaInput key={index}>
                                            <SelectArea 
                                                title={"Escopo"} 
                                                item={companies?.escopos?.map(i => [i.type])} 
                                                placeholder="escolhe escopo..."
                                                // width= "50%"
                                                onChange={e => setValueMetaReducao(e.target.value)}
                                                // type={"collections"}
                                            />
                                            <Input 
                                                label={"Intensidade"}
                                                placeholder="digite aqui..."
                                                spanceLeft={true}
                                                type="numeric"
                                                fontSize={12}
                                                onChange={e => setValueMetaReducao(e.target.value)}
                                                help="A meta absoluta limita explicitamente uma ação a
                                                algum número ou resultado. Por exemplo: limitar a
                                                emissão de GEE a uma certa quantidade. Essa
                                                meta é importante para definir um limite total de
                                                emissões por uma organização. "
                                            />
                                            <Input 
                                                label={"Absoluta"}
                                                placeholder="digite aqui..."
                                                spanceLeft={true}
                                                type="numeric"
                                                fontSize={12}
                                                onChange={e => setValueMetaReducao(e.target.value)}
                                                help="A meta por intensidade expressa um valor de um
                                                indicador por alguma unidade. Por exemplo:
                                                emissões de GEE por unidade de produto
                                                produzido. "
                                            />
                                        </ContentAreaInput>
                                    ))}
                                </WrapperAreaInput>
                                <MoreItems 
                                    onClickLess={(e) => handleTable({func: "less", index: metaReducao.length, event: e, type: "escopo"})} 
                                    onClickMore={(e) => handleTable({func: "more", index: metaReducao.length, event: e, type: "escopo"})}  
                                    item={metaReducao} 
                                />
                            </ContainerAreaInput>
                        }
                    </AreaInput>
                        
                    <AreaInput>
                        <Input 
                            label={"Descrição de estratégias e projetos para a gestão de emissões de GEE."}
                            placeholder="digite aqui..."
                            type="textArea" 
                            value={data.descricao_estrategias_gestao_emissoes_gee}
                            onChange={e => setData({...data, descricao_estrategias_gestao_emissoes_gee: e.target.value})}  
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input 
                            label={"Informações sobre contratos com clientes e fornecedores que incluam cláusulas vinculadas à elaboração de inventários de GEE e/ou ao envio de informações relacionadas."}
                            placeholder={`digite aqui...`}
                            type="textArea"
                            value={data.informacoes_contratos_clientes}
                            onChange={e => setData({...data, informacoes_contratos_clientes: e.target.value})}
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input 
                            label={"Informações sobre incertezas, exclusões de fontes de dados e outras características da elaboração do inventário."}
                            placeholder="digite aqui..."
                            type="textArea" 
                            value={data.informacoes_incertezas}
                            onChange={e => setData({...data, informacoes_incertezas: e.target.value})}  
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input 
                            label={"Descrição sobre ações internas para melhoria da qualidade do inventário de GEE. "}
                            placeholder={`digite aqui...`}
                            type="textArea"
                            value={data.descricao_acoes_internas}
                            onChange={e => setData({...data, descricao_acoes_internas: e.target.value})}
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input 
                            label={"Informações sobre a compra de energia elétrica oriunda de fonte renovável."}
                            placeholder="digite aqui..."
                            type="textArea"
                            value={data.informacoes_compra_energia_eletrica}
                            onChange={e => setData({...data, informacoes_compra_energia_eletrica: e.target.value})}   
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input 
                            label={"Informações sobre autoprodução de energia oriunda de fonte renovável para consumo próprio."}
                            placeholder={`digite aqui...`}
                            type="textArea"
                            value={data.info_autoprod_renovavel}
                            onChange={e => setData({...data, info_autoprod_renovavel: e.target.value})}
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input 
                            label={"Informações sobre o estoque de carbono, em toneladas, de sua organização em 31 de dezembro do ano inventariado."}
                            placeholder="digite aqui..."
                            type="textArea"
                            value={data.info_estoque_carb_ton}
                            onChange={e => setData({...data, info_estoque_carb_ton: e.target.value})}   
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input 
                            label={"A organização possui projetos de compensação de emissões?"}
                            placeholder="digite aqui..."
                            type="textArea"
                            value={data.organizacao_comp_emissoes}
                            onChange={e => setData({...data, organizacao_comp_emissoes: e.target.value})}   
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input 
                            label={"A organização possui projetos de redução de emissões?"}
                            placeholder="digite aqui..."
                            type="textArea"
                            value={data.organizacao_proj_red_emissoes}
                            onChange={e => setData({...data, organizacao_proj_red_emissoes: e.target.value})}   
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Outros gases de efeito estufa não contemplados pelo Protocolo de Quioto"}
                            placeholder="digite aqui..."
                            type="textArea"
                            // value={data.organizacao_proj_red_emissoes}
                            // onChange={e => setData({...data, organizacao_proj_red_emissoes: e.target.value})}   
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Outros gases de efeito estufa não contemplados pelo Protocolo de Quioto"}
                            placeholder="digite aqui..."
                            type="textArea"
                            // value={data.organizacao_proj_red_emissoes}
                            // onChange={e => setData({...data, organizacao_proj_red_emissoes: e.target.value})}   
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Outros gases de efeito estufa não contemplados pelo Protocolo de Quioto"}
                            placeholder="digite aqui..."
                            type="textArea"
                            // value={data.organizacao_proj_red_emissoes}
                            // onChange={e => setData({...data, organizacao_proj_red_emissoes: e.target.value})}   
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Métodose/ou ferramentas intersetoriais"}
                            placeholder="digite aqui..."
                            type="textArea"
                            // value={data.organizacao_proj_red_emissoes}
                            // onChange={e => setData({...data, organizacao_proj_red_emissoes: e.target.value})}   
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Métodose/ou ferramentas para setores específicos"}
                            placeholder="digite aqui..."
                            type="textArea"
                            // value={data.organizacao_proj_red_emissoes}
                            // onChange={e => setData({...data, organizacao_proj_red_emissoes: e.target.value})}   
                        />
                    </AreaInput>
                    <AreaInput>
                        <Input 
                            label={"Fatores de emissão"}
                            placeholder="digite aqui..."
                            type="textArea"
                            // value={data.organizacao_proj_red_emissoes}
                            // onChange={e => setData({...data, organizacao_proj_red_emissoes: e.target.value})}   
                        />
                    </AreaInput>
                </Form>
            </Fragment>
        )}
        <ConexioArea skip={skip}>
            {skip && <TextSkip onClick={() => navigate('/')}> Ou ignore esta etapa por enquanto. </TextSkip>}
            <Button aria-disabled={loadingCreateInventory ? true.toString() : false.toString()} onClick={handleSubmit}> 
                {loadingCreateInventory ? "Carregando..." : "Continuar "} 
                &#8674;
            </Button>
        </ConexioArea>
    </Fragment>
  )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 680px;
    margin-top: 10px;
    max-height: ${({height}) => height && "550px"};
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
    border-bottom: 1px solid ${admin.dark}79;
    margin-bottom: 20px;
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
const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: ${admin.dark}89;
    margin: 8px 0px;
    margin-top: ${({spanceTop}) => spanceTop ? spanceTop : '-0px'};
    flex: 1;
    margin-left: ${({spanceLeft}) => spanceLeft ? spanceLeft : '10px'};
    margin-right: ${({spanceRight}) => spanceRight ? '20px' : 'none'};
    width: ${({width}) => width ?? "none"};
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