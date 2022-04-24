import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export const createSession = async (email, senha) => {
    return api.post('/sessoes', { email, senha });
}