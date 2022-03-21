import React from 'react';

import classes from './GameBoard.module.scss';

import Card from "../../Atoms/Card/Card";
import Choice from "../../Atoms/Choice";
import ProgressBar from "../../Atoms/ProgressBar/ProgressBar";

import { mapByNumber } from "../../../Helpers/ArrayHelpers";

function GameBoard() {
    return (
        <div className={classes.gameBoard}>
            <ProgressBar time={60}/>
            <Choice />
            <div className={classes.wrapper}>
                {mapByNumber(16, (index: number) => <Card key={index} keyGen={index}/>).sort(() => Math.random() - 0.5)}
            </div>
        </div>
    );
}

export default GameBoard;
