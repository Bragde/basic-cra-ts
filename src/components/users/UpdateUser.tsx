import React, { useEffect, useState } from 'react';
import { IUser } from '../../interface/interface';
import { getUserById, updateUser } from '../../api/user';

export const UpdateUser = (props: { userId: string; updateUserList(): void }): JSX.Element => {
    const [user, setUser] = useState<IUser>({ id: '', name: '' });

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        setUser(await getUserById(props.userId));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((user) => ({ ...user, [e.target.name]: e.target.value }));
        console.log(user.name);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await updateUser(user);
        props.updateUserList();
    };

    return (
        <>
            <h3>Update user</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
                {/* TODO Fix cancel buttons */}
                <button>Cancel</button>
            </form>
        </>
    );
};
