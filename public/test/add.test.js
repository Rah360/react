const add=(a,b)=>a+b
const greeting=(name)=> `hello ${name}`
test("should add two numbers",()=>{
    const result=add(5,5);
    if(result!==10)
    {
        throw new Error("wrong")
    }
})

test("check name",()=>{
    expect(greeting("Rahul")).toBe("hello Rahul")
})