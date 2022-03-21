import React from 'react';

import classes from './Card.module.scss';

import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import { select } from "../../../Redux/memo/memorySlice";
import { IsSelectedOrKeep } from "../../../Helpers/CustomHooks";

import { CARD_IMAGE } from "../../../Constants/CardImage";

interface CardInterface {
    keyGen: number,
}

function Card({ keyGen }: CardInterface) {
    const keepPair = useAppSelector((state) => state.memory.keepPair);
    const dispatch = useAppDispatch();

    const name: string = `card-${keyGen}`;
    const check: boolean = IsSelectedOrKeep(`card-${keyGen}`);

    const assignImg = Object.entries(CARD_IMAGE).find((el: [String, number[]]) => el[1].includes(keyGen));
    const img = require(`../../../Assets/Images/${assignImg ? assignImg[0] : ''}.png`);

    const handleSelect = () => {
        (!check && !keepPair.includes(name)) && dispatch(select({ name, value: assignImg ? assignImg[0] : '' }));
    };

    return (
        <div className={`${classes.card} ${check ? 'bg-standby' : keepPair.includes(name) && 'bg-success'}`} onClick={() => handleSelect()}>
            <img className={`${classes.cardImg} ${(!check && !keepPair.includes(name)) ? 'd-none' : 'd-block'}`} src={img} alt={`${img}.png`}/>
        </div>
    );
}

export default Card;
