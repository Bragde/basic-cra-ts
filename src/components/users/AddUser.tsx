import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';
import { createUser } from '../../api/user';
import { IUser } from '../../interface/interface';

export const AddUser = (props: { updateUserList(): void }) => {
    const [user, setUser] = useState<IUser>({ id: '', name: '' });

    const onChange = async (e: any) => {
        setUser((userToCreate) => ({ ...userToCreate, [e.target.name]: e.target.value }));
    };

    const onSubmit = async (e: any) => {
        e.preventDefault();
        await createUser(user);
        props.updateUserList();
    };

    return (
        <>
            <Prompt
                when={user.id != '' || user.name != ''}
                message="If you leave this page without submiting Add User data, the data will be lost"
            />
            <h3>Add user</h3>
            <form onSubmit={onSubmit}>
                <label>
                    Id:
                    <input type="text" name="id" value={user.id} onChange={onChange} />
                </label>
                <label>
                    Name:
                    <input type="text" name="name" value={user.name} onChange={onChange} />
                </label>
                <input type="submit" value="Submit" />
                <button>Cancel</button>
            </form>
        </>
    );
};
