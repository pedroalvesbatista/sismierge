import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { admin } from '../../constants/tailwind/colors'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { colaboradorService } from '../../services'

function Tab3({ openModal }) {
  const titles= ["nome do usuário", "Email", "Função", "Confirmado", "Status"]
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const getColaboradors = () => {
    setLoading(true)
    colaboradorService.getColaboradors()
        .then(res => {
            setLoading(false)
            setData(res.data)
        })
        .catch(err => {
            console.log(err);
        })
  }

  const handelModal = () => {
    openModal({
      state: true,
      type: 'Adicionar unidade'
    })
  }

  useEffect(() => {
    getColaboradors()
  }, [])

  return (
    <Area>
      <ButtonArea>
        <Button onClick={handelModal}>
          <IconPlus />
          <Text>Adicionar unidade</Text>
        </Button>
      </ButtonArea>
      <CardArea>
        <BarTable title='unidade' tab={3} onClick={handelModal} item={data} loading={false} header={titles} />
      </CardArea>
    </Area>
  )
}

const Area = styled.div`
  margin-top: 20px;
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
  cursor: pointer;
  box-shadow: 0px 0px 5px 1px #15151533;

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

export default Tab3