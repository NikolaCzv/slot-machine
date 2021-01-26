import React from "react";
import {
    Container,
    NumWrapper  
} from './style';
import {emojiRender} from '../../../../utils/helpers';

const Slot = props => {

    const { num1, num2, num3 } = props; 

    const renderNum = n => emojiRender(n);

    return  <Container>
                <NumWrapper>{renderNum(num1)}</NumWrapper>
                <NumWrapper>{renderNum(num2)}</NumWrapper>
                <NumWrapper>{renderNum(num3)}</NumWrapper>
            </Container>
};

export default Slot;