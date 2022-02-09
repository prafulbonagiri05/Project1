import axios from "axios";

const PAYMENT_URL = "http://localhost:8087/SetRates";


class PaymentService{
    getPayment(){
        return axios.get(PAYMENT_URL);
    }

    addPayment(payment){
        return axios.post(PAYMENT_URL, payment);
    }

    getPaymentById(PaymentId){
        return axios.get(PAYMENT_URL + '/' + PaymentId );
    }

    updatePayment(Payment, PaymentId){
        return axios.put(PAYMENT_URL + '/' + PaymentId, Payment);
    }

    deletePayment(PaymentId){
        return axios.delete(PAYMENT_URL+ '/' + PaymentId);
    }

}

export default new PaymentService()
