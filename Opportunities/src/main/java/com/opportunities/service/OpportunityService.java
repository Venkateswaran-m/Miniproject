package com.opportunities.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ResponseBody;

import com.opportunities.dao.OpportunityDao;
import com.opportunities.model.LocationCount;
import com.opportunities.model.Opportunity;


@Service
public class OpportunityService {

	@Autowired
	OpportunityDao dao;

	public String addOpportunity(Opportunity opportunity) {
		dao.save(opportunity);
		return "Success";
	}

	public  List<Opportunity> getOpportunities() {
		
		List<Opportunity> opportunities =dao.getAllOpportunities();
		//return  dao.getAllOpportunities();
		return opportunities;
	}
	public void deleteOpportunity(Integer id)
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
	public List<LocationCount> getLocation()
	{
	//	dao.getLocation().get(1).toString();
		return dao.getLocation();
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
