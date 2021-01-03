import styled from "styled-components";
import { keyframes } from 'styled-components';
import { colors } from "../../../../utils/colors";
import { fontFamily } from "../../../../utils/fontFamily";

const animation = keyframes`
    0% { opacity: 0.3; }
    30% { opacity: 1; }
    40% { opacity: 0.3; }
    100% { opacity: 1; }
`;

const winAnimation = keyframes`
    0% {color: ${colors.green}; opacity: 0.3; }
    30% {color: ${colors.green};  opacity: 1; }
    40% { opacity: 0.3; }
    100% { opacity: 1; }
`;

export const MainTitle = styled.h1`
    color: ${colors.blue};
    animation-name: ${animation};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    margin: 20px;
    font-family: ${fontFamily.main};
`; 

export const WinTitle = styled.h1`
    color: ${colors.blue};
    animation-name: ${winAnimation};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    margin: 20px;
    font-family: ${fontFamily.main};
`;

export const LoseTitle = styled.h1`
    color: ${colors.orange};
    animation-name: ${animation};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    margin: 20px;
    font-family: ${fontFamily.main};
`;