import axios from "axios";

const baseUrl = 'http://127.0.0.1:8080/'

class ApiService {

    get(url) {
        return axios.get(`${baseUrl}${url}`);
    }

    post(url, data) {
        return axios.post(`${baseUrl}${url}`, data )
    }
};

export default ApiService;