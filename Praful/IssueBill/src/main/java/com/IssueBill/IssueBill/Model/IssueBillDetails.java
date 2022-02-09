package com.IssueBill.IssueBill.Model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;


@Document (collection = "issuebills")
public class IssueBillDetails {


	@Transient
	public static final String SEQUENCE_NAME = "users_sequence";
	
	@Id
	Long id;

	Integer billingNo;
	Integer quantity;
	Double price;
	Double taxes;
	Date dateOfIssueBill;
	String services;
	Integer unit;
	Long rateId;
		
	public IssueBillDetails() {
	}

	public IssueBillDetails(Long id, Integer billingNo, Integer quantity, Double price, Double taxes, Date dateOfIssueBill, String services, Integer unit, Long rateId) {
		this.id = id;
		this.billingNo = billingNo;
		this.quantity = quantity;
		this.price = price;
		this.taxes = taxes;
		this.dateOfIssueBill = dateOfIssueBill;
		this.services = services;
		this.unit = unit;
		this.rateId = rateId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getBillingNo() {
		return billingNo;
	}

	public void setBillingNo(Integer billingNo) {
		this.billingNo = billingNo;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Double getTaxes() {
		return taxes;
	}

	public void setTaxes(Double taxes) {
		this.taxes = taxes;
	}

	public Date getDateOfIssueBill() {
		return dateOfIssueBill;
	}

	public void setDateOfIssueBill(Date dateOfIssueBill) {
		this.dateOfIssueBill = dateOfIssueBill;
	}

	public String getServices() {
		return services;
	}

	public void setServices(String services) {
		this.services = services;
	}

	public Integer getUnit() {
		return unit;
	}

	public void setUnit(Integer unit) {
		this.unit = unit;
	}

	public Long getRateId() {
		return rateId;
	}

	public void setRateId(Long rateId) {
		this.rateId = rateId;
	}

	@Override
	public String toString() {
		return "IssueBillDetails{" +
				"id=" + id +
				", billingNo=" + billingNo +
				", quantity=" + quantity +
				", price=" + price +
				", taxes=" + taxes +
				", dateOfIssueBill=" + dateOfIssueBill +
				", services='" + services + '\'' +
				", unit=" + unit +
				", rateId=" + rateId +
				'}';
	}
}
