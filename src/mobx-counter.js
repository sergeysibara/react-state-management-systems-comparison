import React, {Component} from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react';

class CounterObject {
    @observable count = 0;
}

const CounterStore = new CounterObject();

@observer
export default class Counter extends Component {
    render() {
        return <div>{'mobx counter: ' + CounterStore.count}</div>;
    }
}

function increment() {
    CounterStore.count++;
}

function decrement() {
    CounterStore.count--;
}

function changeBy(amount) {
    CounterStore.count += amount;
}

setInterval(increment, 1000);