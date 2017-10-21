import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

import Util from './helper';
import Title from './components/content/content-title';
import ButtonList from './components/buttons/button-list';

class App extends Component {
    constructor() {
        super();

        this.state = {
            editorState: EditorState.createEmpty()
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }
    render() {
        return (
            <div>
                <Title name="JSON to HTML" type="h3"></Title>
                <ButtonList 
                    onButtonClick={this.onButtonClick} 
                />
                <p></p>
                <Editor 
                    editorState={this.state.editorState} 
                    onChange={editorState => this.setState({editorState})}
                />
            </div>
        );
    }
    onButtonClick(name) {
        let self = this;
        let url = Util.path + name

        fetch(url)
            .then((response) => { return response.json(); })
            .then((content) => { 
                self.setState({
                    editorState: EditorState.createWithContent(convertFromRaw(content))
                });
            }
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);