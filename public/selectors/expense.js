export default (expense, {
    text,
    startDate,
    endDate
}) => {
    return expense.filter((x) => {
        const start = typeof startDate !=="number" || startDate <= x.createdAt
        const end = typeof endDate !== "number" || endDate >= x.createdAt
        const textMatch = x.description.includes(text)
        console.log(start, end, textMatch);
        return start && end && textMatch

    })
}