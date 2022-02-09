import axios from 'axios';

const PaymentDetail_API="http://localhost:8090/all";
 
 class PaymentDetailsService{

    getDetails(){
        return axios.get(PaymentDetail_API);
    }

    createDetails(details){
        return axios.post(PaymentDetail_API, details);
    }

    getDetailsById(detailsId){
        return axios.get(PaymentDetail_API + '/' + detailsId);
    }

    updateDetails(details, detailsId){
        return axios.put(PaymentDetail_API + '/' + detailsId, details);
    }

    deleteDetails(detailsId){
        return axios.delete(PaymentDetail_API + '/' + detailsId);
    }


 }

 export default new PaymentDetailsService()