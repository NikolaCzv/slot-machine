import styled from 'styled-components';
import { fontFamily } from '../../../../utils/fontFamily';
import { fontSizes } from '../../../../utils/fontSizes';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 30vw;
    margin: 20px;
`;

export const CreditDisplay = styled.div`
    font-size: ${fontSizes.scoreSize};
    font-family: ${fontFamily.main};
`;

export const EarnedCredit = styled.div`
    font-size: ${fontSizes.scoreSize};
    font-family: ${fontFamily.main};
`;