import React from 'react'
import {
    Cube,
    Front,
    Left,
    Top,
    Back,
    Bottom,
    Container,
    Right
} from './styles'

export default function VerticalChart({ percent }) {
  return (
    <Container percent={percent / 100}>
        <Cube>
            <Front />
            <Back />
            <Left />
            <Right />
            <Top />
            <Bottom />
        </Cube>
    </Container>
  )
}
