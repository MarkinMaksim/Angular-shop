export function generateId(): number[] {
    let arr = []
    for (var length = 0; length < 10; length++)
        arr.push(Math.floor(Math.random()));

    return arr;

}