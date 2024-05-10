import ApiService from "../../services/ApiService";

const apiService = new ApiService();

export default class CategoryService{

    getCatgory(){
        return apiService.get('survey/getCategory/')
    }

    addCategory(data){
        return apiService.post('survey/addCategory/', data)
    }

    activateCategory(data){
        return apiService.post('survey/activateCategory/', data)
    }

    deactivateCategory(data){
        return apiService.post('survey/deactivateCategory/', data)
    }

}