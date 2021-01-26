import React from 'react';
import {
    Container,
    CreditDisplay,
    EarnedCredit
} from './style';

const ScoreBoard = props => {
    const { credit, earnedCredit, loading } = props;

    return  <Container>
                <CreditDisplay>
                    Credit: {credit}
                </CreditDisplay>
                
                <EarnedCredit earnedCredit={earnedCredit}>
                    Win: {loading ? 0 : earnedCredit}
                </EarnedCredit>
            </Container>
};

export default ScoreBoard;