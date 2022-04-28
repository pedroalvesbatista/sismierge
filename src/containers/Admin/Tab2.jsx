import React from 'react'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { admin } from '../../constants/tailwind/colors'
import { BsPlusCircleDotted } from 'react-icons/bs'

function Tab2() {
    const titles= ["nome do usuário", "Email", "Tipo", "Confirmado", "Status"]
  return (
    <Area>
      <ButtonArea>
        <Button>
          <IconPlus />
          <Text>Adicionar empresa</Text>
        </Button>
      </ButtonArea>
      <CardArea>
        <BarTable header={titles} />
      </CardArea>
    </Area>
  )
}

const Area = styled.div`
  margin-top: 30px;
  width: 100%;
  /* height: 200px; */
`
const CardArea = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
  padding: 0px 30px;
  margin-top: 30px;
`
const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
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
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`
const IconPlus = styled(BsPlusCircleDotted)`
  color: ${admin.cinza};
  font-size: 20px;
`
const Text = styled.span`
  display: flex;
  color: white;
  margin-left: 10px;
`

export default Tab2