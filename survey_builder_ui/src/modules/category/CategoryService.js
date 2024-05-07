import ApiService from "../../services/ApiService";

const apiService = new ApiService();

export default class CategoryService{

    getCatgory(){
        return apiService.get('survey/getCategory/')
    }

    addCategory(data){
        return apiService.post('survey/addCategory/', data)
    }

}