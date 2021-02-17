import { IUser } from '../interface/interface';

export const URL_USERS = 'http://localhost:3030/api/users';

export const getAllUsers = (): Promise<IUser[]> => {
    return fetch(`${URL_USERS}`).then((response) => response.json());
};

export const getUserById = (id: string): Promise<IUser> => {
    return fetch(`${URL_USERS}/${id}`).then((response) => response.json());
};

export const createUser = (data: IUser): Promise<{ returnUrl: string }> => {
    return fetch(`${URL_USERS}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application-json' },
        body: JSON.stringify(data),
    }).then((response) => response.json());
};

export const updateUser = (data: IUser): Promise<{ returnUrl: string }> => {
    return fetch(`${URL_USERS}/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application-json' },
        body: JSON.stringify(data),
    }).then((response) => response.json());
};

export const deleteUser = (id: string): Promise<void> => {
    return fetch(`${URL_USERS}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application-json' },
    }).then((response) => response.json());
};
