export const addFilter=({text="",sortBy="date",amount=500,startDate=1200,endDate=1900}={})=>(
    {
        type:"ADDFILTER",
        update:{
            text,
            sortBy,
            amount,
            startDate,
            endDate
        }
    }
)

export const setText = (text = "") => ({
    type:"SETTEXT",
    text
})
export const sortByAmount = () => ({
    type:"SORTBYAMOUNT",
    sortBy:"amount"
})