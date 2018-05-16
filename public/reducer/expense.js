export default (state = [], action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.expense]
        case "RMV":
            return state.filter((id) => {
                return id.id !== action.id
            })
        case "EDIT":
            return state.map((x) => {
                if (x.id == action.id) {
                    return {
                        ...x,
                        ...action.update
                    }
                } else {
                    return x
                }
            })
        default:
            return state
    }
}