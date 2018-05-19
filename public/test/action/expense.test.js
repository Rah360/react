// import { removeExpense, editExpense, addExpense} from "../../action/expense"


// test("testing remove expense action",()=>{
//     expect(removeExpense({id:"1234"})).toEqual({
//         type:"",
//         id:12345
//     })
// })
// test("testing EDIT expense action", () => {
//     expect(editExpense( 1234,{name:"dash"})).toEqual({
//         type: "EDIT",
//         id: 1234,
//         update:{name:"dash"}
//     })
// })

// test("testing addexpesne",()=>{
//     expect(addExpense({
//         description:"xyz",
//         note:"xyz",
//         amount:220,
//         createdAt:330
//     })).toEqual({
//         type: "ADD",
//         expense: {
//             id: expect.any(String),
//             description: "xyz",
//             note: "xyz",
//             amount: 220,
//             createdAt:330
//         }
//     })
// })