import React, { Component } from 'react'
import { createStore } from 'redux'

let ActionTypes = {
    increment: 'increment',
    decrement: 'decrement',
    changeBy: 'changeBy'
};

let counterReducer = (state = {count:0, amount:0}, action) => {
    switch (action.type) {
        case ActionTypes.increment:
            return {...state, count: state.count + 1};
        case ActionTypes.decrement:
            return {...state, count: state.count - 1};
        case ActionTypes.changeBy:
            return {...state, count: state.count + action.amount};
        default:
            return state;
    }
};

const store = createStore(counterReducer);
export {store as reduxStore} ;

export default class Counter extends Component {
    onIncrement(){
        store.dispatch({ type: ActionTypes.increment })
    }

    onDecrement(){
        store.dispatch({ type: ActionTypes.decrement })
    }

    onChangeBy(value){
        store.dispatch({ type: ActionTypes.changeBy, amount:value })
    }

    render() {
        return <div>{'redux counter: ' + store.getState().count}</div>;
    }
}

// function mapStateToProps(state) { ... }
// export default connect(mapStateToProps)(Counter);

setInterval( ()=>{ store.dispatch({ type: ActionTypes.increment }); }, 1000);