import React, {Component, PropTypes} from 'react'
import mobx from 'mobx'
import mobxReact, {observer} from 'mobx-react';

let todoFactory = function (title) {

    let Todo={
        id: Math.random()
    };

    mobx.extendObservable(Todo,
        {
            title: title,
            finished: false,
            // toggleStatus: mobx.action(function toggleStatus () {
            //     todo.finished = !todo.finished;
            // })
        }
    );
    return Todo;
};


// class Todo {
//     id = Math.random();
//     // title = mobx.observable("");
//     // finished = mobx.observable(false);
// }



class TodoList {
    todos = mobx.observable([]);
    unfinishedTodoCount = mobx.computed(() => {
        return this.todos.filter(todo => !todo.finished).length;
    });
}

const store = new TodoList();
//
//
// const TodoView = observer( ({todo}) =>
//     <li>
//         <input
//             type="checkbox"
//             checked={todo.finished}
//             onClick={() => todo.finished = !todo.finished}
//         />
//         <span>{''+todo.title}</span>
//
//     </li>
// );

class TodoView0 extends Component {

    onClick=()=>{
        store.todos[0].finished =!store.todos[0].finished;
        console.log( store.todos);

        // this.props.todo.finished = ! this.props.todo.finished
    };

    render() {
        console.log('TodoView0 render');
        let todo = this.props.todo;
        return  <li>
            <input
                type="checkbox"
                checked={todo.finished}
                onClick={this.onClick}
                onChange={()=>{}}
            />
            <span>{''+todo.title}</span>

        </li>
    }
}

const TodoView = observer(TodoView0);


@observer
class TodoListView extends React.Component {
    render() {
        let todoList = this.props.todoList;
        return (
            <div>
                <ul>
                    {todoList.todos.map(todo =>
                        <TodoView todo={todo} key={todo.id}/>
                    )}
                </ul>
                <span>{'Tasks left: ' + todoList.unfinishedTodoCount}</span>
            </div>
        )
    }
}

store.todos.push(todoFactory('todoN'));
store.todos[0].finished = true;

export {store as mobxStore}
export default TodoListView


mobx.autorun((todos) => {
    console.log("Tasks left: " + todos.unfinishedTodoCount)
});

// export default ()=> {
//     return (
//     );
// }


//
//let sampleArray = mobx.observable(["Matt", "Kelly"]);

// let ListView = observer(({list})=> {
//         return (
//             <ul>
//                 {list.map((item) =>
//                     <div key={item}>{item}</div>
//                 )}
//             </ul>
//         );
//     }
// );
//export default ListView;
//export {sampleArray};

// import ListView, {sampleArray} from 'mobx-counter'
//
// ReactDOM.render(
//     <ListView list = {sampleArray}/>,
//     document.getElementById('react-mobx-root')
// );