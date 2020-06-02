package com.opportunities;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OpportunityService {
	
	@Autowired
	OpportunityRepository opportunityRepository;

	public List<Opportunity> getAll() {
		return opportunityRepository.findAll();

	}

	public String addOpportunity(Opportunity o) {
		String responseString;
		if(opportunityRepository.addOpportunity(o))
			responseString="Inserted SucessFully";
		else {
			responseString="Somthing went wrong not added,please try again";
		}
		
		return responseString;
	}

	public String upadateOpportunity(Opportunity o) {
		String responseString;
		if(opportunityRepository.updateOpportunity(o))
			responseString="Inserted SucessFully";
		else {
			responseString="Somthing went wrong not added,please try again";
		}
		
		return responseString;
	}

	public String deleteOpportunity(int id) {
		String responseString;
		if(opportunityRepository.deleteOpportunity(id))
			responseString="Deleted SucessFully";
		else {
			responseString="Somthing went wrong not added,please try again";
		}
		
		return responseString;
	}

	
}