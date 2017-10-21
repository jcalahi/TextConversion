import React from 'react';
import Util from '../../helper';

const ContentTitle = (props) => {
    const CustomTag = `${Util.headerTag[props.type]}`;

    return (
        <CustomTag>{props.name}</CustomTag>
    );
};

export default ContentTitle;