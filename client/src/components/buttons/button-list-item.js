import React from 'react';
import Util from '../../helper';

const ButtonListItem = ({ buttonName, onButtonClick, selectedTask }) => {
    let btn = Util.formatString(buttonName);
    
    return (
        <li className={(btn === selectedTask ? 'active' : '')} onClick={() => onButtonClick(btn)}>
            <a href="javascript:void(0)">{buttonName}</a>
        </li>
    );
};

export default ButtonListItem;