import React from 'react';
import Utils from '../../utils';

const ContainerTitle = (props) => {
    const CustomTag = Utils.getElementType(props.type);
    
    return (
        <CustomTag>{props.name}</CustomTag>
    );
};

export default ContainerTitle;