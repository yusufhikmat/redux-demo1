const redux = require('redux')
const createStore =  redux.createStore

//action
const buyCake = "buy-cake"

function cake(){
    return{ 
    type:buyCake,
    info:"first redux action"
}
}

//state
const initialState = {
    numOfCake:10
}

//reducer

const reducer=(state = initialState, action)=>{
    switch(action.type){
        case buyCake:return{
            ...state,
            numOfCake:state.numOfCake - 1
        }
        default : return state
    }
}

const store = createStore(reducer)
console.log('initialState', store.getState())
const unsubscribe = store.subscribe(()=>console.log('updated state', store.getState()))
store.dispatch(cake())
store.dispatch(cake())
unsubscribe()