import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { AiOutlineFileDone } from 'react-icons/ai'

import { ConfettiAnimation } from '../../components/lottie'
import { authService } from '../../services'
import { 
  Text, 
} from './styles'
import { admin } from '../../constants/tailwind/colors'

export const Welcome = ({dataCompany, setPage}) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    toast.success("Conta criando com sucesso")
    // return <ConfettiAnimation />
  }, [])
  
  

  return (
    <Area>
      <ConfettiAnimation />
        <div>
          <CheckIcon />
        </div>
        <Text>Parabéns!</Text>
        <Text size={18} color={true} fontSize={400}>
          Tudo está pronto para podemos começar!
        </Text>
        
        <ConexioArea>
          <Button aria-disabled={loading ? true : false} onClick={setPage("welcome")}> 
              {loading ? "Carregando..." : "Começar!"} 
          </Button>
        </ConexioArea>
    </Area>
  )
}

const Area = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  justify-content: center;
  align-items: center;
  position: relative;
    /* height: 200px; */
`
const CheckIcon = styled(AiOutlineFileDone)`
  color: ${admin.verde};
  font-size: 110px;
`
const ConexioArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`
export const Button = styled.div`
  cursor: pointer;
  padding: 5px 40px;
  background-color: ${admin.verde};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  border-radius: 10px;
  font-weight: 400;

  &:hover {
      opacity: 0.7;
  }
  &:active {
      opacity: 1;
  }
`