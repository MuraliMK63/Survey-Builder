import ApiService from "../../services/ApiService";

const apiService = new ApiService();

export default class SurveyService{

    getCategory(){
        return apiService.get('survey/getCategory/')
    }
    
    addCategory(data){
        return apiService.post('survey/addSurvey/', data)
    }

    getSurveyCode(data){
        return apiService.post('survey/getSurveyCode/', data)
    }

    getSurvey(){
        return apiService.get('survey/getSurvey/')
    }

    addSurvey(data){
        return apiService.post('survey/addSurvey/', data)
    }

    getSurveyDetails(data){
        return apiService.post('survey/getSurveyDetails/', data)
    }

    saveSurvey(data){
        return apiService.post('survey/saveSurvey/', data)
    }

    assignSurvey(data){
        return apiService.post('survey/assignSurvey/', data)
    }

    activateSurveys(data){
        return apiService.post('survey/activateSurvey/', data)
    }

    deactivateSurveys(data){
        return apiService.post('survey/deactivateSurvey/', data)
    }

}