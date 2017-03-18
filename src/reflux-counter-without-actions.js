import React from 'react'
import Reflux from 'reflux'

const CounterStore = new Reflux.Store();
CounterStore.setState({count: 0});

function increment() {
    CounterStore.setState({count: CounterStore.state.count + 1});
}

function decrement() {
    CounterStore.setState({count: CounterStore.state.count - 1});
}

function changeBy(amount) {
    CounterStore.setState({count: CounterStore.state.count + amount});
}

export default class Counter extends Reflux.Component {
    constructor(props) {
        super(props);
        this.store = CounterStore;
    }

    render() {
        return <div>{'reflux counter without actions: ' + this.state.count}</div>;
    }
}

setInterval(increment, 1000);