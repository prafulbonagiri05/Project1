package Reservation.Controller;


import Reservation.Model.ReservationDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class ReservationController {



    @Autowired
    Reservation.Service.ReservationService ReservationService;


    @RequestMapping("/allReservations")
    public List<ReservationDetails> returnAll()
    {
        return ReservationService.returnAll();
    }
    @RequestMapping("/allReservations/{id}")
    public Optional<ReservationDetails> getGuest(@PathVariable Long id)
    {
        return ReservationService.getReservation(id);
    }
    @RequestMapping(method= RequestMethod.POST,value="/allReservations")
    public void addGuest(@RequestBody ReservationDetails Guest)
    {
        ReservationService.addReservation(Guest);
    }
    @RequestMapping(method=RequestMethod.DELETE,value="/allReservations/{id}")
    public void deleteGuest(@PathVariable Long id)
    {
        ReservationService.deleteReservation(id);
    }
    @RequestMapping(method=RequestMethod.PUT,value="/allReservations/{id}")
    public void updateGuest(@RequestBody ReservationDetails Guest,@PathVariable Long id)
    {
        ReservationService.updateReservation(id, Guest);
    }

}
