import React, { Fragment } from 'react'
import {
    Area,
    InputArea,
    InputEntry,
    Text,
    File,
    Left,
    Rigth,
    AreaRadio,
    LabelRadio,
    InputRadio,
    SpanRadio,
    TextArea
} from './styles'

function Input({ width, onChange, type, placeholder, required, value, label, spanceLeft, spanceRight, spanceTop, id, name, qtd, notView }) {
  
  return (
    <Area spanceTop={spanceTop} width={width} spanceLeft={spanceLeft} spanceRight={spanceRight}>
        <Text> {label} </Text>
        {!notView &&
          <InputArea height={type === "textArea" ? 100 : 40} isFile={type == "file" || type === "textArea" ? true : false }>
            {type === "textArea" ?(
              <TextArea placeholder={placeholder} cols={50} rows={10}  />) : (
                <Fragment>
                  <InputEntry 
                    type={type ?? 'text'} 
                    placeholder={placeholder}
                    onChange={onChange}
                    required={required}
                    value={value}
                    isFile={type == "file" ? true : false }
                    id={id}
                  />
                  {type === "file" && 
                    <File htmlFor='file'>
                      <Left>{value ? value.length > 24 ? value.slice(0, 24)+"..." : value : "Buscar arquivo"}</Left>
                      <Rigth>UPLOAD</Rigth>
                    </File>
                  }
                </Fragment>
              )
            }
          </InputArea>
        }
        {type === "radio" &&
          <AreaRadio>
            {qtd?.map((item, index) => (
              <LabelRadio key={index} htmlFor={`${index}-${name}`}>
                <InputRadio 
                  value={item} 
                  onChange={onChange} 
                  type="radio" 
                  id={`${index}-${name}`} 
                  name={name} 
                  tabindex={index}
                />
                <SpanRadio>{item}</SpanRadio>
              </LabelRadio>
            ))}
          </AreaRadio>
        }
        
    </Area>
  )
}

export default Input