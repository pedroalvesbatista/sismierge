import React, { useEffect } from 'react'
import Lottie from 'react-lottie'

import animationData from '../assets/loading.json'
import styled from 'styled-components'
import { admin, primary } from '../../../constants/tailwind/colors'

export function LoadingAnimation({ height, width, speed=1, size=50, viewport=true }) {

    const defaultOptions = {
        // container: document.querySelector("#register_company"),
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    

  return (
    viewport ? (
      <Area>
        <Lottie 
          options={defaultOptions}
          height={height ?? size}
          width={width ?? size}
          speed={speed}
          isClickToPauseDisabled={true}
        />
      </Area>
    ) : (
      <Lottie 
        options={defaultOptions}
        height={height ?? size}
        width={width ?? size}
        speed={speed}
        isClickToPauseDisabled={true}
      />
    )
  )
}

const Area = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${primary.verde}81;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  box-shadow: 5px 0px 6px -2px rgba(0,0,0,0.10);
  position: fixed;
  top: 0;
  z-index: 10;
  left: 0;
`