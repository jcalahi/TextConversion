import React, { Component } from 'react';
import Utils from '../../utils';

const ContainerBlockEntity = ({ data }) => {
    const CustomElem = Utils.getElementType(data.type);

    function parser(tag, node) {
        var Tag = Utils.getElementType(tag);
        return <Tag>{node}</Tag>;
    }

    return ( // element tag should be dynamic
        <CustomElem>
            {data.text}
        </CustomElem>
    );
};

export default ContainerBlockEntity;
