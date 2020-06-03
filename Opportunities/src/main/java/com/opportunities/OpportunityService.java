package com.opportunities;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ResponseBody;


@Component
public class OpportunityService {

	@Autowired
	OpportunityDao dao;

	public String addOpportunity(Opportunity opportunity) {
		dao.save(opportunity);
		return "Success";
	}

	public  List<Opportunity> getOpportunities() {

		return  dao.getAllOpportunities();
	}
	public void deleteCandidate(Integer id)
	{
		dao.deleteById(id);
	}
	public String updateOpportunity(Opportunity o) {
		String responseString;
		if(dao.updateOpportunity(o))
			responseString="Inserted SucessFully";
		else {
			responseString="Somthing went wrong not added,please try again";
		}
		
		return responseString;
	}
//	public String addOpportunity(Opportunity o) {
//		String responseString;
//		if(dao.addOpportunity(o))
//			responseString="Inserted SucessFully";
//		else {
//			responseString="Please try again";
//		}
//		
//		return responseString;
//	}
}
