import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyleControlStyled = styled.div`
    color: ${({ active }) => active ? '#000' : '#565656'};
    cursor: pointer;
    font-weight: ${({ active }) => active ? 600 : 'normal'};
    margin-right: 16px;
    padding: 2px 0;
    display: inline-block;
`;

const StyleControl = ({ active, label, onToggle, style }) => {
    const onMouseDown = (e) => {
        e.preventDefault();
        onToggle(style);
    };

    return (
        <StyleControlStyled active={active} onMouseDown={onMouseDown}>
            {label}
        </StyleControlStyled>
    );
};

StyleControl.propTypes = {
    active  : PropTypes.bool,
    label   : PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
    style   : PropTypes.string.isRequired
};

StyleControl.defaultProps = {
    active: false
};

export default StyleControl;
