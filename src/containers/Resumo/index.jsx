import React, {  useState } from 'react'
import { escopo, inicial } from '../../constants/app/'
import { Container, Ul, Li } from "../Admin/../../components/Tabs/styles";

export const Resumo = () => {
  const [loading, setLoading] = useState(true)

  return (
    < div className="d-flex flex-column justify-content-center align-items-center w-100">
      {!loading ? 'Carregando...'
      : <>
          <Container>
           <Ul>
              <Li active={true}>Escopo 1</Li>
            </Ul>
            <ul className='d-flex flex-column m-3 justify-content-center align-items-center'>
          <li>Combustão móvel - 01 veículo Ford ano 2014, abastecido com gasolina</li>
          <li>Dados de entrada: Planilha interna da empresa com a Km mensal rodada pelo veículo</li>
          <li>Quem, até quando e status (concluido, em andamento, não inicado)</li>
        </ul>
       </Container>
       <Container> 
          <Ul>
              <Li active={true}>Escopo 2</Li>
            </Ul>
            <ul className='d-flex flex-column m-3 justify-content-center align-items-center'>
          <li>Abordagem baseada na localização</li>
          <li>Preenchimento mensal de energia elétrica</li>
          <li>Dado de entrada: Contas mensais de energia elétrica</li>
          <li>Quem, até quando e status (concluido, em andamento, não inicado)</li>
        </ul>
       </Container>
       <Container>
           <Ul>
              <Li active={true}>Escopo 3</Li>
            </Ul>
            <ul className='d-flex flex-column m-3 justify-content-center align-items-center'>
          <li>Resíduos Sólidos</li>
          <li>Dados de entrada: Notas Fiscais</li>
          <li>Quem, até quando e status (concluido, em andamento, não inicado)</li>
          <li>Clique aqui para começar a relatar! (volta para o painel)</li>
          <li>Clique aqui para enviar este resumo por e-mail ou whatsapp</li>
          <li>Clique aqui para imprimir o seu resumo</li>
        </ul>
       </Container>
           
          
      </>  
    }
     </ div>
  )
}


