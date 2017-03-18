import React from 'react'
import ReactDOM from 'react-dom'

import RefluxCounter from 'reflux-counter'
import RefluxCounterWithoutActions from 'reflux-counter-without-actions'
import UIStatesCounter from 'uistates-counter'
import UIStatesCounterWithoutUIStates from 'uistates-counter-without-uistates'
import MobxCounter from 'mobx-counter'

ReactDOM.render(
    <div>
        <RefluxCounter/>
        <RefluxCounterWithoutActions/>
        <UIStatesCounter/>
        <UIStatesCounterWithoutUIStates/>
        <MobxCounter/>
    </div>
    ,
    document.getElementById('react-root')
);



import ReduxCounter, {reduxStore} from 'redux-counter'

const reduxAppRender = () =>
    ReactDOM.render(
    <div>
        <ReduxCounter/>
    </div>
    ,
    document.getElementById('react-redux-root')
);

reduxAppRender();
reduxStore.subscribe(reduxAppRender);
