import React, { useState, useEffect } from 'react';
import { getUsers } from '../api/user';
import { IUsers } from '../interface/interface';
import { URL_USERS } from '../constants/constants';

export const UserList = (): JSX.Element => {
    const [users, setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        // init();
        fetch(URL_USERS)
            .then((response) => response.json())
            .then((response) => setUsers(response));
    }, []);

    const init = async () => setUsers(await getUsers());

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};
