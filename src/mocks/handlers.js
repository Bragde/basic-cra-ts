import { rest } from 'msw';
import { URL_USERS } from '../api/user';
import { mockUsers } from './data';

// Create in memory mock database
let users = mockUsers();

// Handle api requests and mock responses
export const handlers = [
    // Get user by id
    rest.get(`${URL_USERS}/:id`, (req, res, ctx) => {
        const { id } = req.params;
        return res(ctx.json(users.find((x) => x.id === id)));
    }),

    // Get all users
    rest.get(`${URL_USERS}`, (req, res, ctx) => {
        return res(ctx.json(users));
    }),

    // Create new user
    rest.post(`${URL_USERS}`, (req, res, ctx) => {
        const { id } = req.body.id;
        users.push(req.body);
        return res(ctx.json({ returnUrl: `${URL_USERS}/${id}` }));
    }),

    // Update user
    rest.put(`${URL_USERS}/:id`, (req, res, ctx) => {
        const { id } = req.params;
        users = users.map((x) => (x.id === id ? req.body : x));
        return res(ctx.json({ returnUrl: `${URL_USERS}/${id}` }));
    }),

    // Delete user
    rest.delete(`${URL_USERS}/:id`, (req, res, ctx) => {
        const { id } = req.params;
        users = users.filter((x) => x.id !== id);
        return res(ctx.json({}));
    }),
];
