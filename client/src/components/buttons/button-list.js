import React from 'react';
import Util from '../../helper';
import ButtonListItem from './button-list-item';

const ButtonList = ({ onButtonClick }) => {

    let tasks = Util.buttonList.map((name, idx) => {
        return <ButtonListItem buttonName={name} key={idx} onButtonClick={onButtonClick} />;
    });

    return (
        <ul className="nav nav-tabs">
            {tasks}
        </ul>
    );
};

export default ButtonList;