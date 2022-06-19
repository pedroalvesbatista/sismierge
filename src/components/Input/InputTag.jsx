import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import { admin, second } from '../../constants/tailwind/colors'

function InputTag({ label, items, spanceLeft, spanceRight, placeholder }) {
    const [data, setData] = useState([])
    const [value, setValue] = useState("")

    const handleOnchange = (e) => {
        setValue(e.target.value)
        // console.log(e.onkeyup);
    }

    const handleDelete = (item) => {
        setData(data.filter(i => i !== item))
    }

    const handleKey = (e) => {
        if (value.length > 0) {
            if (e.key === "Enter") {
                setData([...data, value])
                setValue("")
                items(data)
            }
        }
    }
    
    useEffect(() => {
        if (data) {
            items(data)
        }
    }, [data])
    

  return (
    <Area spanceLeft={spanceLeft} spanceRight={spanceRight}>
        <Label> {label} (tecla enter para add)</Label>
        <AreaInput>
            {data?.map((item, index) => (
                <AreaSelected onClick={() => handleDelete(item)} key={index}>
                    <Text>{item}
                        <IconClose />
                    </Text>
                </AreaSelected>
            ))}
            <InputEntry 
                value={value}
                onKeyDown={handleKey}
                onChange={handleOnchange}
            />
        </AreaInput>
    </Area>
  )
}

const Area= styled.div`
    width: 290px;
    height: 100%;
    /* flex: 1; */
    margin: 8px 0px;
    display: flex;
    flex-direction: column;
    margin-left: ${({spanceLeft}) => spanceLeft ? '20px' : 'none'};
    margin-right: ${({spanceRight}) => spanceRight ? '20px' : 'none'};
    
`
const AreaInput= styled.div`
    width: 100%;
    border: 2px solid ${admin.cinza};
    border-radius: 5px;
    height: 100%;
    
    padding: 8px 6px;
    display: flex;
    flex-wrap: wrap;
    /* overflow-x: auto;
    overflow-y: hidden; */

    &::-webkit-scrollbar{
        /* width: 10px; */
        height: 5px;
    }
    &::-webkit-scrollbar-thumb {
    background-color: ${admin.dark}79;
    border-radius: 20px;
}
`
const AreaSelected= styled.div`
    /* padding: 2px; */
    display: flex;
    align-items: center;
    /* font-size: 14px; */
    flex-wrap: nowrap;
    margin-right: 5px;
    margin-bottom: 5px;
    flex: none;
    
`
const Placeholder = styled.span`
    font-size: 10px;
    color: ${admin.cinza};
`
const Text= styled.div`
    padding: 2px;
    background-color: ${admin.verde}28;
    display: flex;
    align-items: center;
    font-size: 12px;
    border-radius: 5px;
    font-weight: 500;
    flex-wrap: nowrap;
    
`
const IconClose= styled(IoMdClose)`
    color: ${admin.verde};
    margin-left: 5px;
    font-size: 10px;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }
    &:active{
        opacity: 1;
    }
`

const Label= styled.span`
    /* margin-bottom: 6px; */
    font-weight: 600;
    color: ${admin.dark};
    display: flex;
    padding: 5px;
    font-size: ${({size}) => size ?? "14"}px;
`

const InputEntry = styled.input`
    border-radius: 5px;
    width: 100%;
    height: 100%;
    outline: none;
    font-size: ${({size}) => size ?? "14"}px;;
    border: none;
    display: ${({isFile}) => isFile ? 'none' : 'block'};
    margin-left: 4px;
`

export default InputTag