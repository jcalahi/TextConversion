import React from 'react';
import { formatString } from '../../utils';

const ButtonListItem = ({ buttonName, onButtonClick, selectedTask }) => {
    let btn = formatString(buttonName);
    
    return (
        <li className={(btn === selectedTask ? 'active' : '')} onClick={() => onButtonClick(btn)}>
            <a href="javascript:void(0)">{buttonName}</a>
        </li>
    );
};

export default ButtonListItem;