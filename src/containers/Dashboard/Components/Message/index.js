import React from "react";
import { MainTitle, WinTitle, LoseTitle } from "./style";

const Message = props => {
    const { earnedCredit, credit } = props;

    if(credit < 20)
        return <LoseTitle>GAME OVER</LoseTitle>

    if(earnedCredit === 0)
        return <MainTitle>GOOD LUCK</MainTitle>

    return <WinTitle>YOU WON {earnedCredit}</WinTitle>
};

export default Message;