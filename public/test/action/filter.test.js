import moment from 'moment'
import {addFilter,setText,sortByAmount} from "../../action/filter"

test("start set text",()=>(
    expect(setText(moment(0))).toEqual({
        type:"SETTEXT",
        text:moment(0)
    })
))

test("sort by amout",()=>{
    expect(sortByAmount()).toEqual({
        type:"SORTBYAMOUNT",
        sortBy:"amount"
    })
})