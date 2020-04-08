import { Editor, EditorState, RichUtils } from 'draft-js';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';

const TextEditorBody = styled.div`
  border-top: 1px solid #ddd;
  cursor: text;
  min-height: 300px;
  padding: 10px;
`;

const TextEditorControls = styled.div`
  background: #ccc;
  padding: 10px;
`;

const TextEditorContainer = styled.div`
  background: #ffffff;
  border: 1px solid #ddd;
`;

const TextEditor = (props) => {
    console.log('Text Editor props --- ', props);

    const editorRef = React.createRef();
    const [editorState, setEditorState] = React.useState(
        EditorState.createEmpty()
    );

    const styleMap = {
        CODE: {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            padding        : 2
        }
    };

    const blockStyleFn = (block) => {
        if (block.getType() === 'blockquote') {
            return 'RichEditor-blockquote';
        }

        return null;
    };

    const handleKeyCommand = (command) => {
        const newEditorState = RichUtils.handleKeyCommand(editorState, command);
        if (newEditorState) {
            setEditorState(newEditorState);
            return true;
        }
        return false;
    };

    const onFocus = () =>{
        editorRef.current.focus();
    };

    const onTab = (e) => {
        setEditorState(RichUtils.onTab(e, editorState, 4));
    };

    const onToggleBlockStyle = (blockType) => {
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };

    const onToggleInlineStyle = (inlineStyle) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    };

    return (
        <TextEditorContainer>
            <TextEditorControls>
                <BlockStyleControls editorState={editorState} onToggle={onToggleBlockStyle} />
                <InlineStyleControls editorState={editorState} onToggle={onToggleInlineStyle} />
            </TextEditorControls>
            <TextEditorBody onClick={onFocus}>
                <Editor
                    blockStyleFn={blockStyleFn}
                    customStyleMap={styleMap}
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={setEditorState}
                    onTab={onTab}
                    ref={editorRef}
                    spellCheck
                />
            </TextEditorBody>
        </TextEditorContainer>
    );
};

TextEditor.propTypes = {

};

export default TextEditor;
