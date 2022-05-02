import React, { useEffect } from 'react'
import Lottie from 'react-lottie'

import animationData from '../assets/loading.json'
import styled from 'styled-components'
import { admin } from '../../../constants/tailwind/colors'

export function LoadingAnimation({ height, width, speed=1, size=50 }) {

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
    <Area>
        <Lottie 
            options={defaultOptions}
            height={height ?? size}
            width={width ?? size}
            speed={speed}
            isClickToPauseDisabled={true}
        />
    </Area>
  )
}

const Area = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* position: fixed; */
    /* left: 0;
    top: 0;
    width: 100%;
    height: 100%; */
`