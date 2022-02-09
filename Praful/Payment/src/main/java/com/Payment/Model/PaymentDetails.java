package com.Payment.Model;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

public class
PaymentDetails {


    @Transient
    public static final String SEQUENCE_NAME = "users_sequence";


    @Id
    Long id;
    Long Total;
    Date PayTime;
    Long CreditCard;


    public PaymentDetails() {
    }

    public PaymentDetails(Long id, Long total, Date payTime, Long creditCard) {
        this.id = id;
        Total = total;
        PayTime = payTime;
        CreditCard = creditCard;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTotal() {
        return Total;
    }

    public void setTotal(Long total) {
        Total = total;
    }

    public Date getPayTime() {
        return PayTime;
    }

    public void setPayTime(Date payTime) {
        PayTime = payTime;
    }

    public Long getCreditCard() {
        return CreditCard;
    }

    public void setCreditCard(Long creditCard) {
        CreditCard = creditCard;
    }

    @Override
    public String toString() {
        return "PaymentDetails{" +
                "id=" + id +
                ", Total=" + Total +
                ", PayTime=" + PayTime +
                ", CreditCard=" + CreditCard +
                '}';
    }
}
