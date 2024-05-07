import ApiService from "../../services/ApiService";

const apiService = new ApiService();

export default class UserService{
    
    getUser(){
        return apiService.get('auth/getUser/')
    }

    addUser(data){
        return apiService.post('auth/addUser/', data)
    }
}