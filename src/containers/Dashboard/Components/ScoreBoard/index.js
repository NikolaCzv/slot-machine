import React, { useEffect } from 'react';
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
                <EarnedCredit earnedCredit={earnedCredit}>
                    Win: {earnedCredit}
                </EarnedCredit>
            </Container>
};

export default ScoreBoard;