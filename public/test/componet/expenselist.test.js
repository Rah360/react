import React from 'react'
import { shallow } from 'enzyme'
import expense from '../../fixutre/expenses'
import expenseList from '../../components/expenseList'

test("testing expense list",()=>{
    const wrapper=shallow(<expenseList {...expense[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test("testing simulation expense list", () => {
    const wrapper = shallow(<expenseList {...expense[0]} />)
    expect(wrapper).toMatchSnapshot()
})