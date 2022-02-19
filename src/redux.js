export const increasePage = () => {
    return {
        type: "INCREASE"
    }
}

export const decreasePage = () => {
    return {
        type: "DECREASE"
    }
}

export const changeDisplayRow = (rowNum) => {
    return {
        type: "CHANGE",
        rowNum: rowNum
    }
}

export const pageReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE": 
            return state - 1;
        default:
            return state;
    }
}

export const rowNumReducer = (state = 5, action) => {
    switch(action.type) {
        case "CHANGE":
            return action.rowNum;
        default:
            return state;
    }
}