import React from 'react'
import {DefaultStore, DefaultUIState} from 'ui-states'

const CounterStore = new DefaultStore("counter");
CounterStore.update({count: 0});

function increment() {
    CounterStore.update({count: CounterStore.getModel().count + 1});
}

function decrement() {
    CounterStore.update({count: CounterStore.getModel().count - 1});
}

function changeBy(amount) {
    CounterStore.update({count: CounterStore.getModel().count + amount});
}

export default class Counter extends React.Component {
    componentWillMount() {
        this.uiState = new DefaultUIState(this, null, [{store: CounterStore}]);
    }

    componentWillUnmount() {
        this.uiState.removeState();
    }

    render() {
        return <div>{this.uiState.get('counter.count')}</div>;
    }
}

setInterval(increment, 1000);