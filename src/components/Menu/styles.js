import styled from 'styled-components'
import { IoIosArrowBack } from 'react-icons/io'
import { primary, second, admin } from '../../constants/tailwind/colors'

export const Area = styled.div`
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    /* flex: 4; */
    width: ${({closed}) => closed ? 50 : 230}px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
    position: fixed;
    transition: all .2s ease-out;
`
export const Header = styled.div`
    display: flex;
    /* flex: 1; */
    height: 70px;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid ${admin.cinza};
    justify-content: space-between;
    /* background-color: red; */
    transition: all .2s ease-out;
`
export const Close = styled(IoIosArrowBack)`
    padding: 5px 0px;
    font-size: 25px;
    background-color: ${admin.cinza}69;
    width: ${({closed}) => closed ? 30 : 15}px;
    height: 30px;
    color: ${admin.dark};
    border-radius: 8px 0px 0px 8px;
    cursor: pointer;

    &:hover{
        background-color: ${admin.cinza};
        color: #000
    }
    &:active{
        background-color: ${admin.cinza}69;
        color: ${admin.dark};
    }
`
export const Logo = styled.img.attrs(({src}) => ({
    src: '/logo.png'
}))`
    width: ${({closed}) => closed ? 30 : 70}px;
    height: ${({closed}) => closed ? 70 : 70}px;
    object-fit: contain;
    cursor: pointer;
    margin-left: ${({closed}) => closed ? 2 : 20}px;
    transition: all .2s ease-out;
`
export const MenuArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 4;
    padding: ${({closed}) => closed ? "20px 5px" : "20px 10px"};
    transition: all .2s ease-out;
    
    /* background-color: beige; */
`
export const AreaItem = styled.div`
    display: flex;
    /* justify-content: space-around; */
    transition: all .2s ease-out;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    padding: ${({closed}) => closed ? "0px 0px" : "0px 10px"};
    cursor: pointer;
    border-radius: 5px;
    background-color: ${({active}) => active ? 'rgba(52, 155, 131, 0.1)' : 'none'};
    
    &:hover{
        background-color: ${({active}) => active ? 'none' : 'rgba(216, 221, 225, 0.4)'};
        
    }
`
export const Text = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({active, color}) => active ? primary.verde : color ? color : primary.dark};
    font-weight: ${({active}) => active ? '400' : '300'};
    font-size: ${({active, size}) => active ? "1.2em" : size ? size : "1em"}; 
    margin: ${({active}) => active ? '10px 0px' : '10px 0px'};  
    padding: 0px 10px;
    transition: all .2s linear;
    background-color: ${({bg}) => bg ?? "none"};
    padding: ${({padding}) => padding ? padding : "none"};
    border-radius: ${({radius}) => radius ? "5px" : "none"};
    margin-left: ${({ml}) => ml ? "10px" : "none"};
`
export const BarActive = styled.div`
    height: 4px;
    width: 20px;
    background-color: ${primary.verde};
    position: absolute;
    left: 0;
    top: 25px;
`
export const Notif = styled.div`
    height: 20px;
    width: 23px;
    font-size: 9px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    background-color: ${primary.roxo};
    color: ${primary.cinza};
    position: absolute;
    right: 0;
    top: 15px;
`
export const BottomArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
    flex-direction: column;
    transition: all .2s ease-out;
`
export const Img = styled.img`
    width: ${({closed}) => closed ? "30" : "40"}px;
    height: ${({closed}) => closed ? "30" : "40"}px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    box-shadow: 5px 5px 15px -3px rgba(0,0,0,0.34);
    margin: 0px 0px 3px 0px;
    transition: all .2s ease-out;

    &:active{
        opacity: 0.8;
    }
`
export const Subtext = styled.span`
    color: ${({color}) => color ? primary.verde : primary.dark};
    font-size: ${({size, closed}) => closed ? size ?? '10' : size ?? '14'}px;
    font-weight: ${({weight}) => weight ?? 'normal'};
    text-align: center;
    cursor: pointer;
    transition: all .2s ease-out;

    &:hover{
        color: ${({hover}) => hover ? second.verde : primary.dark};
    }
    &:active{
        opacity: 0.8;
    }

`