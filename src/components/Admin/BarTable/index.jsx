import React from 'react'
import styled from 'styled-components'
import { SiDatabricks } from 'react-icons/si'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { admin } from '../../../constants/tailwind/colors'
import { useSelector } from 'react-redux'

function BarTable({ item, header }) {
    const { colaboradors, loading } = useSelector(state => state.colaborador)
    console.log(colaboradors);
  return (
    <Area>
        <TableArea>
            {header && header?.map((i, key) => (
                <Item key={key}>{i.toUpperCase()}</Item>
            ))}
        </TableArea>
        {colaboradors?.length > 0 ? colaboradors.map((i, key) => (
            <TableArea>
                <Item> {i.username} </Item>
                <Item> {i.email} </Item>
                <Item> {i.colaborador} </Item>
                <Item> {i.confirmed ? "Sim" : "Não"} </Item>
            </TableArea>
        ))
            
        : 
            <NotCOntentArea>
                {/* {loading ?
                    <div>Carregando...</div>
                    : <> */}
                        <IconDoc />
                        <Text>Nenhum conteúdo encontrado</Text>
                        <Button>
                            <IconPlus />
                            Adicionar empresa
                        </Button>
                    {/* </>
                } */}
            </NotCOntentArea>
        }
    </Area>
  )
}

const Area = styled.div`
    /* padding: 20px 0px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const TableArea = styled.div`
    padding: 20px 0px;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    justify-content: space-between;
`
const NotCOntentArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 300px;
`
const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    flex: 1;
`
const IconDoc = styled(SiDatabricks)`
  color: ${admin.verde};
  font-size: 70px;
`
const Text = styled.span`
  display: flex;
  color: #5b5656;
  margin-top: 10px;
  font-weight: 600;
`
const IconPlus = styled(BsPlusCircleDotted)`
  color: ${admin.cinza};
  font-size: 20px;
  margin-right: 10px;
`
const Button = styled.div`
  /* width: 200px; */
  /* height: 40px; */
  background-color: ${admin.verde};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 0px 5px 1px #15151533;
  color: white;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`

export default BarTable