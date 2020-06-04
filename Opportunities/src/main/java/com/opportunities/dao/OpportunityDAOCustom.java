package com.opportunities.dao;

import java.util.List;

import com.opportunities.model.LocationCount;
import com.opportunities.model.Opportunity;

public interface OpportunityDAOCustom {

	List<Opportunity> getAllOpportunities();
	boolean updateOpportunity(Opportunity o);
	boolean addOpportunity(Opportunity o);
	List<LocationCount> getLocation();
	
}
