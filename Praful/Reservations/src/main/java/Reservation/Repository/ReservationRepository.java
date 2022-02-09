package Reservation.Repository;


import Reservation.Model.ReservationDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
@Component
public interface ReservationRepository extends MongoRepository<ReservationDetails,Long> {



}
