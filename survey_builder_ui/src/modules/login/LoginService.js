import ApiService from "../../services/ApiService";

const apiService = new ApiService();

class LoginService{

    verifyUser(data){
        return apiService.post('useraccount/verifyUser/', data)
    }

    addNewUser(data){
        return apiService.post('useraccount/addUser/', data)
    }

};

export default LoginService;