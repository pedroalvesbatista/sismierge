import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { companyActions, sheetActions } from '../../actions'
import Routes from './Routes'
import {
    Area,
    StepArea,
    HeaderStep,
    ContainerStep,
    IconArea,
    IconCheck,
    TitleStep,
    Fio,
    Card,
    FooterCard
} from './styles'

export function StartUp() {
    const dispatch = useDispatch()
    const { sucessCreateCompany, sucessUpdateCompany, companies } = useSelector(state => state.company)
    const [page, setPage] = useState("organisation")
    const [activeStep, setActiveStep] = useState([0])
    const [prevStep, setPrevStep] = useState([])

    const step = ["Organização", "Informações da empresa", "Inventariação"]

    const handleActiveStep = (index) => {
        if (activeStep.filter(i => i === index).length > 0) {
            return true.toString()
        }
    }

    const handlePrev = (title) => {
        if (prevStep.filter(i => i === title).length > 0) {
            return true.toString()
        }
    }

    useEffect(() => {
        dispatch(companyActions.getCompanies())
      if (sucessCreateCompany) {
        setActiveStep([...activeStep, 1])
        setPrevStep([...prevStep, "Organização"])
        setPage("organisationStep2")
      }

      if (sucessUpdateCompany) {
        setActiveStep([...activeStep, 2])
        setPrevStep([...prevStep, "Informações da empresa"])
        setPage("inventariacao")
      }

    }, [sucessCreateCompany, sucessUpdateCompany])

    useEffect(() => {
        dispatch(sheetActions.loadEscopos())
    }, [])
    

  return (
    <Area>
        <StepArea>
            {step.map((item, index) => (
                <ContainerStep key={item}>
                    <HeaderStep>
                        <IconArea prev={handlePrev(item)} active={handleActiveStep(index)}>
                            {activeStep.filter(i => i === index).length > 0 && <IconCheck active={handleActiveStep(index)} prev={handlePrev(item)} />}
                        </IconArea>
                        <TitleStep active={handleActiveStep(index)}> {item} </TitleStep>
                    </HeaderStep>
                    {step.slice(0, 2).filter(i => i === item).length > 0 && <Fio active={handleActiveStep(index)} />}
                </ContainerStep>
            ))}
        </StepArea>
        <Card>
            <Routes page={page} />
            {/* <FooterCard>

            </FooterCard> */}
        </Card>
        <div style={{flex: 1}} />
    </Area>
  )
}