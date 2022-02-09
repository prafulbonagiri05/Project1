package com.Payment.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.Payment.Model.PaymentDetails;
import com.Payment.Repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service
public class PaymentService {
	
	
	 @Autowired
	    private PaymentRepository paymentrepository;

	@Autowired
	SequenceGeneratorService sequenceGeneratorService;



	public List<PaymentDetails> returnAll() {
		List<PaymentDetails> Items = new ArrayList<>();
		paymentrepository.findAll()
				.forEach(Items::add);
		return Items;
	}


	public Optional<PaymentDetails> getPayment(Long id)
	{
		return paymentrepository.findById(id);
	}

	public void addPayment(PaymentDetails Payment)
	{
		Payment.setId(sequenceGeneratorService.generateSequence(PaymentDetails.SEQUENCE_NAME));
		paymentrepository.save(Payment);
	}

	public void deletePayment(Long id)
	{
		paymentrepository.deleteById(id);
	}

	public void updatePayment(Long id, PaymentDetails Payment)
	{
		paymentrepository.save(Payment);
	}






}
