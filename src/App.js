import React,{Component} from 'react';
import TodoApp from './TodoApp/Todo';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import allReducers from './TodoApp/reducers/todoReducer'

class App extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const store = createStore(allReducers);
        return(
            <Provider store={store} >
                <div>
                 <TodoApp/>
                </div>
                 
            </Provider>
           
        )
    }

}
export default App;