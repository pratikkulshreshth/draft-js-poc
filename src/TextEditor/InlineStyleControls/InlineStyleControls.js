import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

import StyleControl from '../StyleControl';

const InlineStyleControlsStyled = styled.div`
    font-size: 14px;
    margin-bottom: 5px;
    user-select: none;
`;

const InlineStyleControls = ({ editorState, onToggle }) => {
    const INLINE_STYLES = [
        {
            label: 'Bold',
            style: 'BOLD'
        },
        {
            label: 'Italic',
            style: 'ITALIC'
        },
        {
            label: 'Underline',
            style: 'UNDERLINE'
        },
        {
            label: 'Monospace',
            style: 'CODE'
        }
    ];
    const currentStyle = editorState.getCurrentInlineStyle();

    return (
        <InlineStyleControlsStyled>
            {
                INLINE_STYLES.map(inlineStyle => (
                    <StyleControl
                        key={inlineStyle.label}
                        active={currentStyle.has(inlineStyle.style)}
                        label={inlineStyle.label}
                        onToggle={onToggle}
                        style={inlineStyle.style}
                    />
                ))
            }
        </InlineStyleControlsStyled>
    );
};

InlineStyleControls.propTypes = {
    editorState: PropTypes.object.isRequired,
    onToggle   : PropTypes.func.isRequired
};

export default InlineStyleControls;
