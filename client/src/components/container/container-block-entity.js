import React, { Component } from 'react';
import Utils from '../../utils';

import ListItem from './container-block-list-item';

const ContainerBlockEntity = ({ elementType, text, listItem }) => {
    let HtmlElement = elementType;

    if (listItem && listItem.length > 0) {
        let items = listItem.map((e, idx) => {
            return <ListItem text={e} key={`${HtmlElement}-${idx}`} />
        });

        return <HtmlElement>{items}</HtmlElement>;
    }

    return (
        <HtmlElement>{text}</HtmlElement>
    );
};

export default ContainerBlockEntity;
