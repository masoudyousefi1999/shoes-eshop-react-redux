let counterIncrease = "INCREASE";
let counterDecrease = "DECREASE";


export const counterReducer = (state=0,action) => {
    switch (action.type){
        case counterIncrease :{
            
            return state + 1
        }
        case counterDecrease : {
            
            return state - 1
        }

        default : return state
    }
}

export let counterUp = () => {
    return {type:counterIncrease};
}

export let counterDown = () => {
    return {type:counterDecrease};
}