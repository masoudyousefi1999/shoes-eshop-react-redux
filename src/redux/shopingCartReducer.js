export let addProduct = "ADD_PRODUCT";
export let deletProduct = "DELET_PRODUCT";
export let increaseProductCount = "INCREASE_PRODUCT_COUNT";
export let decreaseProductCount = "DECREASE_PRODUCT_COUNT";
let clearProducts = "CLEAR_PRODUCTS"


export const shopingCartReducer = (state=[],action) => {
    switch (action.type){
        case addProduct : {
            if(state.length > 0){
                let prevState = [...state]
                let currentProduct = prevState.filter( item => item.id == action.payload[0].id)
                if(currentProduct.length > 0 ){
                    ++currentProduct[0].count
                    let updatedState =  [...state]
                    console.log(currentProduct)
                    return(updatedState)

                }else{
                    let newState = [...state,...action.payload]
                    return newState
                }
            }else{
                let newState = [...action.payload]
                    return newState
            }
    
        }

        case deletProduct : {
            let newState = state.filter( item => item.id !== action.id)
            return newState
        }

        case increaseProductCount : {
            let prevState = [...state]
            let currentProduct = prevState.filter( item => item.id == action.id)
            ++currentProduct[0].count
            return prevState
        }

        case decreaseProductCount : {
            let prevState = [...state]
            let currentProduct = prevState.filter( item => item.id == action.id)
            if(currentProduct[0].count > 1){
                --currentProduct[0].count
            }
            return prevState
        }

        case clearProducts : {
            return []
        }

        
        default : {
            return state
        }
    }
}


export const addProductAction = (data) => {
    return {
        type : addProduct,
        payload : data
    }
}

export const deletProductAction = (id) => {
    return {
        type : deletProduct,
        id : id
    }
}

export const increaseProductCountAction = (id) => {
    return {
        type : increaseProductCount,
        id
    }
}

export const decreaseProductCountAction = (id) => {
    return {
        type : decreaseProductCount,
        id
    }
}

export const clearProductsAction = () => {
    return {type:clearProducts}
}