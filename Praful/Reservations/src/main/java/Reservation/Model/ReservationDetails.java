package Reservation.Model;


import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;
import org.springframework.data.annotation.Id;

@Document (collection = "Reservations")
public class ReservationDetails {


    @Transient
    public static final String SEQUENCE_NAME = "users_sequence";

    @Id
    Long id;
    Long Code;
    int NumberOfChildren;
    int NumberOfAdults;
    Date CheckInDate;
    Date CheckOutDate;
    String Status;
    int NumberOfNights;

    public ReservationDetails(){

    }

    public ReservationDetails(Long id, Long code, int numberOfChildren, int numberOfAdults, Date checkInDate, Date checkOutDate, String status, int numberOfNights) {
        this.id = id;
        Code = code;
        NumberOfChildren = numberOfChildren;
        NumberOfAdults = numberOfAdults;
        CheckInDate = checkInDate;
        CheckOutDate = checkOutDate;
        Status = status;
        NumberOfNights = numberOfNights;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCode() {
        return Code;
    }

    public void setCode(Long code) {
        Code = code;
    }

    public int getNumberOfChildren() {
        return NumberOfChildren;
    }

    public void setNumberOfChildren(int numberOfChildren) {
        NumberOfChildren = numberOfChildren;
    }

    public int getNumberOfAdults() {
        return NumberOfAdults;
    }

    public void setNumberOfAdults(int numberOfAdults) {
        NumberOfAdults = numberOfAdults;
    }

    public Date getCheckInDate() {
        return CheckInDate;
    }

    public void setCheckInDate(Date checkInDate) {
        CheckInDate = checkInDate;
    }

    public Date getCheckOutDate() {
        return CheckOutDate;
    }

    public void setCheckOutDate(Date checkOutDate) {
        CheckOutDate = checkOutDate;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public int getNumberOfNights() {
        return NumberOfNights;
    }

    public void setNumberOfNights(int numberOfNights) {
        NumberOfNights = numberOfNights;
    }

    @Override
    public String toString() {
        return "ReservationDetails{" +
                "id=" + id +
                ", Code=" + Code +
                ", NumberOfChildren=" + NumberOfChildren +
                ", NumberOfAdults=" + NumberOfAdults +
                ", CheckInDate=" + CheckInDate +
                ", CheckOutDate=" + CheckOutDate +
                ", Status='" + Status + '\'' +
                ", NumberOfNights=" + NumberOfNights +
                '}';
    }
}
