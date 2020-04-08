import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";

import StyleControl from '../StyleControl';

const BlockStyleControlsStyled = styled.div`
    font-size: 14px;
    margin-bottom: 5px;
    user-select: none;
`;

const BlockStyleControls = ({ editorState, onToggle }) => {
    const selection = editorState.getSelection();
    const BLOCK_TYPES = [
        {
            label: 'H1',
            style: 'header-one'
        },
        {
            label: 'H2',
            style: 'header-two'
        },
        {
            label: 'H3',
            style: 'header-three'
        },
        {
            label: 'H4',
            style: 'header-four'
        },
        {
            label: 'H5',
            style: 'header-five'
        },
        {
            label: 'H6',
            style: 'header-six'
        },
        {
            label: 'Blockquote',
            style: 'blockquote'
        },
        {
            label: 'UL',
            style: 'unordered-list-item'
        },
        {
            label: 'OL',
            style: 'ordered-list-item'
        },
        {
            label: 'Code Block',
            style: 'code-block'
        }
    ];

    const selectionBlockType = editorState.getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <BlockStyleControlsStyled>
            {
                BLOCK_TYPES.map(blockType => (
                    <StyleControl
                        key={blockType.label}
                        active={blockType.style === selectionBlockType}
                        label={blockType.label}
                        onToggle={onToggle}
                        style={blockType.style}
                    />
                ))
            }
        </BlockStyleControlsStyled>
    );
};

BlockStyleControls.propTypes = {
    editorState: PropTypes.object.isRequired,
    onToggle   : PropTypes.func.isRequired
};

export default BlockStyleControls;
