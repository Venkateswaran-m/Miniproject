package com.opportunities.dao;

import org.springframework.data.repository.CrudRepository;

import com.opportunities.model.Opportunity;

public interface OpportunityDao extends CrudRepository<Opportunity, Integer>,OpportunityDAOCustom{

}
