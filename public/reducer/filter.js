import moment from 'moment'
export default  (state = {
 text:"",
 sortBy:"date",
 startDate:moment(),
    endDate: moment()
},action)=>{
    switch(action.type)
    {
        case "ADDFILTER":
            return {...state,...action.update}
        case "SETTEXT":
            return {...state,text:action.text}
        case "SORTBYAMOUNT":
            return {...state,sortBy:action.sortBy}
        default:
            return state

    }
}

