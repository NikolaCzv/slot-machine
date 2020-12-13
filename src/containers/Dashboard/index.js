import React, { useState } from "react";
import {
    Container,
    Button,
    ButtonWrapper
} from './style';
import Slot from './Components/Slot';

const Dashboard = () => {

    const [num1, setNum1] = useState(Math.floor(Math.random() * 7 + 1));
    const [num2, setNum2] = useState(Math.floor(Math.random() * 7 + 1));
    const [num3, setNum3] = useState(Math.floor(Math.random() * 7 + 1));

    const handlePlay = () => {
        setNum1(Math.floor(Math.random() * 7 + 1));
        setNum2(Math.floor(Math.random() * 7 + 1));
        setNum3(Math.floor(Math.random() * 7 + 1));
    };

    return  <Container>
                <Slot num1={num1} num2={num2} num3={num3} />
                <ButtonWrapper>
                    <Button onClick={handlePlay}>
                        Play
                    </Button>
                </ButtonWrapper>
            </Container>
};

export default Dashboard;