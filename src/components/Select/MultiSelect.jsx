import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { sheetActions } from '../../actions'
import { admin, primary, second } from '../../constants/tailwind/colors'

function MultiSelect({ value, type, onChange, item, title, modal=true, width, placeholder, spaceLeft, spanceTop, onClick, isMultiple }) {
    const dispatch = useDispatch()
    const [dataFinal, setDataFinal] = useState([])
    const [openSetor, setOpenSetor] = useState(false)
    const [exemplo, setexemplo] = useState([])
    const [data, setData] = useState([])
    const [selectedOption, setSelectedOption] = useState([])
    const [selectedEscopo, setSelectedEscopo] = useState([])
    const [selectSetor, setSelectSetor] = useState([])
    const [indexId, setIndexId] = useState()
    const [setorAtividade, setSetorAtividade] = useState(["Energia", "Manufatura ou Construção", "Comercial ou Institucional", "Agricultura, Florestal ou Pesca"])


    function handleIsEscopoOption(id) {
        return selectedEscopo?.filter(i => i.id === id).length > 0  ? true : false
    }
    function handleIsSelectOption(sheetId) {
        return selectedOption?.filter(i => i.sheetId === sheetId).length > 0  ? true : false
    }
    function handleIsSelectSetor(item) {
        return selectSetor?.filter(i => i === item).length > 0  ? true : false
    }

    function handleSelectedEscopo(escopo) {
        if (selectedEscopo.filter(i => i.id === escopo.id).length > 0) {
            const newData = selectedEscopo.filter(i => i.id !== escopo.id)

            setSelectedEscopo(newData)
            // console.log(newData);
        }else {
            setSelectedEscopo([...selectedEscopo, escopo])
        }
        
    }
    function handleSelectedOption(spreendOption, id) {
        if (selectedOption.filter(i => i.sheetId === spreendOption.sheetId).length > 0) {
            const newData = selectedOption.filter(i => i.sheetId !== spreendOption.sheetId)

            setSelectedOption(newData)
            // console.log(newData);
        }else {
            setSelectedOption([...selectedOption, spreendOption])
        }
        
    }
    function handleSelectedSetor(item) {
        if (selectSetor.filter(i => i === item).length > 0) {
            const newData = selectSetor.filter(i => i !== item)

            setSelectSetor(newData)
            // console.log(newData);
        }else {
            setSelectSetor([...selectSetor, item])
        }
        
    }

    const handleOnchageEscopo = (type) => {
        const newList= item.filter(i => i.type === type)
        handleSelectedEscopo(newList[0])
        setIndexId(newList[0].id)

        if (selectedOption) {
            setexemplo([...exemplo, ...dataFinal])
        }

        if (data.filter(i => i.type === type).length > 0) {
            let newEscopo = data.filter(i => i.type !== type)

            setData(newEscopo)
            setSelectedOption([])
            // console.log(newEscopo);
        }else {
            setData([...data, ...newList])
        }
    }

    useEffect(() => {
        const esc1 = selectedOption.filter(i => i.index === 1)
        const esc2 = selectedOption.filter(i => i.index === 2)
        const esc3 = selectedOption.filter(i => i.index === 3)

        setDataFinal([
            {
                id: 1,
                type: "Escopo 1",
                items: esc1
            },
            {
                id: 2,
                type: "Escopo 2",
                items: esc2
            },
            {
                id: 3,
                type: "Escopo 3",
                items: esc3
            }
        ])

    }, [indexId, selectedOption])
    

    

    useEffect(() => {
        console.log(selectedOption);
        selectedOption.filter(i => i.sheetId == "1093763195").length > 0 ? setOpenSetor(true) : setOpenSetor(false)
        dispatch(sheetActions.setDataEscopo([dataFinal, selectSetor]))
    }, [selectedOption, dataFinal, selectSetor, openSetor, data])
    
    


  return (
    <Area onClick={onClick} spanceTop={spanceTop} spaceLeft={spaceLeft} width={width}>
        <Label>{title}</Label>
        <Container modal= {modal}>
            <AreaSelected column={true}>
                {item?.map((i, index) => (
                    <>
                        <Text 
                            marginBottom={data.filter(data => data.id === i.id).length > 0 ? "0" : "15"}
                            size={14}
                            key={index}
                            selected={handleIsEscopoOption(i.id)}
                            onClick={() => handleOnchageEscopo(i.type)}
                        >
                            {i.type}
                        </Text>
                        
                        {data.filter(data => data.id === i.id).length > 0 &&
                            <AreaSelected margin="0px 0px 20px 0px">
                                {i.id === 1 && 
                                    data?.filter(i => i.id === 1)[0]?.items?.map(option => (
                                        <>
                                            <Text
                                                selected={handleIsSelectOption(option.sheetId)}
                                                onClick={() => handleSelectedOption(option, item.id)}
                                                second={true}
                                            >
                                                {option.title}
                                            </Text>
                                            {openSetor && option.sheetId === 1093763195 &&
                                                <SetorAtividadeArea>
                                                    Escolhe o setor de atividade:
                                                    <SetorAtividadeWrapper>
                                                        {setorAtividade.map(i => (
                                                        
                                                            <Text
                                                                onClick={() => handleSelectedSetor(i)}
                                                                selected={handleIsSelectSetor(i)}
                                                                second={true}
                                                            >
                                                                {i}
                                                            </Text>
                                                        
                                                        ))}
                                                    </SetorAtividadeWrapper>
                                                </SetorAtividadeArea>
                                            }
                                        </>
                                    ))
                                }
                                {i.id === 2 && 
                                    data?.filter(i => i.id === 2)[0]?.items?.map(option => (
                                        <Text
                                            selected={handleIsSelectOption(option.sheetId)}
                                            onClick={() => handleSelectedOption(option, item.id)}
                                            second={true}
                                        >
                                            {option.title}
                                        </Text>
                                    ))
                                }
                                {i?.id === 3 && 
                                    data?.filter(i => i?.id === 3)[0]?.items?.map(option => (
                                        <Text
                                            selected={handleIsSelectOption(option.sheetId)}
                                            onClick={() => handleSelectedOption(option, item.id)}
                                            second={true}
                                        >
                                            {option.title}
                                        </Text>
                                    ))
                                }
                            </AreaSelected>
                        }
                    </>
                ))}
            </AreaSelected>
            {/* <option style={{color: primary.cinza}} > {placeholder} </option>
            {item?.map((i, index) => (
                type === "collections" ? (
                    <Option value={i.type}>
                        {i.type}
                    </Option>
                ) : (
                    <Option value={i}>
                        {i}
                    </Option>
                )
            ))} */}
        </Container>
        {/* {isMultiple && data?.map((item, index) => (
                <>
                    {item.type}
                    <AreaSelected>
                        {item?.items?.map((option, key) => (
                            <>
                                    <Text
                                        selected={handleIsSelectOption(option.sheetId)}
                                        onClick={() => handleSelectedOption(option, item.id)}
                                    >
                                        {option.title}
                                    </Text>
                                    {key === 0 && openSetor && index === 0 &&
                                        <SetorAtividadeArea>
                                            Escolhe o setor de atividade:
                                            <SetorAtividadeWrapper>
                                                {setorAtividade.map(i => (
                                                
                                                    <Text
                                                        onClick={() => handleSelectedSetor(i)}
                                                        selected={handleIsSelectSetor(i)}
                                                    >
                                                        {i}
                                                    </Text>
                                                
                                                ))}
                                            </SetorAtividadeWrapper>
                                        </SetorAtividadeArea>
                                    }
                            </>
                        ))}
                    </AreaSelected>
                </>
            ))
        } */}
    </Area>
  )
}

const Area = styled.div`
    width: ${({width}) => width ?? "none"};
    margin-top: ${({spanceTop}) => spanceTop ? spanceTop : "10px"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: ${({spaceLeft}) => spaceLeft ? "20px" : "0px"};
`
const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: ${admin.dark};
`

export const Container = styled.div`
    width: ${({modal}) => modal ? "100%" : "none"};
    /* height: 40px; */
    /* background-color: transparent; */
    /* border: 2px solid ${({modal}) => modal ? admin.cinza : `${primary.verde}`}; */
    /* border-radius: ${({modal}) => modal ? "5" : "10"}px; */
    box-shadow: ${({modal}) => modal ? "none" : "5px 5px 20px -3px rgba(0,0,0,0.34)"};
    padding: 0px 10px;
    outline: none;
    margin: ${({modal}) => modal ? "5px 0px" : "10px 0px"};
    color: ${second.cinza+'99'};
    font-weight: ${({modal}) => modal ? "400" : "600"};
    font-size: ${({modal}) => modal ? "14px" : "none"};

    &:active{
        outline: none;
    }
    &:valid{
        color: #000;
    }
    &:invalid{
        color: ${second.cinza};
    }
    /* &:not(:checked){
        color: #000;
    } */
`
export const Option = styled.option`
    color: ${second.cinza};
`
export const SetorAtividadeArea= styled.div`
    /* padding: 2px; */
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    /* font-size: 14px; */
    flex-wrap: wrap;
    /* flex: none;   */
    padding: 8px;
    border: 2px solid ${admin.roxo};
    border-radius: 10px;
    margin: 5px 0px
`
const SetorAtividadeWrapper= styled.div`
    /* padding: 2px; */
    display: flex;
    align-items: center;
    /* font-size: 14px; */
    flex-wrap: wrap;
    flex: none;  
    /* padding: 8px; */
`

export const AreaSelected= styled.div`
    /* padding: 2px; */
    display: flex;
    align-items: ${({column}) => column ? "flex-start" : "center"};
    /* font-size: 14px; */
    flex-wrap: wrap;
    margin: ${({margin}) => margin ?? "none"};;
    flex: none;  
    padding: 8px;
    flex-direction: ${({column}) => column ? "column" : "row"};
`
export const Text= styled.div`
    padding: ${({selected}) => selected ? "5px" : "2px 5px"};
    /* padding-left: 5px; */
    background-color: ${({selected, second}) => selected ?  second ? admin.roxo : admin.verde : "none"};
    border: 2px solid ${({selected}) => selected ? "none" : admin.cinza};
    display: flex;
    align-items: center;
    font-size: ${({size}) => size ?? "12"}px;
    border-radius: 5px;
    font-weight: 500;
    flex: none;
    margin-bottom: ${({marginBottom}) => marginBottom ?? 5}px;
    margin-right: 10px;
    color: ${({selected}) => selected ? "#fff" : admin.dark+49};
    cursor: pointer;
    /* flex-wrap: nowrap; */

    &:hover{
        opacity: 0.7;
    }
    &:active{
        opacity: 1;
    }
    
`

export default MultiSelect