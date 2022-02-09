package com.IssueBill.IssueBill.Vo;

import com.IssueBill.IssueBill.Model.IssueBillDetails;

import java.util.Optional;

public class ResponceTemplateVo {

    private Optional<IssueBillDetails> issueBillDetails;
    private RatesDetails ratesDetails;

    public ResponceTemplateVo(IssueBillDetails issueBillDetails, RatesDetails ratesDetails) {
        this.issueBillDetails = Optional.ofNullable(issueBillDetails);
        this.ratesDetails = ratesDetails;
    }

    public ResponceTemplateVo() {

    }

    public Optional<IssueBillDetails> getIssueBillDetails() {
        return issueBillDetails;
    }

    public void setIssueBillDetails(Optional<IssueBillDetails> issueBillDetails) {
        this.issueBillDetails = issueBillDetails;
    }

    public RatesDetails getRatesDetails() {
        return ratesDetails;
    }

    public void setRatesDetails(RatesDetails ratesDetails) {
        this.ratesDetails = ratesDetails;
    }

    @Override
    public String toString() {
        return "ResponceTemplateVo{" +
                "issueBillDetails=" + issueBillDetails +
                ", ratesDetails=" + ratesDetails +
                '}';
    }
}
