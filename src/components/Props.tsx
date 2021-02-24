import React from 'react';
import { withRouter } from 'react-router-dom';

export const Props = (props: { text: string }): JSX.Element => {
    return (
        <>
            <h2>THIS IS THE PROPS PAGE</h2>
            <p>{props.text}</p>
        </>
    );
};
