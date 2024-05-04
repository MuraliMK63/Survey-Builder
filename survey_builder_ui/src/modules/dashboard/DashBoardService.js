import ApiService from "../../services/ApiService";

const apiService = new ApiService();

export default class DashBoardService {
    
    recentDocument() {
        return apiService.get('dashboard/recentDocuments/')
    }

    surveyCount(data){
        return apiService.post('dashboard/surveyCount/', data)
    }
    
}