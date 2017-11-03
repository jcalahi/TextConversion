import React from 'react';
import Utils from '../../utils';

import BlockEntity from './container-block-entity';
import ListItem from './container-block-list-item';

const ContainerBlock = ({ rawContent }) => {
    let blocks = [];

    if (rawContent.blocks) {
        let entities = rawContent.blocks;

        blocks = entities.map((entity, idx, arr) => {
            let eType = Utils.getElementType(entity.type);
            let isListItem = eType === 'ul' || eType === 'ol' ? true : false;
            let listItems = isListItem === true ? Utils.getListItem(arr, entity.type) : null;

            return (
                <BlockEntity
                    inlineStyles={entity.inlineStyleRanges}
                    elementType={eType}
                    listItem={listItems}
                    text={isListItem ? '' : entity.text}
                    key={entity.key}
                />
            );
        }).reduce((prev, curr) => {
            let elementType = curr.props.elementType;
            let isListItem = elementType === 'ul' || elementType === 'ol' ? true : false;
            let blockIndex = Utils.findPropIndex(prev, elementType);

            if (isListItem) {
                if (blockIndex === -1) {
                    prev.push(curr);
                }
            } else {
                prev.push(curr);
            }
            
            return prev;
        }, []);
    }

    return (
        <article>
            {blocks}
        </article>
    );
};

export default ContainerBlock;