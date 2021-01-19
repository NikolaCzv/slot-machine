import React, { useState, useEffect } from "react";
import {
    Container,
    NumWrapper  
} from './style';

const Slot = props => {

    const { num1, num2, num3 } = props; 

    const renderNum = n => {
        if(n === 1) {
            return <div> 🦠 </div>
        } else if (n === 2) {
            return <div> 🎱 </div>
        } else if (n === 3) {
            return <div> 🍻 </div> 
        } else if (n === 4) {
            return <div> 👑 </div> 
        } else if (n === 5) {
            return <div> 🎲 </div>
        } else if (n === 6) {
            return <div> 🍒 </div> 
        } else if (n === 7) {
            return <div> 💰 </div> 
        } else {
            return <div> ➖ </div>
        }
    };

    return  <Container>
                <NumWrapper>{renderNum(num1)}</NumWrapper>
                <NumWrapper>{renderNum(num2)}</NumWrapper>
                <NumWrapper>{renderNum(num3)}</NumWrapper>
            </Container>
};

export default Slot;