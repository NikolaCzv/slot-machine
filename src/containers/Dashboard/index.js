import React, { useState } from "react";
import {
    Container,
    Button,
    ButtonWrapper
} from './style';
import Slot from './Components/Slot';
import ScoreBoard from "./Components/ScoreBoard";

//next steps
//eanerd credit update and credit update
//credit limit
//add bet options
//points help screen
//what if game over

const Dashboard = () => {

    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [num3, setNum3] = useState(null);
    const [credit, setCredit] = useState(200);
    const [earnedCredit, setEarnedCredit] = useState(null);

    const handlePlay = () => {
        setNum1(Math.floor(Math.random() * 7 + 1));
        setNum2(Math.floor(Math.random() * 7 + 1));
        setNum3(Math.floor(Math.random() * 7 + 1));
        setCredit(credit - 20);
        setEarnedCredit(null);

        if (num1 === 1 && num2 === 1 && num3 === 1) {
            setCredit(credit + 20);
            setEarnedCredit(20);
        } else if (num1 === 2 && num2 === 2 && num3 === 2){
            setCredit(credit + 20);
            setEarnedCredit(20);
        } else if (num1 === 3 && num2 === 3 && num3 === 3){
            setCredit(credit + 20);
            setEarnedCredit(20);
        } else if (num1 === 4 && num2 === 4 && num3 === 4){
            setCredit(credit + 40);
            setEarnedCredit(40);
        } else if (num1 === 5 && num2 === 5 && num3 === 5){
            setCredit(credit + 40);
            setEarnedCredit(40);
        } else if (num1 === 6 && num2 === 6 && num3 === 6){
            setCredit(credit + 40);
            setEarnedCredit(40);
        } else if (num1 === 7 && num2 === 7 && num3 === 7){
            setCredit(credit + 120);
            setEarnedCredit(120);
        } else if (num1 === 1 && num2 === 1) {
            setCredit(credit + 10);
            setEarnedCredit(10);
        } else if (num2 === 1 && num3 === 1) {
            setCredit(credit + 10);
            setEarnedCredit(10);
        } else if (num1 === 2 && num2 === 2) {
            setCredit(credit + 10);
            setEarnedCredit(10);
        } else if (num2 === 2 && num3 === 2) {
            setCredit(credit + 10);
            setEarnedCredit(10);
        } else if (num1 === 3 && num2 === 3) {
            setCredit(credit + 10);
            setEarnedCredit(10);
        } else if (num2 === 3 && num3 === 3) {
            setCredit(credit + 10);
            setEarnedCredit(10);
        } else if (num1 === 4 && num2 === 4) {
            setCredit(credit + 20);
            setEarnedCredit(20);
        } else if (num2 === 4 && num3 === 4) {
            setCredit(credit + 20);
            setEarnedCredit(20);
        } else if (num1 === 5 && num2 === 5) {
            setCredit(credit + 20);
            setEarnedCredit(20);
        } else if (num2 === 5 && num3 === 5) {
            setCredit(credit + 20);
            setEarnedCredit(20);
        } else if (num1 === 6 && num2 === 6) {
            setCredit(credit + 20);
            setEarnedCredit(20);
        } else if (num2 === 6 && num3 === 6) {
            setCredit(credit + 20);
            setEarnedCredit(20);
        } else if (num1 === 7 && num2 === 7) {
            setCredit(credit + 60);
            setEarnedCredit(60);
        } else if (num2 === 7 && num3 === 7) {
            setCredit(credit + 60);
            setEarnedCredit(60);
        } else {
            return
        }

    };

    return  <Container>
                <ScoreBoard credit={credit} earnedCredit={earnedCredit}/>
                <Slot num1={num1} num2={num2} num3={num3} />
                <ButtonWrapper>
                    {credit > 0 &&
                        <Button onClick={handlePlay}>
                            Play
                        </Button>
                    }
                </ButtonWrapper>
            </Container>
};

export default Dashboard;