import React, { Component } from 'react';
import BlockEntity from './container-block-entity';
import Utils from '../../utils';

const ContainerBlock = ({ rawContent }) => {
    let blocks = [];

    if (rawContent.blocks) {
        blocks = rawContent.blocks.map((block) => {
            return (
                <BlockEntity 
                    data={block} 
                    key={block.key}
                />
            );
        });
    }

    return (
        <article>
            {blocks}
        </article>
    );
};

export default ContainerBlock;