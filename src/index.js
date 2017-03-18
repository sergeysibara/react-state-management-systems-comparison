import React from 'react'
import ReactDOM from 'react-dom'

import RefluxCounter from 'reflux-counter'
import UIStateCounter from 'uistates-counter'
import RefluxCounterWithoutActions from 'reflux-counter-without-actions'

// ReactDOM.render(
//     <div>
//         <RefluxCounter/>
//         <UIStateCounter/>
//         <RefluxCounterWithoutActions/>
//     </div>
//     ,
//     document.getElementById('react-root')
// );
//
//
//
// import ReduxCounter, {reduxStore} from 'redux-counter'
//
// const reduxAppRender = () =>
//     ReactDOM.render(
//     <div>
//         <ReduxCounter/>
//     </div>
//     ,
//     document.getElementById('react-redux-root')
// );
//
// reduxAppRender();
// reduxStore.subscribe(reduxAppRender);


import ListView, {sampleArray} from 'mobx-counter'

ReactDOM.render(
    <ListView list = {sampleArray}/>,
    document.getElementById('react-mobx-root')
);