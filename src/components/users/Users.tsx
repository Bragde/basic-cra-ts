import React, { useState, useEffect } from 'react';
import { getAllUsers, deleteUser } from '../../api/user';
import { IUser } from '../../interface/interface';
import { UpdateUser } from './UpdateUser';
import { AddUser } from './AddUser';

export const Users = (): JSX.Element => {
    const [state, setState] = useState({
        displayAddUser: false,
        displayUpdateUser: false,
        userToUpdateId: '',
    });
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        setState((state) => ({ ...state, displayAddUser: false, displayUpdateUser: false, userToUpdateId: '' }));
        setUsers(await getAllUsers());
    };

    const onAddUser = () => setState((state) => ({ ...state, displayAddUser: true }));

    const onUpdateUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const { value: userToUpdateId } = e.currentTarget;
        setState((state) => ({ ...state, displayUpdateUser: true, userToUpdateId }));
    };

    const onDeleteUser = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const { value: userToDeleteId } = e.currentTarget;
        await deleteUser(userToDeleteId);
        init();
    };

    return (
        <>
            <h2>THIS IS THE CRUD PAGE</h2>
            <p>This page displays a collection of users in order to demonstrate CRUD functionality</p>
            <h3>List of all users</h3>
            <table className="Users-table">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <button value={user.id} onClick={onUpdateUser}>
                                Update
                            </button>
                            <button value={user.id} onClick={onDeleteUser}>
                                Delete
                            </button>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={onAddUser}>Add User</button>
            {state.displayAddUser && <AddUser updateUserList={init} />}
            {state.displayUpdateUser && <UpdateUser userId={state.userToUpdateId} updateUserList={init} />}
        </>
    );
};
