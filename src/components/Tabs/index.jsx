import React from 'react'
import {
    Container, Li, Ul
} from './styles'

function Tabs({ items, onCLick, active }) {
    // console.log(items);
  return (
    <Container>
        <Ul>
            {items?.map((item, key) => (
                <Li active={active === item.name.title ? true : false} onClick={() => onCLick(item.name.title)} key={key}> 
                    { item.name.title } 
                </Li>
            ))}
        </Ul>
    </Container>
  )
}

export default Tabs