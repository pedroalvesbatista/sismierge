import React from 'react'
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
    SpanRadio
} from './styles'

function Input({ onChange, type, placeholder, required, value, label, spanceLeft, id, name, qtd, notView }) {
  
  return (
    <Area spance={spanceLeft}>
        <Text> {label} </Text>
        {!notView &&
          <InputArea isFile={type == "file" ? true : false }>
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
                <Rigth>Upload</Rigth>
              </File>
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