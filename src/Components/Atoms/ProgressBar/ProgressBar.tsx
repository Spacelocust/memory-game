import React, { useEffect, useState } from 'react';

import classes from './ProgressBar.module.scss';

import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import { changeStateGame } from "../../../Redux/memo/memorySlice";

interface ProgressBarInterface {
    time: number,
}

function ProgressBar({ time }: ProgressBarInterface) {
    const keepPair = useAppSelector((state) => state.memory.keepPair);
    const dispatch = useAppDispatch();

    const timeDefault = 60;
    const [counter, setCounter] = useState<number>(timeDefault);

    useEffect(() => {
        if (counter === -1) {
            dispatch(changeStateGame('Loose'));
            return;
        }
        if (keepPair.length === 16) {
            dispatch(changeStateGame('Win'));
            return;
        }
        if (counter > -1 || keepPair.length < 16) {
            let timer: NodeJS.Timer = setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [counter]);

    return (
        <div className={classes.progressContainer} style={{ width: `${((timeDefault * 100) / timeDefault)}%` }}>
            <div className={classes.progressBar}
                 style={{
                     height: '24px',
                     width: `${((counter * 100) / timeDefault)}%`,
                     backgroundColor: ((counter * 100) / timeDefault) >= 50 ? 'green' : ((counter * 100) / timeDefault) < 50 && ((counter * 100) / timeDefault) >= 25 ? 'yellow' : 'red'
                 }}>
            </div>
        </div>
    );
}

export default ProgressBar;
