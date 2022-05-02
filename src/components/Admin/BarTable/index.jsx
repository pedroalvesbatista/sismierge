import React from 'react'
import styled from 'styled-components'
import { SiDatabricks } from 'react-icons/si'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { admin } from '../../../constants/tailwind/colors'
import { ButtonAdd } from '../../Buttons'

function BarTable({addButtonTop=true, item, header, loading, tab, title="empresa", onClick}) {

  return (
    <Area>
        {addButtonTop && (
            <ButtonArea>
                <ButtonAdd title={title} onClick={onClick}/>
            </ButtonArea>
        )}
        <Container>
            <Content>
                <table>
                    <thead>
                        <tr>
                            <TableArea>
                                {header && header?.map((i, key) => (
                                    <Item title={true} key={key}>{i.toUpperCase()}</Item>
                                ))}
                            </TableArea>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                            loading ?
                                <NotCOntentArea>
                                    <div>Carregando...</div>
                                </NotCOntentArea>
                                :
                                item?.length > 0 ? item.slice(0, 10).map((i, key) => (
                                    <TableArea key={key}>
                                        <Item>  { i.username } </Item>
                                        <Item>  { i.email } </Item>
                                        <Item>  { i.type } </Item>
                                        <Item> {i.confirmed ? "Sim" : "Não"} </Item>
                                        <Item>  </Item>
                                    </TableArea>
                                ))
                        
                                : 
                                    <NotCOntentArea>
                                        <IconDoc />
                                        <Text>Nenhum conteúdo encontrado</Text>
                                        <ButtonAdd title={title} onClick={onClick}/>
                                    </NotCOntentArea>
                            }
                        </tr>
                    </tbody>
                </table>
            </Content>
            
        </Container>
    </Area>
  )
}

const Area = styled.div`
  width: 100%;
`
const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  /* height: 200px; */
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
  padding: 0px 30px;
`
const Content = styled.div`
    /* padding: 20px 0px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10%;
`
const TableArea = styled.th`
    padding: 20px 0px;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    justify-content: center;
    align-items: center;
    
`
const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
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
    font-weight: ${({title}) => title ? '600' : '400'};
    flex: 1;
    /* background-color: red; */
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

export default BarTable