//API requests
import axios from 'axios';
const USERS_URL = 'https://hackathon.cyclic.app/api/v1/news/editors';

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
        return response.data.data;
    } catch (error) {
        console.error('Get users error', error);
        throw new Error('API ERROR MSG');
    }
}

export const logInUser = async (email, password) => {
    try {

        const users = await getUsers();
        const userData = users.find((user) => user.email === email && user.password === password);
        const userId = userData.id;
        const response = await axios.post(`${USERS_URL}/${userId}`, {
            email: email,
            password: password
        });
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
