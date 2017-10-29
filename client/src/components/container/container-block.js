import React, { Component } from 'react';
import Utils from '../../utils';

import BlockEntity from './container-block-entity';
import ListItem from './container-block-list-item';

const ContainerBlock = ({ rawContent }) => {
    let blocks = [];
    /**
     * @TODO: 
     * This works, but I will likely refactor to keep it DRY and 
     * less procedural
     */
    if (rawContent.blocks) {
        var entities = rawContent.blocks;
        var unorderedList = Utils.getListItem(entities, 'unordered-list-item');
        var orderedList = Utils.getListItem(entities, 'ordered-list-item');

        entities.forEach((entity, idx) => {
            var eType = Utils.getElementType(entity.type);

            if (eType !== 'ul' && eType !== 'ol') {
                blocks.push(
                    <BlockEntity 
                        elementType={eType}
                        text={entity.text}
                        key={`${eType}-${idx}`}
                    />
                );
            } else if (eType === 'ul') {
                if (Utils.findPropIndex(blocks, eType) === -1) {
                    blocks.push(
                        <BlockEntity 
                            elementType={eType}
                            listItem={unorderedList}
                            key={`${eType}-${idx}`}
                        />
                    );
                }
            }  else if (eType === 'ol') {
                if (Utils.findPropIndex(blocks, eType) === -1) {
                    blocks.push(
                        <BlockEntity 
                            elementType={eType}
                            listItem={orderedList}
                            key={`${eType}-${idx}`}
                        />
                    );
                }
            }
        });
    }

    return (
        <article>
            {blocks}
        </article>
    );
};

export default ContainerBlock;