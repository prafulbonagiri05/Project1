package com.IssueBill.IssueBill.Vo;


import java.util.Date;



public class RatesDetails {


    Long rateid;
    Long code;
    Long FirstNightPrice;
    Date CheckIn;
    Date CheckOut;
    Integer NoOfGuests;
    Integer NoOfDays;
    Integer ExtensionPrice;

    public RatesDetails() {

    }

    public RatesDetails(Long rateid, Long code, Long firstNightPrice, Date checkIn, Date checkOut, Integer noOfGuests, Integer noOfDays, Integer extensionPrice) {
        this.rateid = rateid;
        this.code = code;
        FirstNightPrice = firstNightPrice;
        CheckIn = checkIn;
        CheckOut = checkOut;
        NoOfGuests = noOfGuests;
        NoOfDays = noOfDays;
        ExtensionPrice = extensionPrice;
    }

    public Long getRateid() {
        return rateid;
    }

    public void setRateid(Long rateid) {
        this.rateid = rateid;
    }

    public Long getCode() {
        return code;
    }

    public void setCode(Long code) {
        this.code = code;
    }

    public Long getFirstNightPrice() {
        return FirstNightPrice;
    }

    public void setFirstNightPrice(Long firstNightPrice) {
        FirstNightPrice = firstNightPrice;
    }

    public Date getCheckIn() {
        return CheckIn;
    }

    public void setCheckIn(Date checkIn) {
        CheckIn = checkIn;
    }

    public Date getCheckOut() {
        return CheckOut;
    }

    public void setCheckOut(Date checkOut) {
        CheckOut = checkOut;
    }

    public Integer getNoOfGuests() {
        return NoOfGuests;
    }

    public void setNoOfGuests(Integer noOfGuests) {
        NoOfGuests = noOfGuests;
    }

    public Integer getNoOfDays() {
        return NoOfDays;
    }

    public void setNoOfDays(Integer noOfDays) {
        NoOfDays = noOfDays;
    }

    public Integer getExtensionPrice() {
        return ExtensionPrice;
    }

    public void setExtensionPrice(Integer extensionPrice) {
        ExtensionPrice = extensionPrice;
    }

    @Override
    public String toString() {
        return "RatesDetails{" +
                "rateid=" + rateid +
                ", code=" + code +
                ", FirstNightPrice=" + FirstNightPrice +
                ", CheckIn=" + CheckIn +
                ", CheckOut=" + CheckOut +
                ", NoOfGuests=" + NoOfGuests +
                ", NoOfDays=" + NoOfDays +
                ", ExtensionPrice=" + ExtensionPrice +
                '}';
    }
}
