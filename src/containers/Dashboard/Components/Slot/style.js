import styled from 'styled-components';
import { fontSizes } from '../../../../utils/fontSizes';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const NumWrapper = styled.div`
    margin: 30px;
    font-size: ${fontSizes.slotSize};
`;