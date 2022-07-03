import axios from 'axios';

const getBackendUrl = () => {
    const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3333"
    console.log("REACT_APP_BACKEND_URL: " + REACT_APP_BACKEND_URL);
    return REACT_APP_BACKEND_URL;
};

export const api = axios.create({
    baseURL: getBackendUrl(),
});

export const sayHello = async() => {
    const response = await api.get('/hello');
    console.log(response.data);
}

// ############### SESSIONS ###############
export const createSession = async (email, senha) => {
    try{
        const response = api.post('/sessoes', {
            email,
            senha
        });
        return response;
    }catch(err){
        console.log("Erro ao criar sessão");
    }
}

// ############### USERS ###############
export const createUser = async (nome, sobrenome, email, senha) => {
    try{
        const response = api.post('/usuarios', {
            nome,
            sobrenome,
            email,
            senha
        });
        return response;
    }catch(err){
        console.log("Erro ao criar usuário");
    }
}

// ############### PRODUCTS ###############
export const listProducts = async () => {
    try{
        return api.get('/produtos');
    }catch(err){
        console.error("Erro ao listar produtos: ", err);
    }
}