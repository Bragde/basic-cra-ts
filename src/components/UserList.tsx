import React, { useState, useEffect } from 'react';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../api/user';
import { IUser } from '../interface/interface';

export const UserList = (): JSX.Element => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [userToCreate, setUserToCreate] = useState<IUser>({ id: '', name: '' });
    const [userToUpdate, setUserToUpdate] = useState<IUser>({ id: '', name: '' });

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        setUsers(await getAllUsers());
    };

    // CREATE USER (create | get, post)
    const handleChangeAddUser = async (e: any) => {
        setUserToCreate((userToAdd) => ({ ...userToAdd, [e.target.name]: e.target.value }));
    };
    const handleSubmitAddUser = async (e: any) => {
        e.preventDefault();
        await createUser(userToCreate);
        setUserToCreate({ id: '', name: '' });
        init();
    };

    //UPDATE USER (read, update | get:id, put)
    const getUserToUpdate = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setUserToUpdate(await getUserById(e.currentTarget.value));
    };
    const handleChangeUpdateUser = (e: any) => {
        setUserToUpdate((userToUpdate) => ({ ...userToUpdate, [e.target.name]: e.target.value }));
    };
    const handleSubmitUpdateUser = async (e: any) => {
        e.preventDefault();
        await updateUser(userToUpdate);
        setUserToUpdate({ id: '', name: '' });
        init();
    };

    // DELETE USER (delete)
    const handleDeleteUser = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        await deleteUser(e.currentTarget.value);
        init();
    };

    return (
        <>
            <h3>Get list of all users</h3>
            <ul style={{ listStyleType: 'none' }}>
                {users.map((user) => (
                    <li key={user.id}>
                        Id: {user.id}, Name: {user.name}
                        <button value={user.id} onClick={getUserToUpdate}>
                            Update
                        </button>
                        <button value={user.id} onClick={handleDeleteUser}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <h3>Add user</h3>
            <form onSubmit={handleSubmitAddUser}>
                <label>
                    Id:
                    <input type="text" name="id" value={userToCreate.id} onChange={handleChangeAddUser} />
                </label>
                <label>
                    Name:
                    <input type="text" name="name" value={userToCreate.name} onChange={handleChangeAddUser} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <h3>Update user</h3>
            <form onSubmit={handleSubmitUpdateUser}>
                <label>
                    Name:
                    <input type="text" name="name" value={userToUpdate.name} onChange={handleChangeUpdateUser} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};
