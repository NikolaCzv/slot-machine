import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Container = styled.div`
    height: 100vh;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    border-radius: 8px;
    border: none;
    margin: 50px;
    width: 15vw;
    height: 3vh;
    color: ${colors.white};
    background-color: ${colors.green};
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;