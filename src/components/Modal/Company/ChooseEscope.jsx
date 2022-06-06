import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { admin } from '../../../constants/tailwind/colors'
import { IoMdClose } from 'react-icons/io'
import { sheetActions } from '../../../actions'

export const ChooseEscopo = () => {
    const dispatch = useDispatch()
    const { dataEscopo, escopoSheetData } = useSelector(state => state.sheet)

    const [selected, setSelected] = useState([])
    const [selectedOptions, setSelectedOptions] = useState([])
    const [data, setData] = useState([])
    const [dataFinal, setDataFinal] = useState([])
    const [setorAtividade, setSetorAtividade] = useState(["Energia", "Manufatura ou Construção", "Comercial ou Institucional", "Agricultura, Florestal ou Pesca"])

    const [indexEscopo, setIndexEscopo] = useState([])
  
    const handleSelect = (item, index) => {
        // setIndexEscopo(item);

        if (selected.filter(i => i === item.id).length > 0) {
            const newData = data.filter(i => i.id !== item.id)
            const newSelected = selected.filter(i => i !== item.id)

            setData(newData)
            setSelected(newSelected)

        }else {
            setData([...data, item])
            setSelected([...selected, item.id])
        }
        
    }

    function handleSelected(index) {
        return selected?.filter(i => i === (index + 1)).length > 0  ? true : false
    }
    function handleIsSelectOption(id) {
        return selectedOptions?.filter(i => i === id).length > 0  ? false : true
    }
    
    function handleSelectedOption(spreendOption, dataItem) {

        if (selectedOptions?.filter(item => item === spreendOption.sheetId).length > 0) {
            const newData= selectedOptions.filter(i => i !== spreendOption.sheetId);
            const newIndex = indexEscopo.filter(i => i !== spreendOption.sheetId)
            

            setSelectedOptions(newData)
            setIndexEscopo(newIndex);
        }else {
            setSelectedOptions([...selectedOptions, spreendOption.sheetId])
            setIndexEscopo([...indexEscopo, spreendOption.sheetId])
            
        }
    }

    useEffect(() => {

        if (dataFinal) {
            dispatch(sheetActions.setDataEscopo(dataFinal))
        }

    }, [dataFinal])

    const handleSubmit = () => {
        // const escop = 
        setDataFinal([...dataFinal, selected, selectedOptions])
    }

    // console.log(escopoSheetData);
    
  

  return (
    <Area>
        {escopoSheetData.map((item, index) => (
            <Wrapper selected={selected.filter(i => i === (index + 1)).length > 0  ? true : false}>
                <Container 
                    selected={selected.filter(i => i === (index + 1)).length > 0  ? true : false} 
                    onClick={() => handleSelect(item, index)} 
                    key={index}
                >
                    <Circle 
                        selected={selected.filter(i => i === (index + 1)).length > 0  ? true : false} 
                    />  
                        <Title color={selected.filter(i => i === (index + 1)).length > 0 && admin.verde+69}> {item.type} </Title>
                    
                </Container>
                {handleSelected(index) && "Escolhe os opcões abaixo de cada escopo"}
                {handleSelected(index) &&
                    <AreaSelected>
                        {item.items.map((option, key) => (
                            <Text 
                                onClick={() => handleSelectedOption(option, item)} 
                                key={key} 
                                selected={handleIsSelectOption(option.sheetId)}
                            >
                                {option.title}
                                {/* <IconClose /> */}
                                {/* {key === 0 &&
                                    <>
                                        Escolhe os setor de atividade abaixo
                                        <AreaSelected>
                                            <
                                        </AreaSelected>
                                    </>
                                } */}
                            </Text>
                        ))}
                    </AreaSelected>
                }
            </Wrapper>
        ))}
        <ConexioArea>
            <Button onClick={handleSubmit}>
                Salvar
            </Button>
        </ConexioArea>
    </Area>
  )
}

const Area = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    margin-top: 10px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid ${admin.cinza};
    padding: 8px;
    background-color: ${({selected}) => selected ? admin.dark+"1d" : "none"};
`
const Container = styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    width: 100%;
    /* background-color: ${({selected}) => selected ? admin.dark+16 : "none"}; */
    cursor: pointer;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const Circle = styled.span`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: ${({selected}) => selected ? admin.verde+69 : "none"};
    border: 2px solid ${({selected}) => !selected ? admin.verde+69 : "none"};
    margin-right: 10px;
`
const Title = styled.span`
    font-size: ${({size}) => size ?? "20px"};
    background-color: ${({selected}) => selected ? admin.verde : "none"};
    color: ${({color}) => color ?? "#8c8a8a"};
    font-weight: ${({fontWeight}) => fontWeight ?? "bold"};
`

export const Text= styled.div`
    padding: 2px 5px;
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
    margin-right: 5px;
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

export const AreaSelected= styled.div`
    /* padding: 2px; */
    display: flex;
    align-items: center;
    /* font-size: 14px; */
    flex-wrap: wrap;
    flex: none;  
    padding: 8px;
`
const IconClose= styled(IoMdClose)`
    /* color: ${admin.verde}; */
    margin-left: 3px;
    font-size: 10px;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }
    &:active{
        opacity: 1;
    }
`

export const Button = styled.div`
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
export const ConexioArea = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
`