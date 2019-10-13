import styled from '@emotion/styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../actions/notes';
import Note from './Note';

const NotesContainer = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
});

const ChildNote = styled(Note)({
    marginTop: 10,
    marginLeft: 10,
});

const NotesBoard = () => {
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();

    const handleKeyDown = (e) => {
        switch (e.key) {
            case 'Enter':
                const text = e.target.value;

                dispatch(addNote(text, 'liseniss@gmail.com')); //TODO: temporary hardcoded user
                e.target.value = '';
                break;
            case 'Escape':
                e.target.value = '';
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <input placeholder="Take a Note" onKeyDown={handleKeyDown} />

            <NotesContainer>
                {notes.map(note =>
                    <ChildNote key={note.id} note={note} />
                )}
            </NotesContainer>

            Notes count: {notes.length}
        </div>
    )
}


export default NotesBoard;