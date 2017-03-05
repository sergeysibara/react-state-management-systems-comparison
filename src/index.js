import React from 'react'
import ReactDOM from 'react-dom'

import RefluxCounter from 'reflux-counter'
import UIStateCounter from 'uistates-counter'
import RefluxCounterWithoutActions from 'reflux-counter-without-actions'


ReactDOM.render(
    <div>
        <RefluxCounter/>
        <UIStateCounter/>
        <RefluxCounterWithoutActions/>
    </div>
    ,
    document.getElementById('react-root')
);
