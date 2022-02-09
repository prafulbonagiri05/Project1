import axios from "axios";

const IssueBill_URL = "http://localhost:8089/IssueBills";


class IssueBillService{
    getIssueBills(){
        return axios.get(IssueBill_URL);
    }

    addIssueBills(isuueBill){
        return axios.post(IssueBill_URL, isuueBill);
    }

    getIssueBillsId(IssueBillId){
        return axios.get(IssueBill_URL + '/' + IssueBillId );
    }

    updateIssueBills(issueBill, IssueBillId){
        return axios.put(IssueBill_URL + '/' + IssueBillId, issueBill);
    }

    deleteIssueBills(IssueBillId){
        return axios.delete(IssueBill_URL+ '/' + IssueBillId);
    }

}

export default new IssueBillService()
