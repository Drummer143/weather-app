export const roundToCertainOrder = (number: number, order: number): number => {
    const ten = Math.pow(10, order);

    return Math.round(number * ten) / ten;
}