import React from 'react'
import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
const now=moment()
console.log(now.format('MM Do,YYYY'))

export default class ExpenseForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            description: "",
            amt: "",
            note: "",
            createdAt:moment(),
            calendarFocused:false
        }
        this.onDespChange=this.onDespChange.bind(this)
        this.onAmtChange = this.onAmtChange.bind(this)
        this.onNoteChange = this.onNoteChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDateChange=this.onDateChange.bind(this) 
        this.onFocusChange = this.onFocusChange.bind(this)
    }
    onDespChange(e){
        e.persist()
        this.setState(()=>({
            description:e.target.value
        }))
    }
    onNoteChange(e){
        e.persist()
        this.setState(() => ({
            note: e.target.value
        }))
    }
    onAmtChange(e){
        e.persist()
        this.setState(() => ({
            amt: e.target.value
        }))
    }
    onSubmit(e){
        e.preventDefault()
        this.props.onSubmit({
            description:this.state.description,
            amt:this.state.amt,
            note:this.state.note,
            createdAt: now.format('MM Do,YYYY')
        })
    }
    onDateChange (createdAt) {
        console.log(createdAt.format())
    this.setState(() => ({ createdAt }));
  };
  onFocusChange ({ focused }) {
    this.setState(() => ({ calendarFocused: focused }));
  };
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="desc" onChange={this.onDespChange} placeholder="description"/>
                    <input type="text" name="amt" onChange={this.onAmtChange} placeholder="amout"/>
                    <textarea placeholder="add a note" name="nt" onChange={this.onNoteChange} placeholder="add note"/>
                    <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
                    <button>submite na re</button>
                </form>
            </div>
        )
    }
}
