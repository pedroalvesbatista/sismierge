import React, { useEffect } from 'react'
import Lottie from 'react-lottie'

import animationData from '../assets/confetti.json'
import styled from 'styled-components'
import { admin } from '../../../constants/tailwind/colors'

export function ConfettiAnimation({ height, width, speed=2 }) {

    const defaultOptions = {
        // container: document.querySelector("#register_company"),
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    

  return (
    <Area>
        <Lottie 
            options={defaultOptions}
            height={height ?? "100vh"}
            width={width ?? 600}
            speed={speed}
        />
    </Area>
  )
}

const Area = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`