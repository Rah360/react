import selectExpenses from '../../selectors/expense'

const expense=[{
    id:'1',
    description:"gum",
    note:"",
    amount:235,
    createdAt:0
},
    {
        id: '2',
        description: "rent",
        note: "",
        amount: 2300,
        createdAt: -1000
    },
    {
        id: '3',
        description: "credit card",
        note: "",
        amount: 125,
        createdAt: 1000
    }]
test("should filter by test value",()=>{
    const filter={
        text:"0",
        startDate:-1000,
        endDate:1000
    }
    expect(selectExpenses(expense,filter)).toEqual([expense[2]])
})