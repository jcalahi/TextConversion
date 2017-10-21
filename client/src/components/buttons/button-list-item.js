import React from 'react';
import Util from '../../helper';

const ButtonListItem = ({ buttonName, onButtonClick }) => {
    return (
        <li className="" onClick={() => onButtonClick(Util.formatString(buttonName))}>
            <a href="javascript:void(0)">{buttonName}</a>
        </li>
    );
};

export default ButtonListItem;