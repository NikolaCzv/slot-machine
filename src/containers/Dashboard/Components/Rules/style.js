import styled from 'styled-components';
import {fontFamily} from '../../../../utils/fontFamily'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 100px;
`; 

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    height: 50px;
    margin: 20px;
`;

export const Row = styled.div`
    margin: 5px;
    font-family: ${fontFamily.main};
    font-size: 18px;
`;