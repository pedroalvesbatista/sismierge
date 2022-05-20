import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Chart from "../Chart";
import Circle from "./Circle";
import { Area, Container, Icon, Text, TextArea } from "./styles";
import Button from '@mui/material/Button';

function Board({...props }) {
 const {subItem, title} = props
  return (
    // <Container>
    //   <Area>
    //     <Icon />
    //     <Text size="3vh">
    //       {number}
    //     </Text>
    //     <Text bold="400">
    //       {title}
    //     </Text>
    //   </Area>
    // </Container>
    <Container>
      <Area>
        {/* <Icon /> */}
        <Text size="3vh">{title}</Text>
        {subItem && subItem.map((elem) => {
          return(
          <Text bold="400">
            <a href="#">
              <i>{elem}</i>
            </a>
          </Text>
          )
        })}
        {/* <button type="button" class="btn btn-secondary btn-sm">
          <i>Iniciar Inventariação</i>
        </button> */}
        <Button variant="outlined" size="small" color="success">Iniciar Inventariação</Button>
      </Area>
    </Container>
  );
}

export default Board;
