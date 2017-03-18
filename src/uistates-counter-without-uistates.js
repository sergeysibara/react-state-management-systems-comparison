import React from 'react'
import {DefaultStore, DefaultUIState, Utils} from 'ui-states'

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
    state = CounterStore.getModelClone();

    componentWillMount() {
        this.id = Utils.Other.createGuid();
        CounterStore.subscribe(this.id, () => {
            this.setState(CounterStore.getModelClone())
        })
    }

    componentWillUnmount() {
        CounterStore.unSubscribe(this.id);
    }

    render() {
        return <div>{'uistates counter without uistates (with direct subscribe/unSubscribe to stores): ' + this.state.count}</div>;
    }
}

setInterval(increment, 1000);