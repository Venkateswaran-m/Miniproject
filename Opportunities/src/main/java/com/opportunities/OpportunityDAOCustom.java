package com.opportunities;

import java.util.List;

public interface OpportunityDAOCustom {

	List<Opportunity> getAllOpportunities();
	boolean updateOpportunity(Opportunity o);
	boolean addOpportunity(Opportunity o);
	
}
