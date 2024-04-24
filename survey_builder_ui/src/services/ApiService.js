import axios from "axios";

const baseUrl = 'http://192.168.1.10:9090/'

class ApiService {

    get(url) {
        return axios.get(`${baseUrl}${url}`);
    }

    post(url, data) {
        return axios.post(`${baseUrl}${url}`, data )
    }
};

export default ApiService;