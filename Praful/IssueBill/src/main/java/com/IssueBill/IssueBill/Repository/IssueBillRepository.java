package com.IssueBill.IssueBill.Repository;

import com.IssueBill.IssueBill.Model.IssueBillDetails;
import com.IssueBill.IssueBill.Vo.RatesDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueBillRepository extends MongoRepository<IssueBillDetails, Long>{


}
