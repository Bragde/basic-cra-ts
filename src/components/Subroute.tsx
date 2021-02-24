import React from 'react';
import { useParams } from 'react-router-dom';

export const Subroute = () => {
    const { subrouteId } = useParams<{ subrouteId: string }>();

    return <h3>Requested subroute: {subrouteId}</h3>;
};
