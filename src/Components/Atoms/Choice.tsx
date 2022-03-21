import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { changeStateGame, clearChoices, increaseScore } from "../../Redux/memo/memorySlice";

function Choice() {
    const { choiceA, choiceB, score, stateGame, keepPair } = useAppSelector((state) => state.memory);
    const dispatch = useAppDispatch();

    let time: NodeJS.Timeout;

    useEffect(() => {
        if ((choiceA && choiceB) && choiceA.value === choiceB.value) {
            time = setTimeout(() => {
                dispatch(increaseScore());
            }, 500);
            return () => clearTimeout(time);
        } else {
            if ((choiceA && choiceB) && choiceA.value !== choiceB.value) {
                time = setTimeout(() => {
                    dispatch(clearChoices());
                }, 500);
                return () => clearTimeout(time);
            }
        }
    }, [choiceA, choiceB]);

    return (
        <div>Score: {score} <p>{ stateGame }</p></div>
    );
}

export default Choice;
