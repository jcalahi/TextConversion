import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ButtonList from './components/button/button-list';
import ContainerTitle from './components/container/container-title';
import ContainerBlock from './components/container/container-block';

import { path } from './constants';

class App extends Component {
    constructor() {
        super();

        this.state = {
            rawContent: {},
            selectedTask: null
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }
    render() {
        return (
            <div>
                <ContainerTitle name="JSON to HTML" type="header-three" />
                <ButtonList 
                    onButtonClick={this.onButtonClick}
                    selectedTask={this.state.selectedTask}
                />
                <p></p>
                <ContainerBlock rawContent={this.state.rawContent} />
            </div>
        );
    }
    onButtonClick(name) {
        let self = this;
        let url = path + name

        fetch(url)
            .then((response) => { return response.json(); })
            .then((content) => { 
                self.setState({
                    rawContent: content,
                    selectedTask: name
                });
            }
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
