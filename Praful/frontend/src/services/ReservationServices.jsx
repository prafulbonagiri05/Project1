import axios from 'axios';


const RESERVATION_API="http://localhost:8085/allReservations";


class ReservationServices{
    getReservations()
    {
        return axios.get(RESERVATION_API);
    }
    addReservations(addreservations)
    {
        return axios.post(RESERVATION_API,addreservations)
    }
    getReservationById(reservationId)
    {
        return axios.get(RESERVATION_API+"/"+reservationId);
    }
    updateReservation(reservations,reservationId){
        return axios.put(RESERVATION_API+"/"+reservationId,reservations);
    }
    deleteReservationById(reservationId)
    {
        return axios.delete(RESERVATION_API+"/"+reservationId);
    }

}
export default new ReservationServices();