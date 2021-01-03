import React from 'react';
import {
    Container,
    Column,
    Row
} from './style';

const Rules = () => {
    return  <Container>
                <Column>
                    <Row>🦠 x 2 = 10 Credit</Row>
                    <Row>🦠 x 3 = 20 Credit</Row>
                    <Row>🎱 x 2 = 10 Credit</Row>
                    <Row>🎱 x 3 = 20 Credit</Row>
                    <Row>🍻 x 2 = 10 Credit</Row>
                </Column>
                <Column>
                    <Row>🍻 x 3 = 20 Credit</Row>
                    <Row>👑 x 2 = 20 Credit</Row>
                    <Row>👑 x 3 = 40 Credit</Row>
                    <Row>🎲 x 2 = 20 Credit</Row>
                    <Row>🎲 x 3 = 40 Credit</Row>
                </Column>
                <Column>
                    <Row>🍒 x 2 = 20 Credit</Row>
                    <Row>🍒 x 3 = 40 Credit</Row>
                    <Row>💰 x 2 = 60 Credit</Row>
                    <Row>💰 x 3 = 120 Credit</Row>
                </Column>
            </Container>
};

export default Rules;