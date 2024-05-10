import ApiService from "../../services/ApiService";

const apiService = new ApiService();

export default class UserService{
    
    getUser(){
        return apiService.get('auth/getUser/')
    }

    addUser(data){
        return apiService.post('auth/addUser/', data)
    }

    activateUser(data){
        return apiService.post('auth/activateUser/', data)
    }

    deactivateUser(data){
        return apiService.post('auth/deactivateUser/', data)
    }
}