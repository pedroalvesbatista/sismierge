import React from 'react'
import BarButton from '../../components/Others/BarButton'
import Chart from '../../components/Chart'
import VerticalChart from '../../components/Chart/VerticalChart'
import { 
  Area, 
  Left,
  Rigth,
  DashboardArea,
  Header,
  AreaChart,
  TextArea,
  GraphicArea,
  Title,
  BorderArea,
  AreaDash
} from './styles'

export const Indicadores = () => {
  const arr= [23, 47.3, 78, 10, 45, 70]
  return (
    <Area >
      <DashboardArea>
        <Left>
          <Header>
            Indicadores organizacionais
          </Header>
          <AreaChart>
            <TextArea>
              Eficiência total / unidade de negócio
            </TextArea>
            <Chart percent='43' />
            <TextArea>
              Percentual de estratégias de redução alcançadas
            </TextArea>
            <Chart percent='73' />
          </AreaChart>
        </Left>
        <Rigth>
          <Header>
            Total de reduções
          </Header>
          <AreaDash>
            <GraphicArea>
              <BorderArea>
                Mitigação
              </BorderArea>
              <TextArea>
                R$ / Tonelada reduzida <br/> (CO2e)
              </TextArea>
            </GraphicArea>
            <GraphicArea>
              {arr.map((item, index) => (
                <div>
                  <GraphicArea key={index}>
                    <VerticalChart  percent={item} />
                  </GraphicArea>
                  <Title> {item}t </Title>
                </div>
              ))}
            </GraphicArea>
          </AreaDash>
        </Rigth>
      </DashboardArea>
      <BarButton />
    </Area>
  )
}
