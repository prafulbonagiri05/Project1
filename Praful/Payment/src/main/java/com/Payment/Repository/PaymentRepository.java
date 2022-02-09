package com.Payment.Repository;

import com.Payment.Model.PaymentDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;


@Repository
@Component
public interface PaymentRepository extends MongoRepository<PaymentDetails,Long> {



}