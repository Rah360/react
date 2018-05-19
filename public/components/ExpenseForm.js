import React from 'react'
import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';/

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            
            calendarFocused: false
        }
        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onAmountChange = this.onAmountChange.bind(this)
        this.onNoteChange = this.onNoteChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this)
    }
    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange(e) {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange(e) {
        const amount = e.target.value;

        // if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        // }
    }
  
    onDateChange(createdAt) {
        if (createdAt) {
            
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange({ focused }) {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit(e) {
        e.preventDefault()
        
        this.props.onSubmit({
            description: this.state.description,
            amount: this.state.amount,
            note: this.state.note,
            createdAt: this.state.createdAt
        })
    }
    render() {
       
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="desc" onChange={this.onDescriptionChange} placeholder="description" />
                    <input type="text" name="amt" onChange={this.onAmountChange} placeholder="amout" />
                    <textarea placeholder="add a note" name="nt" onChange={this.onNoteChange} placeholder="add note" />
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