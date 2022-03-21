export const mapByNumber = (value: Number, callback: Function): Array<JSX.Element> => {
    const result: JSX.Element[] = [];
    for(let i = 0; i < value; i++) {
        result.push(callback(i));
    }

    return result;
}
