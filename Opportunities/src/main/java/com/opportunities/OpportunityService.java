package com.opportunities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ResponseBody;

@Component
public class OpportunityService {

	@Autowired
	OpportunityDao dao;

	public void addOpportunity(Opportunity opportunity) {
		dao.save(opportunity);
	}

	public @ResponseBody Iterable<Opportunity> getAllOpportunities() {

		return dao.findAll();
	}
}
