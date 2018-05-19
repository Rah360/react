import React from 'react'
import {shallow} from 'enzyme'
jest.mock('../__mocks__/moment')
import ExpenseForm from '../../components/ExpenseForm'
import expense from '../../fixutre/expenses'
console.log(expense)

// test("expense form ",()=>{
//     const wrapper = shallow(<ExpenseForm expense={expense[0]}/>)
//     expect(wrapper).toMatchSnapshot()
// })

// test("simulation user click",()=>{
//     const wrapper=shallow(<ExpenseForm/>)
//     wrapper.find("input").at(0).simulate('change',{
//         target:{value:"Gum"}
//     })
//     wrapper.find("input").at(1).simulate('change', {
//         target: { value: "12304" }
//     })
//     wrapper.find("textarea").at(0).simulate('change', {
//         target: { value: "gum" }
//     })
//     // wrapper.find("form").simulate('submit', {
//     //     preventDefault:()=>{}
//     // })
//     expect(wrapper.state("note")).toEqual("gum")
//     expect(wrapper).toMatchSnapshot()
    
// })


// test("spies",()=>{
//     const onSubmitSpy=jest.fn();
//     const wrapper=shallow(<ExpenseForm {...expense[0]} onSubmit={onSubmitSpy}/>)

//      wrapper.find("form").simulate('submit', {
//         preventDefault:()=>{}
//     })
//     // expect(wrapper.state('error')).toBe('')

//     expect(onSubmitSpy).toHaveBeenCalledWith(expense[0])
//     expect(wrapper).toMatchSnapshot()
    
// })
test('spies', () => {
    const submitSpies = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expense[0]} onSubmit={submitSpies} />)
    wrapper.find("form").simulate('submit', {
        preventDefault: () => { }
    })
    expect(submitSpies).toHaveBeenLastCalledWith(expense[0])
})
