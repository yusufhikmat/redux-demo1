const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore =  redux.createStore
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


//action
const buyCake = "buy-cake"
const iceCream = "buyBestIcecream"
function cake(){
    return{ 
    type:buyCake,
    info:"first redux action"
}
}
function buyIcecream(){
    return{
        type:iceCream
    }
    
}

//state
const initialStateCake = {
    numOfCake:10,
    
}
const initialIcecreamState={
    numOfIcecream:20
}

//reducer

const cakeReducer=(state = initialStateCake, action)=>{
    switch(action.type){
        case buyCake:return{
            ...state,
            numOfCake:state.numOfCake - 1
        }
        
        default : return state
    }
}

const iceCreamReducer = (state=initialIcecreamState, action)=>{
    switch(action.type){
        case iceCream:return{
            ...state,
            numOfIcecream:state.numOfIcecream - 1
        }
        default:return state
    }
}
const combinedStore = combineReducer({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store = createStore(combinedStore, applyMiddleware(logger))
console.log('initialState', store.getState())
const unsubscribe = store.subscribe(()=>{})
store.dispatch(cake())
store.dispatch(cake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()