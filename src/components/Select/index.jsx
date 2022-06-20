import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { sheetActions } from '../../actions'
import { admin, primary, second } from '../../constants/tailwind/colors'

function SelectArea({ value, type, onChange, item, title, modal=true, width, placeholder, spaceLeft, spanceTop, onClick, isMultiple }) {
    const dispatch = useDispatch()
    const [dataFinal, setDataFinal] = useState([])
    const [openSetor, setOpenSetor] = useState(false)
    const [exemplo, setexemplo] = useState([])
    const [data, setData] = useState([])
    const [selectedOption, setSelectedOption] = useState([])
    const [selectSetor, setSelectSetor] = useState([])
    const [indexId, setIndexId] = useState()
    const [setorAtividade, setSetorAtividade] = useState(["Energia", "Manufatura ou Construção", "Comercial ou Institucional", "Agricultura, Florestal ou Pesca"])


    function handleIsSelectOption(id) {
        return selectedOption?.filter(i => i.sheetId === id).length > 0  ? true : false
    }
    function handleIsSelectSetor(item) {
        return selectSetor?.filter(i => i === item).length > 0  ? true : false
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

    const handleOnchageEscopo = (e) => {
        const newList= item.filter(i => i.type === e.target.value)
        setIndexId(newList[0].id)
        if (selectedOption) {
            setexemplo([...exemplo, ...dataFinal])
        }
        setData([...data, ...newList])
    }

    useEffect(() => {
        const ex1 = selectedOption.filter(i => i.index === 1)
        const ex2 = selectedOption.filter(i => i.index === 2)
        const ex3 = selectedOption.filter(i => i.index === 3)

        setDataFinal([
            {
                id: 1,
                type: "Escopo 1",
                items: ex1
            },
            {
                id: 2,
                type: "Escopo 2",
                items: ex2
            },
            {
                id: 3,
                type: "Escopo 3",
                items: ex3
            }
        ])

    }, [indexId, selectedOption])

    

    useEffect(() => {
        selectedOption.filter(i => i.sheetId !== "1093763195").length > 0 ? setOpenSetor(true) : setOpenSetor(false)
        dispatch(sheetActions.setDataEscopo([dataFinal, selectSetor]))
    }, [selectedOption, dataFinal, selectSetor])
    
    

    // console.log(selectSetor);

  return (
    <Area onClick={onClick} spanceTop={spanceTop} spaceLeft={spaceLeft} width={width}>
        <Label>{title}</Label>
        <Container
            value={type !== "collections" && value} 
            onChange={type === "collections" ? handleOnchageEscopo : onChange}
            modal= {modal}
        >
            <option style={{color: primary.cinza}} > {placeholder} </option>
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
            ))}
        </Container>
        {isMultiple && data?.map((item, index) => (
                <>
                    {item.type}
                    <AreaSelected>
                        {item?.items?.map((option, key) => (
                            <>
                                {/* <AreaSelected> */}
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
                                {/* </AreaSelected> */}
                            </>
                        ))}
                    </AreaSelected>
                </>
            ))
        }
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

export const Container = styled.select`
    width: ${({modal}) => modal ? "100%" : "none"};
    height: 40px;
    /* background-color: transparent; */
    border: 2px solid ${({modal}) => modal ? admin.cinza : `${primary.verde}`};
    border-radius: ${({modal}) => modal ? "5" : "10"}px;
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
    border: 2px solid ${admin.verde};
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
    align-items: center;
    /* font-size: 14px; */
    flex-wrap: wrap;
    flex: none;  
    padding: 8px;
`
export const Text= styled.div`
    padding: ${({selected}) => selected ? "5px" : "2px 5px"};
    /* padding-left: 5px; */
    background-color: ${({selected}) => selected ? admin.verde : "none"};
    border: 2px solid ${({selected}) => selected ? "none" : admin.cinza};
    display: flex;
    align-items: center;
    font-size: 12px;
    border-radius: 5px;
    font-weight: 500;
    flex: none;
    margin-bottom: 5px;
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

export default SelectArea