import { useAppSelector } from "../Redux/hooks";

export const IsSelectedOrKeep = (value: string): boolean => {
    const { choiceA, choiceB } = useAppSelector((state) => state.memory);
    return (choiceA?.name === value || choiceB?.name === value);
}
