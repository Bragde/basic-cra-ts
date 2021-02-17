import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../api/user';

// WRITE UNIT TESTS FOR API HERE (COMMING SOON TO A APPLICATION NEAR YOU)

describe('Users API', () => {
    test('it returns an array of users', async () => {
        const expected = [{ name: 'Anna' }, { name: 'Bosse' }, { name: 'Carl' }, { name: 'Denise' }];

        jest.spyOn(window, 'fetch').mockImplementation(() => {
            const fetchResponse = {
                ok: true,
                json: () => Promise.resolve(expected),
            };
            return Promise.resolve(fetchResponse);
        });

        const json = await getAllUsers();

        expect(json).toMatchObject(expected);

        window.fetch.mockRestore();
    });
});
