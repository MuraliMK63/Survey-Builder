import ApiService from "../../services/ApiService";

const apiService = new ApiService();

class LoginService{

    verifyUser(data){
        return apiService.post('auth/verifyUser/', data)
    }

    addNewUser(data){
        return apiService.post('auth/addUser/', data)
    }

};

export default LoginService;