let openBag = "OPEN_BAG";
let closeBag = "CLOSE_BAG"


export const bagReducer = (state=false,action) => {
    switch (action.type){
        case openBag :{
            
            return true
        }
        case closeBag : {
            
            return false
        }

        default : {
            return state
        }
    }
}


export let openBagAction = () => {
    return {type:openBag};
}

export let closeBagAction = () => {
    return {type:closeBag};
}