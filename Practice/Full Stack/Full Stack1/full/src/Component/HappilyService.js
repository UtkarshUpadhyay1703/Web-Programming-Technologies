import axios from "axios";

class HappilyService{
    constructor(){
        this.baseUrl="http://localhost:4000/";
    }
    getHappiness(){
        return axios.get(this.baseUrl+"happy");
    }
    getAddHappiness(happ){
        return axios.post(this.baseUrl+"happy",happ);
    }
}
export default new HappilyService();