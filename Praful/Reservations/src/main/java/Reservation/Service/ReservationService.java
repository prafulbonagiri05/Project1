package Reservation.Service;


import Reservation.Model.ReservationDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {


    @Autowired
    private Reservation.Repository.ReservationRepository ReservationRepository;

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;



    public List<ReservationDetails> returnAll()
    {
        List<ReservationDetails> Reservations = new ArrayList<>();
        ReservationRepository.findAll()
                .forEach(Reservations::add);
        return Reservations;
    }


    public Optional<ReservationDetails> getReservation(Long id)
    {
        return ReservationRepository.findById(id);
    }
    public void addReservation(ReservationDetails Reservation)
    {
        Reservation.setId(sequenceGeneratorService.generateSequence(ReservationDetails.SEQUENCE_NAME));
        ReservationRepository.save(Reservation);
    }
    public void deleteReservation(Long id)
    {
        ReservationRepository.deleteById(id);
    }
    public void updateReservation(Long id,ReservationDetails Reservation)
    {
        ReservationRepository.save(Reservation);
    }


}