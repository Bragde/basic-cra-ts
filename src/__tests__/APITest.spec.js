import { getUsers } from '../api/user';

// beforeAll(() => {
//     require('whatwg-fetch');
// });

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

        const json = await getUsers();

        expect(json).toMatchObject(expected);

        window.fetch.mockRestore();
    });
});
