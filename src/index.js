import React from 'react'
import ReactDOM from 'react-dom'

import RefluxCounter from 'reflux-counter';
import UIStateCounter from 'uistates-counter';

ReactDOM.render(
    <div>
        <RefluxCounter/>
        <UIStateCounter/>
    </div>
    ,
    document.getElementById('react-root')
);
