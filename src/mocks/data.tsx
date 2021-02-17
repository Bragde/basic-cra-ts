import { IUser } from '../interface/interface';

export const mockUsers = (): IUser[] => {
    return [
        { id: '1', name: 'Anna' },
        { id: '2', name: 'Bosse' },
    ];
};
