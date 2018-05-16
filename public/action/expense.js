import uuid from 'uuid'
export const addExpense = ({
    description = "",
    note = "",
    amount = "",
    createdAt = ""
} = {}) => ({
    type: "ADD",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

export const editExpense = (id, update) => ({
    type: "EDIT",
    id,
    update
})


export const removeExpense = ({
    id = 0
} = {}) => ({
    type: "RMV",
    id
})
