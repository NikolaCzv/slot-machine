import React, { useState, useEffect } from "react";
import {
    Container,
    Button,
    ButtonWrapper
} from './style';
import Slot from './Components/Slot';
import ScoreBoard from "./Components/ScoreBoard";
import Message from "./Components/Message";

//next steps
//credit limit
//add bet options
//points help screen
//what if game over

const getRandomNumber = () => Math.floor(Math.random() * 7 + 1);

const Dashboard = () => {

    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [num3, setNum3] = useState(null);
    const [credit, setCredit] = useState(200);
    const [earnedCredit, setEarnedCredit] = useState(0);

    useEffect(() => {
        if (num1 === 1 && num2 === 1 && num3 === 1) {
            setEarnedCredit(20);
            setCredit(credit + 20);

        } else if (num1 === 2 && num2 === 2 && num3 === 2){
            setEarnedCredit(20);
            setCredit(credit + 20);

        } else if (num1 === 3 && num2 === 3 && num3 === 3){
            setEarnedCredit(20);
            setCredit(credit + 20);

        } else if (num1 === 4 && num2 === 4 && num3 === 4){
            setEarnedCredit(40);
            setCredit(credit + 40);

        } else if (num1 === 5 && num2 === 5 && num3 === 5){
            setEarnedCredit(40);
            setCredit(credit + 40);

        } else if (num1 === 6 && num2 === 6 && num3 === 6){
            setEarnedCredit(40);
            setCredit(credit + 40);

        } else if (num1 === 7 && num2 === 7 && num3 === 7){
            setEarnedCredit(120);
            setCredit(credit + 120);

        } else if (num1 === 1 && num2 === 1) {
            setEarnedCredit(10);
            setCredit(credit + 10);

        } else if (num2 === 1 && num3 === 1) {
            setEarnedCredit(10);
            setCredit(credit + 10);

        } else if (num1 === 2 && num2 === 2) {
            setEarnedCredit(10);
            setCredit(credit + 10);

        } else if (num2 === 2 && num3 === 2) {
            setEarnedCredit(10);
            setCredit(credit + 10);

        } else if (num1 === 3 && num2 === 3) {
            setEarnedCredit(10);
            setCredit(credit + 10);

        } else if (num2 === 3 && num3 === 3) {
            setEarnedCredit(10);
            setCredit(credit + 10);

        } else if (num1 === 4 && num2 === 4) {
            setEarnedCredit(20);
            setCredit(credit + 20);

        } else if (num2 === 4 && num3 === 4) {
            setEarnedCredit(20);
            setCredit(credit + 20);

        } else if (num1 === 5 && num2 === 5) {
            setEarnedCredit(20);
            setCredit(credit + 20);

        } else if (num2 === 5 && num3 === 5) {
            setEarnedCredit(20);
            setCredit(credit + 20);

        } else if (num1 === 6 && num2 === 6) {
            setEarnedCredit(20);
            setCredit(credit + 20);

        } else if (num2 === 6 && num3 === 6) {
            setEarnedCredit(20);
            setCredit(credit + 20);

        } else if (num1 === 7 && num2 === 7) {
            setEarnedCredit(60);
            setCredit(credit + 60);

        } else if (num2 === 7 && num3 === 7) {
            setEarnedCredit(60);
            setCredit(credit + 60);
        } else {
            setEarnedCredit(0);
        }
    },[num1, num2, num3]); //samo kad se neki od brojeva promeni

    const handlePlay = () => {
        setCredit(credit - 20);
        setNum1(getRandomNumber());
        setNum2(getRandomNumber());
        setNum3(getRandomNumber());
    };

    return  <Container>
                <Message earnedCredit={earnedCredit} credit={credit} />
                <ScoreBoard credit={credit} earnedCredit={earnedCredit}/>
                <Slot num1={num1} num2={num2} num3={num3} />
                <ButtonWrapper>
                    {credit >= 20 ?
                        <Button onClick={handlePlay} credit={credit}>
                            Play
                        </Button>
                        :
                        <Button>
                            Restart
                        </Button>
                    }
                </ButtonWrapper>
            </Container>
};

export default Dashboard;