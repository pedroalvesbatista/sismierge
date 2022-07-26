import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography, Card } from '@mui/material'
import React, { useState } from 'react'
import { combustaoMovel } from '../../../../mocks/subescopo'
import { fuelUsedEsco1Item } from '../../selectionData'
import { CardArea, InputEntreArea, InputResultatArea, SpaceArea } from '../styles'

function RouteTable({index, item}) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }} required>
        <InputLabel id="fuelUsedEsco1">
          Combustível Utilizado
        </InputLabel>
        <Select
          labelId="fuelUsedEsco1"
          id="fuelUsedEsco1"
          // value={itemSubEscopo.combustivel_utilizado}
          name={"combustivel_utilizado"}
          // onChange={handleChange}
          autoWidth
          label="Selecionar Combustível..."
        >
          {fuelUsedEsco1Item?.map((elem) => (
            <MenuItem value={elem}>{elem}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}


export function Table1({dataProps}) {
  const { indexTable } = dataProps
  const arrayTableInitial = [
    "Registro da Frota", "Descrição da Frota", "Tipo da frota de veículos", "Ano da Frota"
  ]

  const handleRouteTable = () => {
    switch (indexTable) {
      case 1: 
        return ["Registro da Frota", "Descrição da Frota", "Tipo de combustível"]
    
      default:
        return arrayTableInitial;
    }
  }

  const arrayLabel = handleRouteTable()

  const arrayMonth =[
    "jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez",
  ]
  const [detailsConsumption, setDetailsConsumption] = useState("");

  const handleDetailsConsumption = (event) => {
    setDetailsConsumption(event.target.value);
  }

  return (
    <CardArea mb="20px">
      <InputEntreArea flex={2}>
        {arrayLabel.map((item, index) => (
          <>
            <div key={index} style={{minWidth: 200}} className="m-2">
              <h3 style={{marginBottom: 10}}>{item}</h3>
              {index === 2 
                ? (
                  <RouteTable key={index} index={indexTable} item={item} />
                ) : (
                  <TextField
                    id={index}
                    label=" Digite aqui..."
                    variant="outlined"
                    type={index === 3 && "number"}
                  />
                )
              }
            </div>
            {/* {index === 2 && <RouteTable key={index} index={indexTable} item={item} />} */}
            
          </>
        ))}
        
        {detailsConsumption === "Mensal" && (
            arrayMonth.map(i => (
              <div style={{minWidth: 100}} key={i} className="m-2">
                <h3 style={{marginBottom: 10}}> {i} </h3>
                <TextField
                  size="small"
                  id="consu-01"
                  label="Digite aqui..."
                  // variant="outlined"
                />
              </div>
            ))
          ) 
        }
        {detailsConsumption === "Anual" &&
          <div style={{minWidth: 200}} className="m-2">
            <h3 style={{marginBottom: 10}}>Consumo anual</h3>
            <TextField
              size="small"
              id="consu-01"
              label="Digite aqui..."
              variant="outlined"
              type={"number"}
            />
          </div>
        } 
      </InputEntreArea>

      <SpaceArea />

      <InputResultatArea>
        <FormControl style={{minWidth: 200, alignItems: "flex-start"}} className="m-2">
          <FormLabel id="formLabelEscDetaCon"> Escolha um tipo de relato de consumo de combustível</FormLabel>
          <RadioGroup
            row
            aria-labelledby="formLabelEscDetaCon"
            name="row-radio-buttons-group"
            value={detailsConsumption}
            onChange={handleDetailsConsumption}
          >
            <FormControlLabel value="Anual" control={<Radio />} label="Anual" />
            <FormControlLabel value="Mensal" control={<Radio />} label=" Mensal" />
          </RadioGroup>
        </FormControl>
      </InputResultatArea>
      
    </CardArea>
  )
}