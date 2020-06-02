package com.opportunities;

import org.springframework.data.repository.CrudRepository;

public interface OpportunityDao extends CrudRepository<Opportunity, Integer>,OpportunityDAOCustom{

}
