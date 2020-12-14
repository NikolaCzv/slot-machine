import React from 'react';
import {
    Container,
    CreditDisplay,
    EarnedCredit
} from './style';

const ScoreBoard = props => {
    const { credit, earnedCredit } = props;

    return  <Container>
                <CreditDisplay>
                    Credit: {credit}
                </CreditDisplay>
                <EarnedCredit>
                    Earned Credit: {earnedCredit}
                </EarnedCredit>
            </Container>
};

export default ScoreBoard;