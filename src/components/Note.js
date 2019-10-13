import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import Gravatar from './Gravatar';

const NoteContainer = styled.div({
    border: '1px solid gray',
    boxSizing: 'border-box',
    width: 220,
    height: 220,
});

const Note = ({ note, className }) => {
    const { text, date, authorId } = note;

    return (
        <NoteContainer className={className}>
            <div className="body">
                {text}
            </div>
            <div className="footer">
                <span>{date.toLocaleString()}</span>
                <Gravatar email={authorId} />
            </div>
        </NoteContainer>
    )
};

Note.propTypes = {
    note: PropTypes.shape({
        text: PropTypes.string,
        date: PropTypes.instanceOf(Date),
    })
}

export default Note;