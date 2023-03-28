//API requests
import axios from 'axios';
const USERS_URL = 'http://localhost:5000';

export const registerUser = async (submittedData) => {
    try {
        const response = await axios.post(USERS_URL, submittedData);
        console.log('registration response.data', response.data);
    } catch (error) {
        console.error('Registration error', error);
        throw new Error('API ERROR MSG');
    }
};

export const getUsers = async () => {
    try {
        const response = await axios.get(USERS_URL);
        console.log('getUsers response.data');
        return response.data;
    } catch (error) {
        console.error('Get users error', error);
        throw new Error('API ERROR MSG');
    }
}

export const logInUser = async (username, password) => {
    try {
        const response = await axios.get(USERS_URL);
        const user = response.data
            .find((user) => user.username === username && user.password === password);
        console.log('login response.data', response.data);
        return response.data;
    } catch (error) {
        console.error('Login error', error);
        throw new Error('API ERROR MSG');
    }
}

export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${USERS_URL}/${userId}`);
        console.log('deleteUser response.data', response.data);
    } catch (error) {
        console.Error('delete user error', error)
        throw new Error('API ERROR MSG');
    }
}
