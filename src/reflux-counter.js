import React from 'react'
import Reflux from 'reflux'

let Actions = Reflux.createActions([
    'increment',
    'decrement',
    'changeBy'
]);

class CounterStore extends Reflux.Store {
    constructor() {
        super();
        this.state = {count: 0};
        this.listenables = Actions;
    }

    onIncrement() {
        this.setState({count: this.state.count + 1});
    }

    onDecrement() {
        this.setState({count: this.state.count - 1});
    }

    onChangeBy(amount) {
        this.setState({count: this.state.count + amount});
    }
}

export default class Counter extends Reflux.Component {
    constructor(props) {
        super(props);
        this.store = CounterStore;
    }

    render() {
        return <div>{'reflux counter: ' + this.state.count}</div>;
    }
}

setInterval(Actions.increment, 1000);