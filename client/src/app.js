import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, RichUtils } from 'draft-js';

class App extends Component {
    constructor() {
        super();

        // fetch('task1')
        //     .then((response) => { return response.json(); })
        //     .then((res) => { console.log(res); });

    }
    render() {
        return (
            <div>Something</div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);