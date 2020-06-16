import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoList: [],
            activeItem: {
                id: null,
                title: '',
                completed: false,
            },
            editing: false,
        }
        // this.fetchTasks = this.fetchTasks.bind(this)
    };

    componentDidMount() {
        this.fetchTasks()
    }

    fetchTasks() {
        console.log('Fetching...')
    }

    render() {
        return(
            <div className="container">
                <div id="task-container">
                    <div id="form-wrapper">
                         <form id="form">
                            <div className="flex-wrapper">
                                <div style={{flex: 6}}>
                                    <input className="form-control" id="title" type="text" name="title" placeholder="Add task.." />
                                </div>

                                 <div style={{flex: 1}}>
                                    <input id="submit" className="btn btn-warning" type="submit" name="Add" />
                                 </div>
                            </div>
                        </form>
                    </div>

                    <div id="list-wrapper">
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
