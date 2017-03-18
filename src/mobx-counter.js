import React, {Component, PropTypes} from 'react'
import mobx from 'mobx'
import mobxReact, {observer} from 'mobx-react';

let sampleArray = mobx.observable(["Matt", "Kelly"]);

let ListView = observer(({list})=> {
        return (
            <ul>
                {list.map((item) =>
                    <div key={item}>{item}</div>
                )}
            </ul>
        );
    }
);


export default ListView;
export {sampleArray};
