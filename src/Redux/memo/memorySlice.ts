import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isNull } from "lodash";

type Choice = {
    name: string,
    value: string
}

interface MemoryState {
    choiceA: Choice | null,
    choiceB: Choice | null,
    keepPair: string[],
    stateGame: string | null,
    score: number,
}

const initialState: MemoryState = {
    choiceA: null,
    choiceB: null,
    keepPair: [],
    stateGame: null,
    score: 0,
}

export const memorySlice = createSlice({
    name: 'memory',
    initialState,
    reducers: {
        select: (state, { payload }: PayloadAction<Choice>): void => {
            if (isNull(state.choiceA)) {
                state.choiceA = payload;
            } else {
                if (isNull(state.choiceB) && state.choiceA.name !== payload.name) {
                    state.choiceB = payload;
                }
            }
        },
        changeStateGame: (state, { payload }: PayloadAction<string>): void => {
            state.stateGame = payload;
        },
        increaseScore: (state): void => {
            state.score += 10;
            (state.choiceA && state.choiceB) && state.keepPair.push(state.choiceA.name, state.choiceB.name);
            state.choiceA = null;
            state.choiceB = null;
        },
        clearChoices: (state): MemoryState => {
            return {
                ...state,
                choiceA: null,
                choiceB: null,
            }
        },
        clearGame: (state): MemoryState => {
            return initialState;
        }
    },
})

export const { select, increaseScore, clearChoices, clearGame, changeStateGame } = memorySlice.actions

export default memorySlice.reducer
